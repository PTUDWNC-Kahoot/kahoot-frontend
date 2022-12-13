import Header from "../../components/Header";
import '../../style/styles.css'
import './Presentation.css'
import PresentationButtonBar from "./PresentationHeader/PresentationButtonBar";
import PresentationList from "./PresentationList/PresentationList";

function Presentation ( )
{
    

    return(
        <div>
         <Header page={'HomePage'}  /> 
             <div className="present__content">
              <header className="present__header">My presentation</header>
              <PresentationButtonBar/> 
              <PresentationList/>
           
            </div>
        </div>
    )
}
export default Presentation;