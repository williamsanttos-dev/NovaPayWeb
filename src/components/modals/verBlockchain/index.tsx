import { useEffect, useState } from "react";
import type { Block } from "../../../types/Block";
import { fetchChain } from "./getChain";
import ErrorMessage from "../../ui/ErrorMessage";
import Loading from "../../ui/Loading";
import VerBlockchain from "./VerBlockchain";

type IndexProps = {
  onClose: () => void;
};

export default function Index({ onClose }: IndexProps) {
  const [chain, setChain] = useState<Block[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleFetchChain(): Promise<void> {
    try {
      setLoading(true);
      setError(null);

      const chain: Block[] = await fetchChain();
      console.log(chain[1].prev_hash);
      setChain(chain);
    } catch (err) {
      console.error("Erro ao buscar cadeia:", err);
      setError("Falha ao carregar blockchain");
      setChain([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleFetchChain();
  }, []);

  if (error) return <ErrorMessage />;

  if (chain === undefined || loading) return <Loading />;

  return <VerBlockchain onClose={onClose} blocks={chain} />;
}
