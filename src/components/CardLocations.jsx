export default function CardLocations({location}) {
  return (
    <div className="bg-gray-800 rounded-lg">
        <div className="p-4">
            <h1 className='text-lime-600 text-2xl font-bold'>{location.name}</h1>
            <p className='text-white text-xl'>Tipo: {location.type}</p>
            <p className='text-white text-xl'>Dimensión: {location.dimension}</p>
        </div>
    </div>
  )
}
