import './Slides.css'
import SlideHeader from './SlideHeader/SlideHeader';
import SlideSettingBar from './SlideSettingBar/SlideSettingBar';
import SlideListBar from './SlideListBar/SlideListBar';
import SlideContent from './SlideContent/SlideContent';
import SlideEdit from './SlideEdit/SlideEdit';
import { useState } from 'react';
import Slide from '../../models/Slide';
import Option from '../../models/Option';
import { useEffect } from 'react';

const Options = [new Option(0, 'c1', true), new Option(1, 'c2', true)]
const Options2 = [new Option(0, '456', true), new Option(1, 'thanks', true)]

function Slides() {
    const [slides, setSlides] = useState([new Slide(0, 'aa', 'who are you', Options), new Slide(1, 'aa', 'nice to meet you', Options2)]);
    const [currentSlide, setCurrentSlide] = useState(slides[0]);
    const [editState, setEditState] = useState(false);

    useEffect(() => {
        if (editState === true) {
            var slideList = slides.slice();
            slideList[currentSlide.id] = currentSlide;
            setSlides(slideList);
            setEditState(false);
        }
    }, [editState]);
    return (
        <div className='main'>
            <SlideHeader slides={slides} currentSlide={currentSlide} />
            <SlideSettingBar slides={slides} setSlides={setSlides} currentSlide={setCurrentSlide} />

            <div className='slideContent'>
                <SlideListBar slides={slides} setSlides={setSlides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
                <SlideContent slides={slides} currentSlide={currentSlide} editState={editState} />
                <SlideEdit slides={slides} setSlides={setSlides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} setEditState={setEditState} />
            </div>
        </div>

    )

}

export default Slides;