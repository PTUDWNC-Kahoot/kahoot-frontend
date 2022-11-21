import '../../style/Home.css'
import Header from '../../components/Header'

import OutlinedCard from '../../components/CardItem'
function Home() {
    return (
        <div >
            <Header />
            <div className='content'>
                <div className='col1'>
                    <OutlinedCard className='card'></OutlinedCard>
                    <OutlinedCard className='card'></OutlinedCard>

                </div>
                <div className='col2'>
                    <OutlinedCard></OutlinedCard>
                    <OutlinedCard></OutlinedCard>

                </div>
                <div className='col3'>
                    <OutlinedCard></OutlinedCard>
                    <OutlinedCard></OutlinedCard>

                </div>
               

            </div>
        </div>

    )

}

export default Home;