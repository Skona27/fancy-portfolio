import Link from "next/link";
import React from "react";
import { IActionComponent } from ".";
import { useTheme } from "../../../../hooks/Theme";
import { Button } from "../../../Button";

export const ButtonItem: React.FC<IActionComponent> = React.memo(
  ({ active, href, children }) => {
    const { colors } = useTheme();
    return (
      <Link href={href}>
        <a style={{ color: colors.secondary, border: "none" }}>
          <Button active={active}>{children}</Button>
        </a>
      </Link>
    );
  }
);
ButtonItem.displayName = "ButtonItem";
