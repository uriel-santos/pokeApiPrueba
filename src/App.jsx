import { useState, useEffect} from 'react'
import Card from './components/Cards'



function App() {

  const [pokemones, setPokemones]= useState(null);


  useEffect(() => {
    
 const obtenerPokemones=async () =>{

    try {

    
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
      const datos= await response.json();

      const detalles = datos.results.map(async (pokemon) =>{
        const response =await fetch(pokemon.url)
        return response.json()
      })
 const pokemondetalles= await Promise.all(detalles)
      setPokemones(pokemondetalles);
    } catch (error) {
      console.log(error);
    }

  }
  obtenerPokemones();
  }, [])


  
  return (
    <>
      
      <div className='d-flex justify-content-center align-items-center bg-danger mb-4'>
      <header className='py-5'></header>
        <h1 className='text-white display-1'>Poke Api</h1>
      </div>
      <div className='container'>
        
       {pokemones ? (<Card className='p-2'  pokemones={pokemones}></Card>) : <p>Cargando</p>} 
       
      </div>
      
      
    </>
  )
}

export default App
