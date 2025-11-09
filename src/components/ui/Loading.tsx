import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading({ text = "Carregando..." }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-slate-300 animate-fade-in">
      {/* Ícone girando */}
      <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-3" />

      {/* Texto opcional */}
      <p className="text-sm font-medium tracking-wide">{text}</p>
    </div>
  );
}
