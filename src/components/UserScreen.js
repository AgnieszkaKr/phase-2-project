import UserEvents from './UserEvents'
import UpcomingEvents from './UpcomingEvents'


const UserScreen = ({events}) => {

    return (
        <div className='User-Screen'>
            <UserEvents />
            <div className="Upcoming-Events">{events.map(event => <UpcomingEvents key={event.id} event={event}/>)}</div>
        </div>
    )
}

export default UserScreen