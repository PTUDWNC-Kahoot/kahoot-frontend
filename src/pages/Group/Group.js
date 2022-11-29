import '../../style/Group.css'
import Header from '../../components/Header'

import GroupInforCard from './GroupInforCard'
import OwnerCard from './OwnerCard'
import CoOwnerCard from './CoOwnerCard'
import MemberCard from './MemberCard'
import { useLocation } from 'react-router-dom';



function Group() {
    const { state } = useLocation();
    const { group } = state;
    return (
        <div >
            <Header state={'GroupPage'} group={group}/>
            <div className='content'>
                <div className='col1'>
                    <GroupInforCard group={group} />
                    <OwnerCard />

                </div>
     
                <div className='widthMode'>
                    <div className='col2'>
                        <MemberCard />

                    </div>
                    <div className='col3'>
                        <CoOwnerCard></CoOwnerCard>

                    </div>
                </div>
                <div className='shortMode'>
                    <MemberCard />
                    <CoOwnerCard></CoOwnerCard>

                </div>

            </div>
        </div>

    )

}

export default Group;