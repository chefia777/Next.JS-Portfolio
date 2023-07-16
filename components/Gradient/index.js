import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const GradientCard = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`gradient-circle left-3 ${
        mounted && theme === "dark" ? "" : "hidden"
      } `}
    >
    </div>
  );
};

export default GradientCard;
