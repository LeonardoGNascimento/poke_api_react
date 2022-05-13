import { HashRouter, Routes, Route } from "react-router-dom";
import { BuscarPokemons } from "./Pages/BuscarPokemons";

export const AppRoute = () => {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<BuscarPokemons/>}/>
      </Routes>
    </HashRouter>
  )
}