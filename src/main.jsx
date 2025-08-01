import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppContextProvider } from './context/AppContextProviders'
import { BrowserRouter } from 'react-router'
import App from './App'
import { ClerkProvider } from '@clerk/clerk-react'
// import { RouterProvider } from 'react-router'
// import router from './App.jsx'
// import AuthProvider from './context/AppContext.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <AppContextProvider>
        <App></App>
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>
)
