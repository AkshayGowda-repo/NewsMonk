import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';



export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
 

    return (
      <div >
         <Router>
       <NavBar/>
       <LoadingBar
        color='#f11946'
        progress={progress}
      />
         <Routes>
           
          <Route exact path="/" element={<News setProgress ={setProgress} apiKey={apiKey} key='general' pageSize ={10} category = 'general' />}/>
          <Route exact path="/business" element={<News setProgress ={setProgress} apiKey={apiKey} key='business' pageSize ={10} category = 'business' />}/>
          <Route exact path="/entertainment" element={<News setProgress ={setProgress} apiKey={apiKey} key='entertainment'  pageSize ={10} category = 'entertainment' />}/>
          <Route exact path="/health" element={<News setProgress ={setProgress} apiKey={apiKey} key='health' pageSize ={10} category = 'health' />}/>
          <Route exact path="/science" element={<News setProgress ={setProgress} apiKey={apiKey} key='science' pageSize ={10} category = 'science' />}/>
          <Route exact path="/sports" element={<News setProgress ={setProgress} apiKey={apiKey} key='sports' pageSize ={10} category = 'sports' />}/>
          <Route exact path="/technology" element={<News setProgress ={setProgress} apiKey={apiKey} key='technology' pageSize ={10} category = 'technology' />}/>
          
        </Routes>
         </Router>
      </div>
    )

}
