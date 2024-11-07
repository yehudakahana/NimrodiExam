import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
      <Layout children={
       <Routes>
        { <Route path='/forbidden' element={<Forbidden/>} /> }
          { <Route path='/' element={<Reception/>} /> }          
          { <Route path='/floor/:index'  element={<PrivateRoute component={<Floor/>} />} /> }

       </Routes>
      } />
      
      
    </>
  )
}

export default App











// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Reception from "./pages/Reception/Reception";
// import Floor from "./pages/Floor/Floor";
// import PrivateRoute from "./utils/PrivateRoute";
// import Layout from "./components/Layout/Layout";
// import Forbidden from "./pages/Forbidden/Forbidden";

// const router = createBrowserRouter([
//  //FILL HERE
// ]);

// function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
