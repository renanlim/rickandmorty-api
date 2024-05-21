import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp should be used within a AppProvider.");
  }
  return context;
}
