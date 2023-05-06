import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';

import Article from './components/Article'
import Articles from './components/Articles'
import Home from './components/Home'


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:id" element={<Article />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

// function App() {
//   const [hello, setHello] = useState('')
//
//   useEffect(() => {
//     axios.get('/api/hello')
//         .then(response => setHello(response.data))
//         .catch(error => console.log(error))
//   }, []);
//
//   return (
//       <div>
//         백엔드에서 가져온 데이터입니다 : {hello}
//       </div>
//   );
// }
export default App;
