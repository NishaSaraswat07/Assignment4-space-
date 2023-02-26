import { useEffect, useState } from 'react'
import './App.css'
import  CharCards from './components/CharCards'
import space from './images/space.jpg'


function App() {
  const [spaceChars, setSpaceChars] = useState([])
 

  useEffect(()=>{
    fetch(`https://finalspaceapi.com/api/v0/character?limit=6`)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      console.log(data)
      setSpaceChars(data)
    })
  },[])

  return (
            <div className='mainSection'>
               <div className='mainHeading'>
              <h1>Final Space</h1>
               <img src={space} alt="space pic"/>
              </div>
              <div className='cardImage'>
                {
                  spaceChars.map((spaceChar)=>
                      <CharCards key={spaceChar.id} {...spaceChar} />
                   )
                }
              </div>
            </div>
          
   
  )
}

export default App
