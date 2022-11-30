import '../style/EmptyNotify.css'
export default function EmptyNotify(){
    return(
        <div className='emptyImageBox'>
             <img src={require('../assets/img/emptyNotify.png')} className='emptyImage' alt='logo'></img>
             <div className='emptyText'>Empty List</div>
        </div>
    )
}