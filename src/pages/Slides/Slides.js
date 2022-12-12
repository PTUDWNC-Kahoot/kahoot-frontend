import './Slides.css'
import SlideHeader from './SlideHeader/SlideHeader';
import SlideSettingBar from './SlideSettingBar/SlideSettingBar';
import SlideListBar from './SlideListBar/SlideListBar';
import SlideContent from './SlideContent/SlideContent';

function Slides() {



    return (
        <div >
            <SlideHeader />
            <SlideSettingBar />
            <div className='slideContent'>
                <div className='slideListFrame'>
                    <SlideListBar />
                </div>
                <div className='slideContentFrame'>
                    <SlideContent/>
                </div>
                <div className='slideEditFrame'>
                    aaaaaa
                </div>
            </div>
        </div>

    )

}

export default Slides;