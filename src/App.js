
import './App.css';
import Movie from './movie';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MovieDetails from './movieDetails';


function App() {
  return (<>
    <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Movie/>}/>
          <Route path="/movieDetails/:id" element={<MovieDetails/>}/>
        </Routes>
     
   
    </BrowserRouter>
    </>
  );
}

export default App;
