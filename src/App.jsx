import { Link } from 'react-router-dom';

import Layout from "./Layout"
import Portal from "/images/rym-portal.png"

export default function App() {
  return (
    <Layout>
        <div className="max-w-7xl my-10 flex flex-col lg:flex-row items-center align-middle justify-center">
          <div className="max-w-4xl p-10">
            <h1 className="text-4xl text-white font-bold text-center">Diviertete conociendo a los personajes y ubicaciones de <span className="text-lime-500">Rick & Morty</span></h1>
            <p className="text-white text-center text-sm my-10">Rick & Morty es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon para el canal de cable Adult Swim. La serie se centra en las aventuras de Rick Sanchez, un científico loco y alcohólico, y su nieto Morty Smith, un adolescente de 14 años que es un compañero de escuela bastante inteligente pero que no es muy popular. Ambos viajan a través de múltiples dimensiones y universos, y tienen aventuras con sus familiares y amigos.</p>
            <div className="flex items-center justify-center">
              <Link to="/personajes" className="p-3 mx-3 bg-lime-600 rounded-md text-white font-bold hover:bg-lime-700">Ver Personajes</Link>
              <a href="https://rickandmortyapi.com/" target="blank" className="p-3 mx-3 border border-lime-500 rounded-md text-white font-bold">Visita la API</a>
            </div>
          </div>
          <img src={Portal} alt="Portal" className="hidden lg:flex lg:w-1/2" />
        </div>
    </Layout>
  )
}
