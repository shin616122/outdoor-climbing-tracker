import React, { useReducer, useEffect, useMemo } from "react";

import { AppProps } from "next/app";

import AuthContext from "~/src/lib/AuthContext";
import authReducer from "~/src/lib/authReducer";
import { listenAuthState } from "~/src/lib/firebase";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import ColorModeContext from '../context/ColorModeContext';
import { blueGrey, grey, brown } from "@mui/material/colors";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(
    authReducer.reducer,
    authReducer.initialState
  );
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
              primary: blueGrey,
              divider: blueGrey[200],
              text: {
                primary: grey[900],
                secondary: grey[800],
              },
            }
            : {
              primary: brown,
              divider: brown[700],
              background: {
                default: brown[900],
                paper: brown[900],
              },
              text: {
                primary: '#fff',
                secondary: brown[500],
              },
            }),
        },
      }),
    [mode]
  );

  useEffect(() => {
    return listenAuthState(dispatch);
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={state}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </ThemeProvider>
    </ColorModeContext.Provider >
  );
}

export default MyApp;
