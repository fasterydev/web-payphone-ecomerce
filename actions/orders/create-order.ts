"use server";
import { envs } from "@/env";

export const createOrder = async (productId:string) => {
  try {
    const response = await fetch(`${envs.BackendUrl}/orders/createOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

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
      order: resData,
      message: resData.message || "Orden creada exitosamente",
    };
  } catch (error) {
    console.error("Error en  createOrder:", error);
    throw new Error("Error al crear la orden: ");
  }
};
