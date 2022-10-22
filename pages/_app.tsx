import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import * as React from 'react';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

import theme from "@/universal/theme";

// import '../styles/globals.css';

// const clientSideEmotionCache = createEmotionCache();

// const lightTheme = createTheme(theme);

const MyApp: React.FunctionComponent<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (

      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Component {...pageProps} />
      </ThemeProvider>
  );
};

export default MyApp;
