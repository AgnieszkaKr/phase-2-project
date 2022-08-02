import UserEvents from './UserEvents'
import UpcomingEvents from './UpcomingEvents'
import {useState, useEffect} from 'react'

const UserScreen = () => {
    const[events, setEvents]=useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/events')
        .then(req => req.json())
        .then(res => setEvents(res))
    }, [])


    return (
        <div className='User-Screen'>
            <UserEvents />
            <div className="Upcoming-Events">{events.map(event => <UpcomingEvents key={event.id} event={event}/>)}</div>
        </div>
    )
}

export default UserScreen