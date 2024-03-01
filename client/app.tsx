import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from './components/Header';
import DoctorGrid from './components/DoctorGrid';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5 minutes
      cacheTime: 300000,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <DoctorGrid />
    </QueryClientProvider>
  );
};

export default App;