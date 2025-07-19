import './footer.css';
import React, {useState} from 'react';
 function Footer(){
    return(
         <>
         <div class="footer">
            <p style={{color:'whitesmoke'}}>© All Copyright are reserved 2018-2025. </p>
            </div>
         </>
    )
 }
 
 function Cart1(){ 
    const [count,setCount]= useState(0);
   return(
       <>
      <div class="cart1">
       <button class="add" onClick={()=>setCount(count+1)}> + </button>
          {count}
        <button class="add" onClick={()=>setCount(count-1)}>- </button>
        </div>
       </>
   )
 }

 function Cart2(){ 
    const [count,setCount]= useState(0);
   return(
       <>
      <div class="cart2">
       <button class="add" onClick={()=>setCount(count+1)}> + </button>
           {count}
        <button class="add" onClick={()=>setCount(count-1)}>- </button>
        </div>
       </>
   )
 }

  function Cart3(){ 
    const [count,setCount]= useState(0);
   return(
       <>
      <div class="cart3">
       <button class="add" onClick={()=>setCount(count+1)}> + </button>
           {count}
        <button class="add" onClick={()=>setCount(count-1)}>- </button>
        </div>
       </>
   )
 }

  function Cart4(){ 
    const [count,setCount]= useState(0);
   return(
       <>
      <div class="cart4">
       <button class="add" onClick={()=>setCount(count+1)}> + </button>
          {count}
        <button class="add" onClick={()=>setCount(count-1)}>- </button>
        </div>
       </>
   )
 }

export default Footer;
export {Cart1};
export {Cart2};
export {Cart3};
export {Cart4};