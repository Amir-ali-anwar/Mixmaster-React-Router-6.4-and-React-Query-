import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "newsletter",
        element: <NewsLetter />
      },
      {
        path: "about",
        element: <About />
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
