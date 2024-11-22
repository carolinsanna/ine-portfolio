import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

import { Home } from "./Home"
import { About } from "./About"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
	{
		path: "/about",
		element: <About/>,
	},
])

export const Router = () => <RouterProvider router={router} />
