import React from "react";
import { AlertTriangle } from "lucide-react";

type ErrorMessageProps = {
  text?: string;
};

export default function ErrorMessage({
  text = "Algo deu errado",
}: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-red-400 animate-fade-in">
      <AlertTriangle className="w-10 h-10 mb-3 text-red-500" />
      <p className="text-sm font-medium tracking-wide text-center">{text}</p>
    </div>
  );
}
