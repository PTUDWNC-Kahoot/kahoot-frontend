import './PresentOption.css'

function PresentOption({ icon, title, content }) {



    return (
        <div className='presentOption'>
            <div className='presentOptionIcon'>
                {icon}
            </div>
            <div className='presentOptionContent'>
                <div className='presentOptionTitle'>
                    {title}
                </div>
                <div className='presentOptionText'>
                    {content}
                </div>
            </div>
        </div>

    )

}

export default PresentOption;