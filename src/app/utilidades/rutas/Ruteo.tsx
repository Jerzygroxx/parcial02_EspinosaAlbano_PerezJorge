import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { Marcas } from "../../menu/Marcas";
import { Tipo_de_vehiculos } from "../../menu/Tipos_de_Vehiculos";
import { Informacion } from "../../menu/informacion";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/inic" element={<Inicio />} />

      <Route path="/marc" element={<Marcas />} />
      
      <Route path="/tipoVh" element={<Tipo_de_vehiculos />} />
      
      <Route path="/info" element={<Informacion />} />
    </Routes>
  );
};
