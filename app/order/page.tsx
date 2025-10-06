"use client";
import { checkOrderPayphone } from "@/actions";
import PayphoneCard from "@/components/shared/payphone-card";
import { ResPayphone } from "@/interface/res-payphone";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const OrderDetailsPage = () => {
  const [sale, setSale] = useState<ResPayphone[]>([]);
  const searchParams = useSearchParams();
  const clientTransactionId = searchParams.get("clientTransactionId");

  useEffect(() => {
    if (clientTransactionId) {
      const test = async () => {
        const res = await checkOrderPayphone(clientTransactionId);
        setSale(res.response);
      };
      test();
    }
  }, [clientTransactionId]);

  if (!sale) {
    return <div>Cargando detalles de la orden...</div>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted/10 p-4">
      {sale.length > 0 ? (
        <div className="w-full max-w-2xl">
          {sale.map((transaction) => (
            <PayphoneCard
              key={transaction.clientTransactionId}
              data={transaction}
            />
          ))}
        </div>
      ) : (
        <div>No se encontraron transacciones.</div>
      )}
      <pre>{JSON.stringify(sale, null, 2)}</pre>
    </main>
  );
};

export default OrderDetailsPage;
