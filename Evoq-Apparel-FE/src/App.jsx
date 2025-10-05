import React from 'react'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'

import Homepage from './Components/HomeDashboard/Homepage.jsx'
import ProductDetails from './Components/ProductPage/ProductDetails.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div> <Homepage /> </div>
    },
    {
        path: '/products/:color',
        element: <div> <ProductDetails /> </div>
    }
])

function App() {

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;
