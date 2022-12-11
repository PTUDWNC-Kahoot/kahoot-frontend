import Header from "../../components/Header";
import '../../style/styles.css'
import './Presentation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch} from '@fortawesome/free-solid-svg-icons'
function Presentation ( )
{

    return(
        <div>
           <Header page={'HomePage'}  />
            <div className="present__content">
            <header className="present__header">My presentation</header>
            <div className="present__buttonBar">
                <button className="present__btn btn__newPresent" > New Presentation</button>
                   <div className="present__btn search__wrapper ">
                         <input className="search__input " placeholder="Type to search" />
                         <div className="modal__icon"> <FontAwesomeIcon icon={faSearch} size="lg"  /> </div>

                   </div>


                <input className="present__btn btn__new" ></input>
            </div>

            </div>
        </div>
    )
}
export default Presentation;