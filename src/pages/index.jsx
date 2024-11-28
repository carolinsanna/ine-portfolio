import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

import { Home } from "./Home"
import { About } from "./About"
import { NursaPayments } from "./NursaPayments"
import { NursaManageRequest } from "./NursaManageRequest"
import { NursaResumeImporter } from "./NursaResumeImporter"
import { PSE } from "./UndpPSE"
import { Wodz } from "./Wodz"
import { CatSis } from "./CatSis"
import { GuiaVeg } from "./GuiaVeg"
import { Portfolio } from "./Portfolio"
import { DailyUIChallenges } from "./Daily"
import { Poster } from "./Arts"

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
  {
    path: "/nursamanagerequest",
    element: <NursaManageRequest/>,
  },
  {
    path: "/nursaresumeimporter",
    element: <NursaResumeImporter/>,
  },
  {
    path: "/undppse",
    element: <PSE/>,
  },
  {
    path: "/wodz",
    element: <Wodz/>,
  },
  {
    path: "/catsis",
    element: <CatSis/>,
  },
  {
    path: "/guiaveg",
    element: <GuiaVeg/>,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/dailyuichallenges",
    element: <DailyUIChallenges />,
  },
  {
    path: "/poster",
    element: <Poster />,
  }

])

export const Router = () => <RouterProvider router={router} />
