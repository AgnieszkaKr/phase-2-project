import { useState, useEffect } from 'react'
import AttendButton from './AttendButton.js'

const UserEventCard = ({ userId, handleCurrentUser, event, id, name, date, participants, image, events, userEvents, handleJoinEvent, handleLeaveEvent, }) => {
    const [isJoined, setIsJoined] = useState(false)

    useEffect(() => {
        const filterEvents = () => {
            userEvents.filter((_id) => {
                if (_id.id == id) {
                    setIsJoined(true)
                }
            })
        }
        filterEvents()
    }, [userEvents])
    
    const handleUpdateUserEvents = () => {
        handleJoinLeave()
        fetch(`http://localhost:8000/users/${userId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({joined_events: userEvents})
        })
        .then(req => req.json())
        .then(res => {
            handleCurrentUser(res)
        })   
    }

    const handleJoinLeave = () => {
        if (isJoined) {
            handleLeaveEvent(id)
        } else {
            handleJoinEvent(event);
        }
        setIsJoined(isJoined => !isJoined)
    }
    // console.log(userEvents)
    return (
        <div className='User-Event-Card'>
            <h2>{name}</h2>
            <h3>{date}</h3>
            <img className='user-event-card-image' src={image} />
            <p>{participants.length} attending</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <AttendButton 
                key={id}
                id={id} 
                events={events}
                userEvents={userEvents}
                isJoined={isJoined}
                handleUpdateUserEvents={handleUpdateUserEvents}
            />
        </div>
    )
}

export default UserEventCard