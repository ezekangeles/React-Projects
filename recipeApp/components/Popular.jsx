import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'


function Popular() {

    const [popular, setPopular] = useState([])

    useEffect(() =>{
        getPopular()
    },[])

    const getPopular = async () =>{

        const check = localStorage.getItem('popular')

        if(check){
            setPopular(JSON.parse(check))
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=3706b947c4324c08a12ebdbc19a3dcb7&number=25`)
            const data = await api.json()
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes)
            console.log(data.recipes)
        } 
    }

  return (
    <Wrapper>
        <h1>Popular Picks</h1>
            <Splide options={{
                perPage: 5,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '1rem'}}>

                {popular.map((recipe) =>{
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
export default Popular

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
}
`



