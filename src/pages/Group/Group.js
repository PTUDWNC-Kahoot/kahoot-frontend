import '../../style/Group.css'
import Header from '../../components/Header'

import GroupInforCard from './GroupInforCard'
import OwnerCard from './OwnerCard'
import CoOwnerCard from './CoOwnerCard'
import MemberCard from './MemberCard'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import GetGroupMemberList from '../../service/GetGroupMemberList'

function Group() {
    const { state } = useLocation();
    const { group } = state;
    const [groupListMember, setGroupListMember] = useState([]);
    const [ownerList, setOwnerList] = useState([]);
    const [coOwnerList, setCoOwnerList] = useState([]);
    const [memberList, setMemberList] = useState([]);

    useEffect(() => {
        GetGroupMemberList(group, setGroupListMember);
    }, []);

    useEffect(() => {
        var listOfOwner = [];
        var listOfCoOwner = [];
        var listOfMember = [];

        groupListMember.map((user) => {
            if (user.role === 1)
                listOfOwner.push(user);
            if (user.role === 2)
                listOfCoOwner.push(user);
            if (user.role === 3)
                listOfMember.push(user);
        })
        setOwnerList(listOfOwner)
        setCoOwnerList(listOfCoOwner)
        setMemberList(listOfMember)
    }, [groupListMember]);

    return (
        <div >
            <Header page={'GroupPage'} group={group}  >  </Header>
            <div className='content'>
                <div className='col1'>
                    <GroupInforCard group={group} />
                    <OwnerCard list={ownerList} />

                </div>

                <div className='widthMode'>
                    <div className='col2'>
                        <MemberCard list={memberList} />

                    </div>
                    <div className='col3'>
                        <CoOwnerCard list={coOwnerList} />

                    </div>
                </div>
                <div className='shortMode'>
                    <MemberCard list={memberList} />
                    <CoOwnerCard list={coOwnerList}></CoOwnerCard>


                </div>

            </div>
        </div>

    )

}

export default Group;