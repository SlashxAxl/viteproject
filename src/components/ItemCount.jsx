import React, {useState} from "react";

export default function SimpleStateFuncion(){
    const [cuenta,setCuenta] = useState(1)
    
    return(
        <div>
            La cuenta es: {cuenta}
            <button onClick={()=>setCuenta(cuenta + 1)}>+</button>
            <button onClick={()=>setCuenta(cuenta - 1)}>-</button>
        </div>
    )
}