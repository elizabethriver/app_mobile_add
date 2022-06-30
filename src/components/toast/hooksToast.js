import { useState } from "react";

export const HooksToast = () => {
const [showA, setShowA] = useState(true);

  return {
    showA,
    setShowA,
  };
};