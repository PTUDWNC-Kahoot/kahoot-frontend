import './SlideListBar.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Img from '../../../assets/img/images.png'

function SlideListBar() {



    return (
        <div className='slideListBarContent'>
            <div className='slideOverview'>
                <div className='slideOverviewOption'>
                    <div className='slideOverviewOptionTop'>
                        <div className='sildeIndex'>
                            1
                        </div>
                        <PlayArrowIcon />
                    </div>
                    <div className='slideOverviewOptionBottom'>
                        <MoreVertIcon />
                    </div>
                </div>
                <div className='slideOverviewScreen'>
                    <img src={Img}></img>
                </div>

            </div>
        </div>

    )

}

export default SlideListBar;