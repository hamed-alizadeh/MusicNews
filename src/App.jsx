import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import React from "react";

//pages
import Home from "./pages/home/Home";
import World from "./pages/World/World";
import African from "./pages/African/African";
import Arabic from "./pages/Arabic/Arabic";
import USA from './pages/USA/USA';
import Eroupian from "./pages/Eroupian/Eroupian";
import Hits from "./pages/Hits/Hits";
import Iran from "./pages/Iran/Iran";
import Turkish from "./pages/Turkish/Turkish";
import Asian from "./pages/Asian/Asian"
import Login from './pages/Login/Login'; 
import SignUp from './pages/Login/SignUp';

//layout
import RootLayOut from './layouts/RootLayOut';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />} />
      <Route path="World" element={<World />} />
      <Route path="Hits" element={<Hits />} />
      <Route path="Turkish" element={<Turkish />} />
      <Route path="USA" element={<USA />} />
      <Route path="Eroupian" element={<Eroupian />} />
      <Route path="African" element={<African />} />
      <Route path="Iran" element={<Iran />} />
      <Route path="Arabic" element={<Arabic />} />
      <Route path="Asian" element={<Asian />} />
      <Route path="login" element={<Login />} />
      <Route path="SignUp" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;







