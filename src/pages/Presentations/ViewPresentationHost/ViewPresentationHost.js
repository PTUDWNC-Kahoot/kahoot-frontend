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
                            
                    </div>
                </div>
               
            </div>
            
        </div> 
    )
}
