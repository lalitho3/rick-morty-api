import {Link} from 'react-router-dom'

export default function Card({personaje}) {

  const { id, name, image, status, species} = personaje  

  return (
    <div className="bg-gray-800 rounded-md p-5">
        <img src={image} alt={name} className="rounded-md mx-auto" />
        <div className="flex flex-col items-center">
            <p className="text-white font-bold text-center">{name}</p>
            <p className="text-white text-center">{status} - {species}</p>
            <Link to={`/personajes/${id}`} className="p-3 my-4 mx-auto text-white font-bold bg-lime-600 hover:bg-lime-700 rounded-md"> Ver mas </Link>
        </div>
    </div>
  )
}
