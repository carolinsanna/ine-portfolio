import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

import { Home } from "./Home"
import { About } from "./About"
import { NursaPayments } from "./NursaPayments"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
	{
		path: "/about",
		element: <About/>,
	},
  {
    path: "/nursapayments",
    element: <NursaPayments/>,
  },
])

export const Router = () => <RouterProvider router={router} />
