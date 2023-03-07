import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

function Recipe() {

    let params = useParams()
    const [details, setDetails] = useState({})
    const [activeTab, setActiveTab] = useState('instruction')

    const fetchDetails = async () =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=3706b947c4324c08a12ebdbc19a3dcb7`)
        const detailData = await data.json()
        setDetails(detailData)
    }

    useEffect(()=>{
        fetchDetails()
    },[params.name])


  return (
    <DetailWrapper
        animate={{opacity: 1}}
        initial={{opacity: 1}}
        exit={{opacity: 1}}
        transition={{duration: 0.5}}
    >
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title}/>
        </div>
        <Info>
            <Button onClick={() => setActiveTab('instruction')}
            className={activeTab === 'instruction' ? 'active' : ''}>Instruction</Button>
            <Button onClick={() => setActiveTab('ingredients')}
             className={activeTab === 'ingredients' ? 'active' : ''}>Ingredients</Button>
        
        {activeTab === 'instruction' && (
             <div>
             <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
             <br />
             <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
         </div>
        )}
       
       {activeTab === 'ingredients' && (
            <ul>
                {details.extendedIngredients?.map((ingredients) => {
                    return (<li key={ingredients.id}><p>{ingredients.original}</p></li>)
                })}
            </ul>
        )}
        </Info>
        

    </DetailWrapper>
  )
}

const DetailWrapper = styled(motion.div)`
    margin-top: 2rem;
    margin-bottom: 5rem;
    display: flex;
    

    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2{
        margin-bottom: 2rem;
    }

    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul{
        margin-top: 2rem;
    }

    p{
        font-size: 1rem;
    }
`

const Button = styled.div`
    padding: 1rem 2rem;
    color: #313131;
    background-color: white;
    border: 2px solid black;
    font-weight: 600;
    cursor: pointer;
    text-align: center;
    margin-bottom: 1rem;
`

const Info = styled.div`
    margin-left: 10rem;
    /* display: flex;
    gap: 1rem;
    height: 100%; */


`

export default Recipe
