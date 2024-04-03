
import { useState } from 'react'
import './App.css'

import Part1 from './Part1/Part1'

import Part2 from './Part2/Part2'
import ReadChart from './Part2/Book/ReadChart';


function App() {
  const [readBook, setReadbook] = useState([]);

  const handleAddToBook = part => {
    console.log(part)
  }

  
  

 

  return (
    <>

    

    <Part1></Part1>
    <Part2 handleAddToBook={handleAddToBook}></Part2>
    
    
   
   

      
    
     
    </>
  )
}

export default App
