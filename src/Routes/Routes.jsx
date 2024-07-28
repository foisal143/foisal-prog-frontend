import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import ProjectPage from '../pages/ProjectPage/ProjectPage/ProjectPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <p>this is about</p>,
      },
      {
        path: '/projects',
        element: <ProjectPage />,
      },
      {
        path: '/resume',
        element: <p>this is resume</p>,
      },
    ],
  },
]);

export default router;
