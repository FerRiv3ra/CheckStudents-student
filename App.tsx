import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {MainScreen} from './src/screens/MainScreen';
import {ThemeProvider} from './src/context/ThemeContext';
import i18n from './src/translations/i18nConfig';
import {AppProvider} from './src/context/AppContext';

const App = () => {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <AppProvider>
          <ThemeProvider>
            <MainScreen />
          </ThemeProvider>
        </AppProvider>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default App;
