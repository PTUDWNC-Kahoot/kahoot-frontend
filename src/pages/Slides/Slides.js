import './Slides.css'
import SlideHeader from './SlideHeader/SlideHeader';
import SlideSettingBar from './SlideSettingBar/SlideSettingBar';
import SlideListBar from './SlideListBar/SlideListBar';
import SlideContent from './SlideContent/SlideContent';
import SlideEdit from './SlideEdit/SlideEdit';

function Slides() {
    return (
        <div className='main'>
            <SlideHeader />
            <SlideSettingBar />
         
            <div className='slideContent'>
                    <SlideListBar />
                    <SlideContent />
                    <SlideEdit></SlideEdit>
            </div>
        </div>

    )

}

export default Slides;