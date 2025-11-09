import type { Transaction } from "../../../types/Transaction";
import type { TxPayload } from "../../../types/TxPayload";

export const createTx = async (payload: TxPayload): Promise<Transaction> => {
  const request = await fetch("http://localhost:3002/tx", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!request.ok)
    throw new Error(
      `Error HTTP: ${request.status}\nMessage: ${request.statusText}`
    );

  return await request.json();
};
