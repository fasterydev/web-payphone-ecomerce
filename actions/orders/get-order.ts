"use server";
import { envs } from "@/env";

export const getOrder = async (orderId: string) => {
  try {
    const response = await fetch(
      `${envs.BackendUrl}/orders/getOrder/${orderId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      let errorMessage = "Error desconocido";
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (jsonError) {
        console.error("Error parsing error response:", jsonError);
      }
      return {
        statusCode: response.status,
        message: errorMessage,
      };
    }

    const resData = await response.json();

    return {
      statusCode: response.status,
      message: resData.message || "Orden obtenida exitosamente",
      order: resData,
    };
  } catch (error) {
    console.error("Error en getSales:", error);
    throw new Error("Error al obtener las ventas");
  }
};
