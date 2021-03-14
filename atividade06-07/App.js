import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/components/Routes';


const App = () => {
  return (
    <SafeAreaProvider>
      <Routes></Routes>
    </SafeAreaProvider>
  );
};

export default App;