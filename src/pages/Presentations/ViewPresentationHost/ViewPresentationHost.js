import { useState } from "react"
import './ViewPresentationHost.css'
import { useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
export default function ViewPresentationHost () 
{
    const location = useLocation();
    const present = location.state;
    // const [isOpen, setIsOpen] = useState (state);
    // const didMount = useRef(false);
    // useEffect (() => {
    //     if(didMount.current)
    //         setIsOpen(state);
    //     else 
    //         didMount.current = true;
    // }, [state]);
   const slidecode ="123324";

    return(  
        <div className="slideshow__page" >
             <div className="slideshow__content">
                <div className="slideshow__header">
                    <p> Go to www.menti.com and use the code  </p>
                    
                </div>
                <div className="slideshow__wrapper">
                    <div className="slideshow__title">
                           {present.name}
                    </div>

                    <div className="slideshow__graph">
                        <svg className="chart" width="420" height="150" aria-labelledby="title desc" role="img">
                            <g className="bar-group" fill="#196cff" transform="">
                                <rect className="bar-item" x="121" y="0" height="150" width="100" fill="#196cff" stroke="#196cff" strokeWidth="3" strokeOpacity="0" opacity="1"></rect>
                            </g>   
                            <g className="bar-group" fill="#196cff" transform="">
                                <rect className="bar-item" x="121" y="0" height="150" width="100" fill="#196cff" stroke="#196cff" strokeWidth="3" strokeOpacity="0" opacity="1"></rect>                            </g>  
                            <g className="bar-group" fill="#196cff" transform="">
                                <rect className="bar-item" x="121" y="0" height="150" width="100" fill="#196cff" stroke="#196cff" strokeWidth="3" strokeOpacity="0" opacity="1"></rect>
                            </g>                            
                        </svg>
                    </div>
                </div>
               
            </div>
            
        </div> 
    )
}
