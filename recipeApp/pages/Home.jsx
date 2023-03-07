import React from 'react'
import Category from '../components/Category'
import Popular from '../components/Popular'
import Vegie from '../components/Vegie'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div 
      animate={{opacity: 1}}
      initial={{opacity: 1}}
      exit={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <Popular />
      <Vegie />
    </motion.div>
  )
}

export default Home
