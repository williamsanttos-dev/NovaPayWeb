import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NovaPay from "./components/NovaPay.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NovaPay />
  </StrictMode>
);
