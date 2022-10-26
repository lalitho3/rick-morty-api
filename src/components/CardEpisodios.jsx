export default function CardEpisodios({episodio}) {
    return (
      <div className="bg-gray-800 rounded-lg">
          <div className="p-4">
              <h1 className='text-lime-600 text-2xl font-bold'>{episodio.name}</h1>
              <p className='text-white text-xl'>Fecha de emisión: <strong>{episodio.air_date}</strong></p>
              <p className='text-white text-xl'>Episodio: <strong>{episodio.episode}</strong></p>
          </div>
      </div>
    )
  }
  