import '../../../style/styles.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import './GroupPresentation.css'
import GroupPresentationList from "./GroupPresentationList/GroupPresentationList";
function GroupPresentation ( {group})
{
    return(
        <Box sx={{ minWidth: 275, margin: 2, boxShadow: 2 }}>
        <Card variant="outlined">
             <div className="gpresent__content">
              <header className="gpresent__header">My presentation</header>
              <div className='contentBox'>             
                  <GroupPresentationList group={group}/>
              </div>
            </div>
        </Card>
        </Box>
    )
}
export default GroupPresentation;