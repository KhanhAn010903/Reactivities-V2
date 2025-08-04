//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/style.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { router } from './app/router/Router.tsx';
import { store, StoreContext } from './lib/stores/store.ts';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  //<StrictMode>
  <StoreContext.Provider value={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StoreContext.Provider>


  //</StrictMode>,
)
