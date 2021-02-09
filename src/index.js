import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
//kareem36.us.auth0.com   Domain
//TG4GBdaFhxbaP5iHvojQCX1I4NNPt8xH  Client-Id
ReactDOM.render(
    <Auth0Provider
        domain='kareem36.us.auth0.com'
        clientId='TG4GBdaFhxbaP5iHvojQCX1I4NNPt8xH'
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
    >
        <UserProvider>
<ProductsProvider>
    <FilterProvider>
        <CartProvider>
        
        <App />

        </CartProvider>
    </FilterProvider>
</ProductsProvider>
</UserProvider>
</Auth0Provider>,
document.getElementById('root')
)
