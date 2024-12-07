import HomePage from "../pages/HomePage";
import ImagePage from "../pages/ImagePage";
import NotFoundPage from "../pages/NotFoundPage";

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/:image',
    element: <ImagePage />,
    errorElement: <NotFoundPage />
  }
]

export default routesConfig