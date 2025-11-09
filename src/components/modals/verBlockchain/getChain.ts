import type { Block } from "../../../types/Block";

export const fetchChain = async (): Promise<Block[]> => {
  const request = await fetch("http://localhost:3002/chain", {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!request.ok) throw new Error(`Erro HTTP ${request.status}`);

  return await request.json();
};
