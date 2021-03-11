import React from 'react';
import "./index.scss";

const Error = () => {
    return ( 
        <div className="error">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Something went wrong. Please try again later.</p>
        </div>
     );
}
 
export default Error;