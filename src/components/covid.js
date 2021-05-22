import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {
    const [data,setData] = useState([])
    const getCovidData = async() => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
        }catch (err){
            console.log(err);
        }
    }

    useEffect(()=>{
         getCovidData();
    },[]);

  return (
    
      <center><h1>LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>

    <div class="parent">
      <ul>
          <li className="card">
            <div className="card__main" id="card_main1">
                <div className="card__inner">
                    <p className="card__name"><span> OUR </span> COUNTRY </p>
                    <p className="card__total card__small">INDIA</p>
                </div>
            </div>          
          </li>
          <li className="card">
            <div className="card__main" id="card_main2">
                <div className="card__inner">
                    <p className="card__name"><span> TOTAL </span> RECOVERED </p>
                    <p className="card__total card__small">{data.recovered}</p>
                </div>
            </div>          
          </li>
          <li className="card">
            <div className="card__main" id="card_main3">
                <div className="card__inner">
                    <p className="card__name"><span> TOTAL </span> CONFIRMED </p>
                    <p className="card__total card__small">{data.confirmed}</p>
                </div>
            </div>          
          </li>
          </ul>        
          </div>
         

          <div class="parent2">  
          <ul>
          <li className="card">
            <div className="card__main" id="card_main4">
                <div className="card__inner">
                    <p className="card__name"><span> TOTAL </span> DEATHS </p>
                    <p className="card__total card__small">{data.deaths}</p>
                </div>
            </div>          
          </li>
          <li className="card">
            <div className="card__main" id="card_main5">
                <div className="card__inner">
                    <p className="card__name"><span> TOTAL </span> ACTIVE </p>
                    <p className="card__total card__small">{data.active}</p>
                </div>
            </div>          
          </li>
          <li className="card">
            <div className="card__main" id="card_main6">
                <div className="card__inner">
                    <p className="card__name"><span> LAST </span> UPDATED </p>
                    <p className="card__total card__small">{data.lastupdatedtime}</p>
                </div>
            </div>          
          </li>
      </ul>
      </div>
      </center>
    
   
  )
}

export default Covid