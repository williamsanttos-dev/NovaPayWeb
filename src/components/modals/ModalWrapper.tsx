import React, { type ReactNode } from "react";

type ModalWrapperProps = {
  title?: string; // opcional
  children: ReactNode; // o conteúdo do modal
  onClose: () => void; // função chamada ao fechar
};

export default function ModalWrapper({
  title,
  children,
  onClose,
}: ModalWrapperProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-[#0b1220] rounded-2xl max-w-xl w-full p-6">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="text-slate-400">
            Fechar
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
