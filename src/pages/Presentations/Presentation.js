import Header from "../../components/Header";
import '../../style/styles.css'
import './Presentation.css'
import PresentationList from "./PresentationList/PresentationList";

function Presentation ( )
{
    return(
        <div>
         <Header page={'Presentation'}  /> 
             <div className="present__content">
              <header className="present__header">My presentation</header>
              <PresentationList/>
            </div>
        </div>
    )
}
export default Presentation;