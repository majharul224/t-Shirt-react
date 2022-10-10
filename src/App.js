
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home/Home';
import Orders from './component/Orders/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
       
        {path:"/",
        element:<Home></Home>,
        loader:async()=> fetch('tshirts.json')
      },
        {path:"/orders",
        element:<Orders></Orders>
      },
       
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
