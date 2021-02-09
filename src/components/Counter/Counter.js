import React, { useState } from 'react';

function Counter() {

    const [ count, setCount ] = useState(111); 


    function add(e){
        setCount(count + 1);
    }


    return (
        <div className = "container" style = {{border: "2px solid red", padding:"6px"}}>
            <h1> Counter: {count} </h1>
            <button type="button" class="btn btn-lg btn-primary"
                     onClick = {add}
            > 
            
            Adicionar 
            
            </button>
        </div>
    );
}


export default Counter; 