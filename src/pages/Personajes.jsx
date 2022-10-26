import {useState, useEffect} from 'react'

import Layout from "../Layout"
import Card from '../components/Card'

export default function Personajes() {

  const [personajes, setPersonajes] = useState([])

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
      const url = `https://rickandmortyapi.com/api/character?page=${pagina}`
      const response = await fetch(url)
      const data = await response.json()
      setPersonajes(data.results)
      setLoading(false)
    }

    fetchApi()

  }, [pagina])


  return (
    <Layout>
        <p className='text-center text-4xl text-white font-bold my-10'>Personajes</p>
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

              <button name='siguiente' onClick={handlePage} className='p-3 mx-auto text-white font-bold bg-lime-600 hover:bg-lime-700 rounded-md'>
                Siguiente
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
                {
                  personajes.map(personaje => (
                    <Card key={personaje.id} personaje={personaje} />
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

              <button name='siguiente' onClick={handlePage} className='p-3 mx-auto text-white font-bold bg-lime-600 hover:bg-lime-700 rounded-md'>
                Siguiente
              </button>
            </div>
            
            
            </>
          )
        }
    </Layout>
  )
}
