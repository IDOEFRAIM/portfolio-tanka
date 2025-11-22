"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// On importe le bon type pour TypeScript
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}