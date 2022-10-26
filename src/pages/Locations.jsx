import {useState, useEffect} from 'react'
import CardLocations from '../components/CardLocations'

import Layout from "../Layout"

export default function Locations() {

  const [locations, setLocations] = useState([])
  const [pagina, setPagina] = useState(1)
  const [loading, setLoading] = useState(true)

  const handlePage = (e) => {
    if(e.target.name === "siguiente"){
      setPagina(pagina + 1)
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
    if(e.target.name === "anterior"){
      if(pagina === 1) return
      setPagina(pagina - 1)
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  useEffect(()=>{
    const fetchApi = async () => {
      const url = `https://rickandmortyapi.com/api/location?page=${pagina}`
      const response = await fetch(url)
      const data = await response.json()
      setLocations(data.results)
      console.log(data.results)
      setLoading(false)
    }

    fetchApi()

  }, [pagina])

  return (
    <Layout>
      <p className='text-center text-4xl text-white font-bold my-10'>Localizaciones</p>
        {
          loading ? <h1 className='text-6xl text-white text-center font-bold'>Cargando...</h1> : (

            <>

            <div className="w-full flex lg:justify-center">
              {
                pagina === 1 ? null : (
                  <button name='anterior' onClick={handlePage} className='p-3 mx-auto text-white font-bold bg-lime-600 hover:bg-lime-700 rounded-md'>
                    Anterior
                  </button>
                )
              }

              {
                pagina === 7 ? null : (
                  <button name='siguiente' onClick={handlePage} className='p-3 mx-auto text-white font-bold bg-lime-600 hover:bg-lime-700 rounded-md'>
                    Siguiente
                  </button>
                )
              }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
                {
                  locations.map(location => (
                    <CardLocations key={location.id} location={location} />
                  ))
                }
            </div> 


            <div className="w-full flex lg:justify-center mb-10">
              {
                pagina === 1 ? null : (
                  <button name='anterior' onClick={handlePage} className='p-3 mx-auto text-white font-bold bg-lime-600 hover:bg-lime-700 rounded-md'>
                    Anterior
                  </button>
                )
              }

    {
                pagina === 7 ? null : (
                  <button name='siguiente' onClick={handlePage} className='p-3 mx-auto text-white font-bold bg-lime-600 hover:bg-lime-700 rounded-md'>
                    Siguiente
                  </button>
                )
              }
            </div>
            
            
            </>
          )
        }
    </Layout>
  )
}
