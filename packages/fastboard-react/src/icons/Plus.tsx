import type { IconProps } from "../typings";

import React from "react";
import { themes } from "../theme";

export function Plus({ theme = "light", active }: IconProps) {
  const config = themes[theme];
  const stroke = active ? config.activeColor : config.color;

  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m-7-7v14" stroke={stroke} strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}
