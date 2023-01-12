import './SlideContent.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: '',
        },
    },
};


function SlideContent({ slides, currentSlide, editState }) {
    useEffect(() => {
        if (editState === true) {
            var list = []
            currentSlide.options.map((option) => {
                list.push(option.content)
            })
            setLabels(list)
        }
    }, [editState]);

    useEffect(() => {
        var list = []
        currentSlide.options.map((option) => {
            list.push(option.content)
        })
        setLabels(list)
    }, [currentSlide]);

    const [labels, setLabels] = useState([]);
    const data = {
        labels,
        datasets: [
            {
                label: 'Num of anwers',
                data: [10, 5,30,22],
                backgroundColor: 'rgba(102, 175, 255, 0.5)',
            },

        ],
    };
    //  const [slideContent, setSlideContent] = useState(currentSlide);
    return (
        <div className='slideMainContent'>
            <div className='slideMainContentFrame'>
                <div className='slideTitle'>
                    Goto <b>PTUDW-Kahoot.com</b>  and use the code <b>035 888 7503</b>
                </div>
                <div className='questionFrame'>
                    <div className='questionText'>
                        {currentSlide.question? currentSlide.question : <>Question</>}?
                    </div>
                </div>
                <div className='chartFrame'>
                    <Bar options={options} data={data} />
                </div>

            </div>
        </div>

    )

}

export default SlideContent;