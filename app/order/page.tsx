"use client";
import { checkOrderPayphone } from "@/actions";
import { ResPayphone } from "@/interface/res-payphone";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const OrderDetailsPage = () => {
  const [sale, setSale] = useState<ResPayphone | null>(null);
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

  return (
    <div>
      <pre>{JSON.stringify(sale, null, 2)}</pre>
    </div>
  );
};

export default OrderDetailsPage;
