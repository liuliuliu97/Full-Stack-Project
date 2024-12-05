// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books,  setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  },[]);

  const fetchBooks = async ()=>{
    try{
      // get response form endpoint url
      const response =  await fetch("http://127.0.0.1:8000/api/books/");
      // transform response into json data 
      const data = await response.json();
      // console.log(data); //test to see whether the data can be feteched
      setBooks(data);
    }catch(err){
      console.log(err);
    }
  }

  return(  
    <>
    <h1> Book Website</h1>

    <div>
      <input type='text' placeholder='Book Title...'/>
      <input type='number' placeholder='Release Date...'/>
      <button>Add Book</button>
    </div>
    
    {/* display  the data at web sites  */}
    {books.map((book) =>(
      <div>
        <p>Title:{book.title}</p>
        <p>Release Year:{book.release_year}</p>
      </div>
    ))}

    </>
  )

}

export default App;