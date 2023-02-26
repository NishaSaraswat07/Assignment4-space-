import { useEffect, useState } from 'react'
import './App.css'
import  CharCards from './components/CharCards'
import space from './images/space.jpg'
import ReactPaginate from 'react-paginate'


function App() {
  const [spaceChars, setSpaceChars] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const limitPerPage = 6;
  const pageVisited = pageNumber * limitPerPage;
  const pageCount = Math.ceil(spaceChars.length/limitPerPage);
  const pageChange = ({selected})=>{
    setPageNumber(selected);
  }

  useEffect(()=>{
    fetch(`https://finalspaceapi.com/api/v0/character`)
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
                  spaceChars.slice(pageVisited,pageVisited+limitPerPage).map((spaceChar)=>
                      <CharCards key={spaceChar.id} {...spaceChar} />
                   )
                }
              </div>
              <div>
              <ReactPaginate previousLabel={'<'}
                nextLabel={'>'}
                pageCount={pageCount}
                onPageChange = {pageChange}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
              />
              </div>
            </div>
          
   
  )
}

export default App
