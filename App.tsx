import React from 'react';
import {I18nextProvider} from 'react-i18next';

import {MainScreen} from './src/screens/MainScreen';
import {ThemeProvider} from './src/context/ThemeContext';
import i18n from './src/translations/i18nConfig';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <MainScreen />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
