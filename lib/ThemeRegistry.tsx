'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import theme from './theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createEmotionCache() {
  const cache = createCache({ key: 'mui' });
  cache.compat = true;
  return cache;
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = React.useState(() => {
    return createEmotionCache();
  });

  useServerInsertedHTML(() => {
    const entries = Object.entries(cache.inserted);
    if (entries.length === 0) return null;

    let styles = '';
    const dataEmotionAttribute = cache.key;
    const names: string[] = [];

    for (const [name, value] of entries) {
      if (typeof value === 'string') {
        styles += value;
        names.push(name);
      }
    }

    return (
      <style
        key={dataEmotionAttribute}
        data-emotion={`${dataEmotionAttribute} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
