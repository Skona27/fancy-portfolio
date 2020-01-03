import React from "react";

export const Dynamic: React.FC = ({ children }) => {
  if (typeof window === "undefined") {
    return null;
  }

  return <>{children}</>;
};
