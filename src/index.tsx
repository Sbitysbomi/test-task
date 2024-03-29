import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app/App.tsx'
import './index.scss'
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/StoreProvider/ui/StoreProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <StoreProvider>
              <App />
          </StoreProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
