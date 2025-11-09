import React, { useState } from "react";
import IndexVerBlockchain from "./modals/verBlockchain";
import IndexCriarTransacao from "./modals/criarTransacao";

export default function NovaPay() {
  const [openModal, setOpenModal] = useState<null | string>(null);

  return (
    <div className="min-h-screen bg-[#0f1720] text-slate-100">
      <header className="h-20 bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center shadow-sm">
        <div className="text-white font-extrabold tracking-widest text-2xl">
          NOVA PAY
        </div>
      </header>

      {/* Hero */}
      <main className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-6 py-12">
        <div className="max-w-3xl text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A Fintech que traz transparência e segurança para você!
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Crie transações, acompanhe os blocos e veja a transparência da
            blockchain.
          </p>

          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setOpenModal("criar")}
              className="py-3 px-6 rounded-lg font-semibold bg-gradient-to-b from-blue-600 to-blue-500 shadow-lg hover:translate-y-[-2px] transition-transform"
            >
              Criar Transação
            </button>

            <button
              onClick={() => setOpenModal("ver")}
              className="py-3 px-6 rounded-lg font-semibold bg-gradient-to-b from-blue-600 to-blue-500 shadow-lg hover:translate-y-[-2px] transition-transform"
            >
              Ver Blockchain
            </button>
          </div>
        </div>
      </main>

      <a
        href="#"
        className="fixed left-4 bottom-4 w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold shadow-2xl"
        aria-label="Atalho"
      >
        N
      </a>

      {openModal === "criar" && (
        <IndexCriarTransacao onClose={() => setOpenModal(null)} />
      )}
      {openModal === "ver" && (
        <IndexVerBlockchain onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
}
