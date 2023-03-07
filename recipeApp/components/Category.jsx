import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import React from 'react'
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h3>Italian</h3>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h3>American</h3>
        </SLink>
        <SLink to={'/cuisine/Chinese'}>
            <GiNoodles />
            <h3>Chinese</h3>
        </SLink>
        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks />
            <h3>Japanese</h3>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    margin: 2rem 2rem;
    justify-content: center;
    align-items: center;

    a{
        text-decoration: none;
        color: gray;
    }
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h3{
        color: white;
        font-size: 0.8rem;
    }

    svg{
        color: white;
        font-size: 1.5rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
        h3{
            color: white;
        }
    }
`

export default Category
