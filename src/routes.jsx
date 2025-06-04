import { createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom";
import Home  from "./pages/Home";
import InfoChar from "./pages/InfoChar";
import InfoStar from "./pages/InfoStar";
import InfoPlan from "./pages/InfoPlan";


export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  errorElement={<h1>Not found!</h1>} >
        <Route path="/" element={<Home />} />
        <Route path="/people/:id" element={<InfoChar />} />
        <Route path="/starships/:id" element={<InfoStar />} />
        <Route path="/planets/:id" element={<InfoPlan />} />
      </Route>
    )
);