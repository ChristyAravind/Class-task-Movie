// import "./App.css";

// export default function App() {
// const names=["Cristiano Ronaldo","Gareth Bale","karim Benzema"]

//   return (
//     <div className="App">

//   {names.map((nm)=> <Azure name={nm}/>)}
//     </div>
//   );
// }
// function Azure({ name}) {
//   return (
//     <div>
//        <h1>Welcome {name}</h1>
//     </div>
//   );
// }
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Azure name="Cristiano Ronaldo" img="../img/cr7.jpg" />
      <Azure name="Gareth Bale" img="../img/bale.jpg" />
      <Azure name="karim Benzema" img="../img/benzema.jpg" />
    </div>
  );
}
function Azure({ name, img }) {
  return (
    <div>
      <img src={img} id="cr7" alt="football" />

      <h1>Welcome {name}</h1>
    </div>
  );
}
