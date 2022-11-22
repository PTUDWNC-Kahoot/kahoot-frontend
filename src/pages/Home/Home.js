import '../../style/Home.css'
import Header from '../../components/Header'

import ProfileCard from '../../components/ProfileCard'
import OutlinedCard from '../../components/OutlinedCard'

function Home() {
    return (
        <div >
            <Header />
            <div className='content'>
                <div className='col1'>
                    <ProfileCard className='card'></ProfileCard>
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