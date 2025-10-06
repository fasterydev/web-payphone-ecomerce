// https://www.docs.payphone.app/cajita-de-pagos-payphone
// Cálculo del monto total (amount)
// amount = amountWithoutTax + amountWithTax  + tax + service + tip
"use client";

import { useEffect } from "react";
type Props = {
  clientTransactionId: string;
  amount: number;
  amountWithoutTax: number;
  amountWithTax: number;
  tax: number;
  reference: string;
};

export default function PayphoneButton({
  clientTransactionId,
  amount,
  amountWithoutTax,
  amountWithTax,
  reference,
  tax,
}: Props) {
  useEffect(() => {
    // Configuración desde variables de entorno
    const config = {
      token: process.env.NEXT_PUBLIC_PAYPHONE_TOKEN!,
      // TODO: clientTransactionId: generar uno único por orden
      clientTransactionId: clientTransactionId,
      amount: amount,
      amountWithoutTax: amountWithoutTax,
      amountWithTax: amountWithTax,
      tax: tax,
      currency: "USD",
      storeId: process.env.NEXT_PUBLIC_PAYPHONE_STORE_ID!,
      reference: reference,
    };

    // Validar que haya token y storeId
    if (!config.token || !config.storeId) {
      console.error(
        "❌ Faltan variables de entorno: NEXT_PUBLIC_PAYPHONE_TOKEN o NEXT_PUBLIC_PAYPHONE_STORE_ID"
      );
      return;
    }

    // Crear script dinámico
    const script = document.createElement("script");
    script.src =
      "https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.js";
    script.type = "module";

    script.onload = () => {
      // @ts-expect-error: librería externa
      if (typeof PPaymentButtonBox !== "undefined") {
        // @ts-expect-error: librería externa
        const ppb = new PPaymentButtonBox(config);
        ppb.render("pp-button");
      }
    };

    document.body.appendChild(script);

    // Inyectar el CSS del widget
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.payphonetodoesposible.com/box/v1.1/payphone-payment-box.css";
    document.head.appendChild(link);

    // Cleanup cuando el componente se desmonte
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-red-400 px-2 py-8"
      id="pp-button"
    />
  );
}
