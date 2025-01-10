import createCache from '@emotion/cache';

const createEmotionCache = () => {
  return createCache({
    key: 'css-x', // Key for Emotion styles
    prepend: true, // Ensure MUI styles are injected first
  });
};

export default createEmotionCache;
