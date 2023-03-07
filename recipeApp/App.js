import React from 'react'
import Pages from './pages/Pages'
import './app.css'
import Category from './components/Category'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>Delicious</Logo>
      </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: black;
`

const Nav = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`

export default App
