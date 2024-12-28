"use client";

import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {theme} from "@/lib/theme";
import {createEmotionCache} from "@/lib/emotion-cache";

const clientSideEmotionCache = createEmotionCache();

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
