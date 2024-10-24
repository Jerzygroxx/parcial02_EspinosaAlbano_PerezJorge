import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { Marcas } from "../../menu/Marcas";
import { Tipo_de_vehiculos } from "../../menu/Tipos_de_Vehiculos";
import { Informacion } from "../../menu/informacion";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/Inicio" element={<Inicio/>} />
      <Route path="/Marcas" element={<Marcas/>}/>
      <Route path="/TipoVh" element={<Tipo_de_vehiculos/>}/>
      <Route path="/Informacion" element={<Informacion/>}/>
    </Routes>
  );
};
