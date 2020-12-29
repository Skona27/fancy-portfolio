import Link from "next/link";
import React from "react";
import { IActionComponent } from ".";
import { Button } from "../../../Button";

export const ButtonItem: React.FC<IActionComponent> = React.memo(
  ({ active, href, children }) => {
    return (
      <Link href={href}>
        <Button active={active}>{children}</Button>
      </Link>
    );
  }
);
ButtonItem.displayName = "ButtonItem";
