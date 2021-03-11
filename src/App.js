import React, { useEffect, useState } from 'react';
import './App.scss';
import { getData } from "./api/index"; //mock API response that contains the card data
import Card from './components/Card';
import LoadingSpinner from './components/LoadingSpinner';


function App() {

  const [isLoading, setIsLoading] = useState(true); //Loading spinner state
  const [data, setData] = useState([]); //Card data state
  const [selected, setSelected] = useState(null); //Selected card state

  //Fetch the data on component mount
  useEffect(() => {
    //Async function to wait for data to load
    const getCardsData = async () => {
      try {
        const resp = await getData();
        setData(resp.data); 
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    getCardsData(); 
  }, [])

  return (
    <div className="container">
      <div className="centered">
        {isLoading ? <LoadingSpinner /> : 
          <>
            {data.map(item => {
                  return <Card 
                          key={item.id} 
                          data={item} 
                          selected={selected}
                          setSelected={setSelected} 
                        />
                })}
          </>
        }
      </div>
    </div>
  );
}

export default App;
