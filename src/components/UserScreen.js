import UserEvents from './UserEvents'
import UpcomingEvents from './UpcomingEvents'
import {useState, useEffect} from 'react'

<<<<<<< HEAD
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
=======
const UserScreen = ({ user, joinedEvents }) => {
    const { user_name, following_categories } = user
    return (
        <div className='User-Screen'>
            <UserEvents 
                userName={user_name}
                joinedEvents={joinedEvents}
                followingCategories={following_categories}
            />
            <UpcomingEvents />
>>>>>>> nick-branch
        </div>
    )
}

export default UserScreen