"use client";

import {CacheProvider} from "@emotion/react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../lib/emotion-cache";
import theme from "@/lib/theme";
import {useRouter} from "next/navigation";
import {NextUIProvider} from "@nextui-org/react";

const clientSideEmotionCache = createEmotionCache();

export function Providers({children}: {children: React.ReactNode}) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          {/* Tailwind styles are applied to children */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </NextUIProvider>
  );
}
