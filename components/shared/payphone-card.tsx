"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ResPayphone } from "@/interface/res-payphone";

export default function PayphoneCard({ data }: { data: ResPayphone }) {
  const {
    amount,
    currency,
    cardBrand,
    cardType,
    lastDigits,
    transactionStatus,
    message,
    clientTransactionId,
    storeName,
    date,
  } = data;

  return (
    <Card className="w-full max-w-md mx-auto shadow-md border border-muted p-2 rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex justify-between items-center">
          {storeName || "Transacción Payphone"}
          <Badge
            variant={
              transactionStatus === "Approved" ? "default" : "destructive"
            }
          >
            {transactionStatus}
          </Badge>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {new Date(date).toLocaleString()}
        </p>
      </CardHeader>

      <Separator className="my-2" />

      <CardContent className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium">Monto:</span>
          <span>
            {currency} {amount / 100}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Tarjeta:</span>
          <span>
            {cardBrand} ({cardType}) •••• {lastDigits}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">ID Transacción:</span>
          <span className="truncate max-w-[150px] text-right">
            {clientTransactionId}
          </span>
        </div>

        <Separator className="my-1" />

        <div className="text-muted-foreground text-xs">
          {message || "Sin mensaje de estado"}
        </div>
      </CardContent>
    </Card>
  );
}
