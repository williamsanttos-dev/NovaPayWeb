import React from "react";
import type { Block } from "../../../types/Block";
import ModalWrapper from "../ModalWrapper";

type VerBlockchainProps = {
  onClose: () => void;
  blocks: Block[];
};

export default function VerBlockchain({ onClose, blocks }: VerBlockchainProps) {
  return (
    <ModalWrapper title="Blockchain" onClose={onClose}>
      <div className="max-h-[70vh] overflow-y-auto space-y-5 pr-1">
        {blocks.length === 0 ? (
          <p className="text-slate-400 text-center py-8">
            Nenhum bloco encontrado.
          </p>
        ) : (
          blocks.map((block) => (
            <div
              key={block.hash}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-slate-100">
                  Bloco #{block.index}
                </h3>
                <span className="text-xs text-slate-400">
                  {new Date(block.timestamp).toLocaleString()}
                </span>
              </div>

              <div className="text-xs font-mono text-slate-400 break-words">
                <div>Hash: {block.hash.slice(0, 40)}...</div>
                <div>PrevHash: {block.prev_hash.slice(0, 40)}...</div>
                <div>Nonce: {block.nonce}</div>
              </div>

              {/* Transações */}
              <div className="mt-4 space-y-2">
                <p className="text-slate-300 text-sm font-semibold">
                  Transações ({block.transactions.length})
                </p>

                {block.transactions.length === 0 ? (
                  <p className="text-slate-500 text-sm italic">
                    Nenhuma transação neste bloco.
                  </p>
                ) : (
                  <div className="grid gap-2">
                    {block.transactions.map((tx) => (
                      <div
                        key={tx.id}
                        className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 text-xs"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-mono text-[11px] text-slate-400">
                            ID: {tx.id}
                          </span>
                          <span className="font-semibold text-slate-200">
                            {tx.amount} ⚡
                          </span>
                        </div>
                        <div className="text-slate-400">
                          <div>De: {tx.from}</div>
                          <div>Para: {tx.to}</div>
                          <div className="italic text-slate-500 text-[11px] mt-1">
                            {tx.meta}
                          </div>
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1">
                          {new Date(tx.timestamp).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </ModalWrapper>
  );
}
