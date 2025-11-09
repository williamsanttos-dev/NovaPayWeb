import React, { useState } from "react";
import ModalWrapper from "../ModalWrapper";
import type { TxPayload } from "../../../types/TxPayload";

type CriarTransacaoProps = {
  onClose: () => void;
  onSubmit: ({ from, to, amount, meta }: TxPayload) => Promise<void>;
};

export default function CriarTransacao({
  onClose,
  onSubmit,
}: CriarTransacaoProps) {
  const [payload, setPayload] = useState({
    from: "",
    to: "",
    amount: 0,
    meta: "",
  });

  return (
    <ModalWrapper title="Criar Transação" onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(payload);
          onClose();
        }}
      >
        <div className="flex flex-col gap-3">
          <input
            value={payload.from}
            onChange={(e) => setPayload({ ...payload, from: e.target.value })}
            placeholder="Remetente"
            className="p-2 bg-slate-800 rounded"
          />
          <input
            value={payload.to}
            onChange={(e) => setPayload({ ...payload, to: e.target.value })}
            placeholder="Destinatário"
            className="p-2 bg-slate-800 rounded"
          />
          <input
            value={payload.amount}
            onChange={(e) =>
              setPayload({
                ...payload,
                amount: Number.parseInt(e.target.value) || 0,
              })
            }
            placeholder="Valor"
            type="text"
            className="p-2 bg-slate-800 rounded"
          />
          <input
            value={payload.meta}
            onChange={(e) =>
              setPayload({
                ...payload,
                meta: e.target.value,
              })
            }
            placeholder="Mensagem"
            type="text"
            className="p-2 bg-slate-800 rounded"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 rounded border"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-3 py-1 rounded bg-blue-600 text-white"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
}
