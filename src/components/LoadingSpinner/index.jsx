import React from 'react';
import "./index.scss";

//CSS Only loading spinner. Courtesy of https://loading.io/css/
const LoadingSpinner = () => {
    return ( 
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
     );
}
 
export default LoadingSpinner;