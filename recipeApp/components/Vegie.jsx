import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'


function Vegie() {

  const [vegie, setVegie] = useState([])

  useEffect(() =>{
    getVegie()
  },[])

  const getVegie = async () =>{

      const check = localStorage.getItem('vegie')

      if(check){
          setVegie(JSON.parse(check))
      }else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=3706b947c4324c08a12ebdbc19a3dcb7&number=25&tags=vegetarian`)
          const data = await api.json()
          localStorage.setItem('vegie', JSON.stringify(data.recipes))
          setVegie(data.recipes)
          console.log(data.recipes)
      } 
  }

  return (
    <Wrapper>
    <h1>Vegetarian Picks</h1>
        <Splide options={{
            perPage: 6,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '1rem'}}>

            {vegie.map((recipe) =>{
                return (
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={'/recipe/'+recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </Link>
                        </Card>  
                    </SplideSlide>
                )
            })}
    </Splide>
  </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 1rem 0rem;

h1{
    margin: 1rem 0;
}
`;

const Card = styled.div`
    width: 100%;
    position: relative;
img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    position: relative;    
}
p{
   background-color: rgba(255,255,255,.8);
   color: #726e6e;
   width: 100%;
   position: absolute;
   z-index: 10;
   left: 0%;
   bottom: 0%;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: .9rem;
}
`

export default Vegie
