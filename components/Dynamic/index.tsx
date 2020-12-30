import React from "react";

export const Dynamic: React.FC = ({ children }) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(true);
  }, []);

  return visible ? <>{children}</> : null;
};
