import '../../style/Home.css'
import Header from '../../components/Header'

import ProfileCard from '../../components/ProfileCard'
import AssignmentCard from '../../components/AssignmentCard'
import KahootCard from '../../components/KahootCard'
import GroupsCard from './GroupsCard'

import {useState, useEffect} from 'react'
import ListGroups from '../../service/ListGroups'

 function Home() {
    const[listGroups, setListGroups] = useState([]);
    useEffect(() => {
        ListGroups(setListGroups)

    }, []);
    return (
        <div >
            <Header />
            <div className='content'>
                <div className='col1'>
                    <ProfileCard/>
                    <AssignmentCard/>

                </div>
                <div className='col2'>
                    <GroupsCard listGroup={listGroups}></GroupsCard>

                </div>
                <div className='col3'>
                    <KahootCard></KahootCard>

                </div>
               

            </div>
        </div>

    )

}

export default Home;