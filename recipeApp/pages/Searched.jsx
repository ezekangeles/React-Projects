import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    const getSearched = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3706b947c4324c08a12ebdbc19a3dcb7&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }   

    useEffect(()=>{
        getSearched(params.search)
    },[params.search])

  return (
    <Grid
        animate={{opacity: 1}}
        initial={{opacity: 1}}
        exit={{opacity: 1}}
        transition={{duration: 0.5}}
    >
       
        {searchedRecipes.map((item)=>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt={item.title}/>
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-column: auto;
    grid-template-columns: repeat(auto-fit, minmax(15rem,1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Searched
