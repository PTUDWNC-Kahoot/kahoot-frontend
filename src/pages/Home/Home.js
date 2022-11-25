import '../../style/Home.css'
import Header from '../../components/Header'

import ProfileCard from '../../components/ProfileCard'
import AssignmentCard from '../../components/AssignmentCard'
import KahootCard from '../../components/KahootCard'
import ClassCard from './ClassCard'

function Home() {
    return (
        <div >
            <Header />
            <div className='content'>
                <div className='col1'>
                    <ProfileCard/>
                    <AssignmentCard/>

                </div>
                <div className='col2'>
                    <ClassCard></ClassCard>

                </div>
                <div className='col3'>
                    <KahootCard></KahootCard>

                </div>
               

            </div>
        </div>

    )

}

export default Home;