"use client";

import { useSearchParams } from "next/navigation";
import PayphoneButton from "@/components/shared/payphone-button";
import { useEffect, useState } from "react";
import { getOrder } from "@/actions";

interface Sale {
  clientTransactionId: string;
  amount: number;
  amountWithoutTax: number;
  amountWithTax: number;
  tax: number;
  reference: string;
}

export default function PayphonePage() {
  const [sale, setSale] = useState<Sale | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) {
      setError("Parámetros inválidos en la URL");
      setLoading(false);
      return;
    }

    const fetchOrder = async () => {
      try {
        const order = await getOrder(id);
        const o = order.order;
        setSale({
          clientTransactionId: o.clientTransactionId,
          amount: o.amount,
          amountWithoutTax: o.amountWithoutTax,
          amountWithTax: o.amountWithTax,
          tax: o.tax,
          reference: o.reference,
        });
      } catch (err) {
        console.error("Error fetching order:", err);
        setError("Error al obtener la orden");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!sale) return <div>No se encontró la orden</div>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <PayphoneButton {...sale} />
    </div>
  );
}
