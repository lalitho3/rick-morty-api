import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Layout from '../Layout';
import CardSingle from '../components/CardSingle';

export default function Personaje() {

  const {id} = useParams();

  const [personaje, setPersonaje] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchApi = async () => {
      const url = `https://rickandmortyapi.com/api/character/${id}`
      const response = await fetch(url);
      const data = await response.json();
      setPersonaje(data);
      setLoading(false);
    }

    fetchApi();
  }, [])

  return (
    <Layout>
        {
            loading ? <p className='text-center text-4xl text-white font-bold my-10'>Cargando...</p> : (
                <CardSingle personaje={personaje} />
            )
        }
    </Layout>
  )
}
