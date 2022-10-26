import {Link} from 'react-router-dom'

export default function CardSingle({personaje}) {

  const { name, image, status, species, gender, origin, location} = personaje

  return (
       <div className="flex flex-col lg:flex-row justify-center items-center p-10">
            <img src={image} alt={name} className="rounded-md " />
            <div className="flex flex-col items-center mx-10 my-5">
                <p className="text-white font-bold text-3xl text-center">{name}</p>
                <p className="text-white text-center text-2xl font-semibold">Estado: <span className="text-lime-600">{status}</span></p>
                <p className="text-white text-center text-2xl font-semibold">Especie: <span className="text-lime-600">{species}</span></p>
                <p className="text-white text-center text-2xl font-semibold">Genero: <span className="text-lime-600">{gender}</span></p>
                <p className="text-white text-center text-2xl font-semibold">Origen: <span className="text-lime-600">{origin.name}</span></p>
                <p className="text-white text-center text-2xl font-semibold">Estado: <span className="text-lime-600">{status}</span></p>
                <p className="text-white text-center text-2xl font-semibold">Ultima ubicación: <span className="text-lime-600">{location.name}</span></p>
                <Link to='/personajes' className="p-3 my-4 mx-auto text-white font-bold bg-lime-600 hover:bg-lime-700 rounded-md"> Volver </Link>
            </div>
       </div>
  )
}
