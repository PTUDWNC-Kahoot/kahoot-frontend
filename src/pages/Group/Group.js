import '../../style/Group.css'
import Header from '../../components/Header'
import GroupPresentation from './GroupPresentation/GroupPresentation'
import GroupInforCard from './GroupInforCard'
import OwnerCard from './OwnerCard'
import CoOwnerCard from './CoOwnerCard'
import MemberCard from './MemberCard'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import GetGroupMemberList from '../../service/GetGroupMemberList'
import ChangeRole from '../../service/ChangeRole'
import { Snackbar } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider'

function Group() {
    const navigate = useNavigate();
    const { token } = useAuth();
    const { state } = useLocation()
    useEffect(() => {
        if (!token || state === null)
            navigate('/login')
        console.log('state', state)
    }, [token, state]);


    const [groupListMember, setGroupListMember] = useState([]);
    const [ownerList, setOwnerList] = useState([]);
    const [coOwnerList, setCoOwnerList] = useState([]);
    const [memberList, setMemberList] = useState([]);
    const [changeRoleState, setChangeRoleState] = useState();
    const [group, setGroup] = useState(state?.group);


    useEffect(() => {

        GetGroupMemberList(token, group, setGroupListMember);
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

    const changeRoleHandle = (userId, newRole) => {
        ChangeRole(token, group, userId, newRole, setChangeRoleState)
    }

    if (token && state)
        return (
            <div >
                <Header page={'GroupPage'} group={group}  >  </Header>
                <div className='content'>
                    <div className='col1'>
                        <GroupInforCard group={group} />
                        <OwnerCard list={ownerList} changeRoleHandle={changeRoleHandle} />
                        <CoOwnerCard list={coOwnerList} changeRoleHandle={changeRoleHandle}></CoOwnerCard>

                    </div>

                    <div className='widthMode'>
                        <div className='col2'>
                            <MemberCard list={memberList} changeRoleHandle={changeRoleHandle} />

                        </div>
                        <div className='col3'>
                            <CoOwnerCard list={coOwnerList} changeRoleHandle={changeRoleHandle} />

                        </div>
                    </div>
                    <div className='shortMode'>
                        <MemberCard list={memberList} changeRoleHandle={changeRoleHandle} />
                        <GroupPresentation></GroupPresentation>

                    </div>

                </div>
                <Snackbar
                    message="You don't have permission"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    autoHideDuration={2000}
                    onClose={() => setChangeRoleState(undefined)}
                    open={changeRoleState !== undefined && changeRoleState !== true}
                />
                <Snackbar
                    message="Change role successfully"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    autoHideDuration={2000}
                    onClose={() => setChangeRoleState(undefined)}
                    open={changeRoleState !== undefined && changeRoleState !== false}
                />
            </div>

        )

}

export default Group;