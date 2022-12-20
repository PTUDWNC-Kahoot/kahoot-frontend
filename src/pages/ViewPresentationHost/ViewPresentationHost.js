import { useState } from "react"
import './ViewPresentationHost.css'
import { useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import { CanvasJSChart } from "canvasjs-react-charts";
import { set } from "react-hook-form";
export default function ViewPresentationHost () 
{
    const location = useLocation();
    const present = location.state;
    const options = {
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "Apple",  y: 10  },
                { label: "Orange", y: 15  },
                { label: "Banana", y: 25  },
                { label: "Mango",  y: 30  },
                { label: "Grape",  y: 28  }
            ]
        }
        ]
    }
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
                    <p> Go to www.menti.com and use the code {slidecode}  </p> 
                    
                </div>
                <div className="slideshow__wrapper">
                    <div className="slideshow__title">
                           {present.name}
                    </div>

                  <div className="slideshow__graph">
                        <CanvasJSChart options = {options}
                        // onRef = {ref => this.chart = ref}
                        />

                        {/* <svg className="chart" width="100%" height="100%" aria-labelledby="title desc" role="img">
                            <g id="chart__lineWrapper" >
                                <g className="chart__axis">
                                    <path className="chart__domain"></path>
                                    <g className="chart__tick">
                                        <text>Option 1</text>
                                    </g>
                                    <g className="chart__nodes">
                                        <g className="bar-group" fill="#196cff" transform="">
                                            <rect className="bar-item"  height="150" width="100" fill="#196cff" stroke="#196cff" strokeWidth="3" strokeOpacity="0" opacity="1"></rect>
                                            <text x="121" y="0">Option 1</text>
                                        </g> 
                                        <g class="bar">
                                            <rect width="40" height="19"></rect>
                                            <text x="45" y="9.5" dy=".35em">4 apples</text>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg> */}
                    </div>
                </div>
               
            </div>
            
        </div> 
    )
}
