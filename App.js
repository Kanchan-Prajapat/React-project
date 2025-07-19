// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import React, {useState} from 'react';


// import Welcome from './Welcome';
// import UserCard from './UserCard';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App(){
//   return(<div>
//            <Welcome name ="Alice"/>
//            <Welcome name="Manan"/>
//            <UserCard name="charlie" age={23}/>
//            < UserCard name ="Kanchan" age={21}/>
//            </div>);
// }

// export default App;

// function App(){
//   const Fruits=['Apple','Banana','Orange','Mango'];

//   return(
//     <div> 
//       <h1>Fruit list:</h1>
//       <ul> 
//          {Fruits.map((fruit,index)=>(
//              <li key={index}>{fruit}</li>
//              ))}
//          </ul> 
//     </div>
//   );
// }

// export default App;

// function App(){
//   const movies=[ {title:'Harry potter',year:2001},
//                 {title: 'Interstellar',year:2014},
//                 {title:'the dark Knight',year:2008},];

//                 return(<div>
//                         <h1>Moive list:</h1>
//                         <ul>
//                           {movies.map((movie,index)=>(
//                             <li key={index}>{movie.title} -{movie.year} </li>
//                           ))}
//                           </ul>
//                         </div>);
// }

// export default App;


// export default App;

//  function Cart(){
//   const [count, setCount]= useState(0);

//   return(
//     <div style={{padding:'20px'}}><h1>UseState</h1>
//          <p>Count:{count}</p>
//          <button onClick={()=>setCount(count+1)}>+</button>
//                   <button onClick={()=>setCount(count-1)}>-</button>
//          </div>
//   )
// }
import './App.css';
import Header from "./header";
import Main from "./main";
import Footer, { Cart1 } from "./footer";
import { Cart2 } from './footer';
import { Cart3 } from './footer';
import { Cart4 } from './footer';
function App() {
   return (
      <>
         <Header />
         <Main />
         <Cart1 />
         <Cart2 />
         <Cart3 />
         <Cart4 />
         <Footer />
      </>
   )
}


//   let count=0;
//   function increment(){
//      count++;
//       console.log(count);
//   }
//   function decrement(){
//     count--;
//      console.log(count);
//   }
//   function Cart(){
// return (
// <>
// <h1>Count:{count}</h1>
// <button class="button2" onClick={increment}>+</button>
// <button class="button2" onClick={decrement}>-</button>
// </>);
// }

export default App;
