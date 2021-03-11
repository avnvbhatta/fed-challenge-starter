import React from 'react';
import "./index.scss";

//Our props here are the data for the individual card, the selected card and the setSelected method (to highlight a selected card)
const Card = ({data, selected, setSelected}) => {
    return ( 
        <div className="card" onClick={() => setSelected(data.id)} 
            style={{boxShadow: `${selected === data.id ? '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)': ''}`}} //Conditionally set the box-shadow if card is selected
        >
            <div className="thumb">
                <img src={data.thumb} alt="iFit Trainer Thumb"/>
                {/* Conditionally render the X Workouts overlay if the card has a collection of workouts */}
                {
                    data.collections && 
                    <div className="collection">
                        <span>{data.collections}</span>
                        <span>Workouts</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </div>
                }
            </div>
            
            <div className="body">
                <div className="details">
                    <div className="title">
                        {data.title}
                    </div>
                    <div className="metrics">
                        {/* Conditionally render the duration and distance (if available) for the workouts */}
                        {
                            data.duration && 
                            <div className="duration">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p>{data.duration}</p> 
                            </div>
                        }
                        {
                            data.distance && 
                            <div className="distance">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                <p>{data.distance} M</p> 
                            </div>
                        }
                    </div>
                    {/* Conditionally render the 'View Details' button if a card is selected */}
                    {
                       selected === data.id && <div className="viewDetails">
                            view details
                         </div>
                    }
                </div>
                <div className="trainer">
                    <img src={data.trainer_img} alt="iFit Trainer"/>
                </div>
            </div>
        </div>
    );
}
 
export default Card;