import { useState } from "react"
import './ViewPresentationHost.css'
import { useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from "@fortawesome/free-solid-svg-icons";
import {useLocation} from 'react-router-dom';
import { CanvasJSChart } from "canvasjs-react-charts";
import { useNavigate } from "react-router-dom";
import {Bar, Cell, BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { color } from "@mui/system";
import { colors } from "@mui/material";

export default function ViewPresentationHost () 
{
    const location = useLocation();
    const present = location.state;
    const navigate = useNavigate()   
  
    function handleExitSlideShow () {
        navigate('/slides', {state:present});
    }
  
   const slidecode ="123324";
   const data = [
    {
      "name": "Page A",
      "count": 4000,
    },
    {
      "name": "Page B",
      "count": 3000,
    },
    {
      "name": "Page C",
      "count": 2000,
    }
  ]
    return(  
        <div className="slideshow__page" >
             <div className="slideshow__content">
                <button className="exitbutton" onClick={handleExitSlideShow}>
                    <FontAwesomeIcon className='icon__exit' icon={faX} size="lg"  /> 
                </button>
                <div className="slideshow__header">
                    <p className="slideshow__text"> Go to www.menti.com and use the code {slidecode}  </p> 
                </div>
                <div className="slideshow__wrapper">
                    <div className="slideshow__title">
                           My kahhoot
                    </div>

                  <div className="slideshow__graph">
                  <BarChart width={730} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <Bar dataKey="count" fill="#8884d8" >
                      {data.map((entry,index) => (
                        <Cell key={`cell-${index}`} fill={colors[index%20]}></Cell>
                      ))}
                     </Bar>
                </BarChart>
                    </div>
                </div>
               
            </div>
            
        </div> 
    )
}
