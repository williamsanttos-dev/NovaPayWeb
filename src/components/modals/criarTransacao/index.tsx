import { useState } from "react";
import type { TxPayload } from "../../../types/TxPayload";
import { createTx } from "./createTx";
import Loading from "../../ui/Loading";
import ErrorMessage from "../../ui/ErrorMessage";
import CriarTransacao from "./CriarTransacao";

type IndexProps = {
  onClose: () => void;
};

export default function Index({ onClose }: IndexProps) {
  const [isError, setIsError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit({
    from,
    to,
    amount,
    meta,
  }: TxPayload): Promise<void> {
    try {
      setIsLoading(true);
      setIsError(null);

      const metaSanitized = meta ? meta : "";
      await createTx({ from, to, amount, meta: metaSanitized });
    } catch (err) {
      console.error("Erro ao criar transação:", err);
      setIsError("Falha ao criar transação");
    } finally {
      setIsLoading(false);
    }
  }

  if (isError) return <ErrorMessage />;

  if (isLoading) return <Loading />;

  return <CriarTransacao onClose={onClose} onSubmit={onSubmit} />;
}
