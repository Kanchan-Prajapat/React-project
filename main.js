import './main.css';
import image2 from './main_heading.png';
import image3 from './gown.png';
import image4 from './watch.png';
import image5 from './footwear.png';
import image6 from './formal.png';
// import { useState } from 'react';
function Main() {
   return (
      <>
         <div>
            <img class="main" src={image2} alt='main' />
         </div>
         <div style={{ display: 'flex' }}>
            <div > <img class="i1" src={image3} alt='main' /> <button class="button1">Add to Cart</button> </div>
            <div> <img class="i2" src={image4} alt='main' /> <button class="button1">Add to Cart</button></div>
            <div> <img class="i3" src={image5} alt='main' /> <button class="button1">Add to Cart</button></div>
            <div> <img class="i4" src={image6} alt='main' /> <button class="button1">Add to Cart</button></div>
         </div>
      </>
   )
}





export default Main;

