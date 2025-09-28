import React from 'react'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'

import Homepage from './Components/HomeDashboard/Homepage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <div> <Homepage /> </div>
    },
])

function App() {

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;
