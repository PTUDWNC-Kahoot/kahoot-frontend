import { useState } from "react"
import './ViewPresentationHost.css'
import { useEffect, useRef} from 'react';
export default function ViewPresentationHost () 
{
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
        <div className="slideshow__page">
            <div className="slideshow__content">
                <div className="slideshow__header">
                    <p> Go to www.menti.com and use the code  {slidecode} </p>
                    
                </div>
                <div className="slideshow__wrapper">
                    <div className="slideshow__title">
                        <p>Multiple Choice</p>
                    </div>

                    <div className="slideshow__graph">
                        <svg class="chart" width="420" height="150" aria-labelledby="title desc" role="img">
                            <g class="bar-group" fill="#196cff" transform="">
                                <rect class="bar-item" x="121" y="0" height="150" width="100" fill="#196cff" stroke="#196cff" stroke-width="3" stroke-opacity="0" opacity="1"></rect>
                            </g>   
                            <g class="bar-group" fill="#196cff" transform="">
                                <rect class="bar-item" x="121" y="0" height="150" width="100" fill="#196cff" stroke="#196cff" stroke-width="3" stroke-opacity="0" opacity="1"></rect>                            </g>  
                            <g class="bar-group" fill="#196cff" transform="">
                                <rect class="bar-item" x="121" y="0" height="150" width="100" fill="#196cff" stroke="#196cff" stroke-width="3" stroke-opacity="0" opacity="1"></rect>
                            </g>                            
                        </svg>
                    </div>
                </div>
               
            </div>
            
        </div> 
    )
}
