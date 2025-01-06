"use client";

import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../lib/emotion-cache";
import theme from "@/lib/theme";

const clientSideEmotionCache = createEmotionCache();

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* Tailwind styles are applied to children */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
