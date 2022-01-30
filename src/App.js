
import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Azure name=" Shawshank Redemption" star=" Tim Robbins, Morgan Freeman, Bob Gunton" dir=" Frank Darabont" summary=" Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." rating=" 9.3/10" img="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" />
      <Azure name=" The Dark Knight" star=" Christian Bale, Heath Ledger, Aaron Eckhart" dir=" Christopher Nolan" summary=" When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." rating=" 9.0/10" img="https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg" />
      <Azure name=" Forrest Gump" star=" Tom Hanks, Robin Wright, Gary Sinise" dir=" Robert Zemeckis" summary=" The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."  rating=" 8.7/10" img="https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" />
      <Azure name=" The Departed" star=" Leonardo DiCaprio ,Matt Damon, Jack Nicholson" dir=" Martin Scorsese"  summary=" An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston." rating=" 8.5/10" img="https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg" />
      <Azure name=" The Green Mile" star=" Tom Hanks ,Michael Clarke Duncan, David Morse" dir=" Frank Darabont" summary=" The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift." rating=" 8.5/10" img="https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg" />
    </div>
  );
}
function Azure({ name,img,rating,summary,dir,star,}) {
  return (
    <div class="main">
      <img src={img} class="cr7" alt="movie poster" />
      <h1 >Movie : {name}</h1>
      <h1 >Director : {dir}</h1>
      <h2>IMDB Rating :{rating}</h2>
      <h2>Movie Summary :{summary}</h2>
      <h2>Stars :{star}</h2>
      <h1><Count/><Rcount/></h1>

    </div>
  
  );
}
function Count(){

  const[like,setlike]=useState(0);

  return(

    <div>
      <button class="btn btn-light" onClick={()=>setlike(like+1)}>👍{like}</button>
    </div>
  )

}
function Rcount(){

  const[dislike,setdislike]=useState(0);

  return(

    <div>
      <button class="btn btn-light" onClick={()=>setdislike(dislike+1)}>👎{dislike}</button>
    </div>
  )

}
