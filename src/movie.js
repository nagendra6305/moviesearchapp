import React, {  useState } from 'react'
import axios from 'axios';



import { useNavigate } from 'react-router-dom';
const OMDB_API_KEY = '604d2df';
// const YOUTUBE_API_KEY = 'AIzaSyAlXPPVCUM5LSR8JjaD9YjSW6MyneisPt4AIzaSyAlXPPVCUM5LSR8JjaD9YjSW6MyneisPt4'; 

const Movie = () => {

 const navigate=useNavigate()
  const[search,setsearch]=useState('')
 const [data,setdata]= useState([])
 console.log(data,"data")

const searchMovies = async ()=>{
  try {
    const response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${OMDB_API_KEY}`);
    if (response.data.Response === 'True') {
        setdata(response.data.Search);
    } else {
      setdata([]);
    }
} catch (error) {
    console.error('Error fetching data:', error);
   setdata([]);
}
};
const handleInputChange = (event) => {
  setsearch(event.target.value);
  debounceSearch(event.target.value);
};
const debounceSearch = debounce(searchMovies, 300);
    
  return (
    <div>
      <center>
        <h1>Movie App</h1>
   
        <input type='text'size={60} value={search} onChange={handleInputChange}/><br/><br/>
       

    <div className="row">
          {data.length>0?data.map(item => (
            <div className="col-md-4" key={item.imdbID}>
              <div className="card" style={{ width: "18rem" }} onClick={()=>{navigate(`/movieDetails/${item.imdbID}`)}}>
                <img src={item.Poster} className="card-img-top" alt={item.Title} />
                <div className="card-body">
                  <h4 className="card-title">{item.Title}</h4>
               
                </div>
              </div>
            </div>
          )):<div>No result found</div>}
        </div>
    </center>
    </div>
  )
}

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
          func.apply(this, args);
      }, delay);
  };
}

// const fetchTrailer = async (title, setTrailer) => {
//   try {
//       const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title} trailer&type=video&key=${YOUTUBE_API_KEY}`);
//       if (response.data.items.length) {
//           setTrailer(response.data.items[0].id.videoId);
//       } else {
//           setTrailer(null);
//       }
//   } catch (error) {
//       console.error('Error fetching trailer:', error);
//       setTrailer(null);
//   }
// };


export default Movie