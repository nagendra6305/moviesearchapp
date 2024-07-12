import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const[item,Setitem]=useState(null)
    // console.log(item,"data")

    let {id}= useParams()
    useEffect(()=>{
axios.get(`https://omdbapi.com/?i=${id}&apikey=604d2df`).then((res)=>{
    console.log(res,"res")
    Setitem(res.data)
    console.log(res,"res")
} )

    },[])
    if(item){
  return (
 
        <div className="row">

   
        <div className="col-md-4" key={item.imdbID}>
             <div className="card" style={{ width: "18rem" }} >
               <img src={item.Poster} className="card-img-top" alt={item.Title} />
               <div className="card-body">
                 <h4 className="card-title">Title: {item.Title}</h4>
                 <h4 className="card-title">Director:{item.Director}</h4>
                 <h4 className="card-title">Genre:{item.Genre}</h4>
                 <h4 className="card-title">year:{item.year}</h4>
                 <h4 className="card-title">plot:{item.plot }</h4>
                 <h4 className="card-title">Actors:{item.Actors }</h4>
                 

                 
            
               </div>
             </div>
           </div> 
          
   </div>
    
    
  )
}else{
    return(<>
    <h1>Loading...............</h1>
    </>)
}
}

export default MovieDetails