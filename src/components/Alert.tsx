import React, { FC } from "react";

export type Kind = "info" | "positive" | "negative" | "warning" | "test";
export type KindMap = Record<Kind, string>;

const kinds: KindMap = {
  info: "#5352ED",
  positive: "#2ED573",
  negative: "#FF4757",
  warning: "#FFA502",
  test: "sdf",
};

export interface AlertProps {
  /**
   * Set this to change alert kind
   * @default info
   */
  kind: "info" | "positive" | "negative" | "warning" | "test";
}

export const Alert: FC<AlertProps> = ({ children, kind, ...rest }) => (
  <div
    style={{
      padding: 20,
      background: kinds[kind] || "black",
      borderRadius: 3,
      color: "white",
    }}
    {...rest}
  >
    {children}
  </div>
);
