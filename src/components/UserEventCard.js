import { useState, useEffect } from 'react'
import AttendButton from './AttendButton.js'

const UserEventCard = ({ userId, handleCurrentUser, id, name, date, participants, image, events, joinedEvents, handleJoinEvent, handleLeaveEvent, userEventsIds }) => {
    const [isJoined, setIsJoined] = useState(false)

    useEffect(() => {
        const filterEvents = () => {
            userEventsIds.filter((_id) => {
                if (_id == id) {
                    setIsJoined(true)
                }
            })
        }
        filterEvents()
    }, [joinedEvents])
    
    const handleUpdateUserEvents = () => {
        fetch(`http://localhost:8000/users/${userId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({joined_events: userEventsIds})
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
            handleJoinEvent(id);
        }
        setIsJoined(isJoined => !isJoined)
    }

    return (
        <div className='User-Event-Card'>
            <h2>{name}</h2>
            <h3>{date}</h3>
            <img className='user-event-card-image' src={image} />
            <p>{participants.length} attending</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
<<<<<<< HEAD
            {/* <AttendButton 
                id={id} 
                events={events}
                joinedEvents={joinedEvents}
            /> */}
=======
            <AttendButton 
                key={id}
                id={id} 
                events={events}
                joinedEvents={joinedEvents}
                isJoined={isJoined}
                handleJoinLeave={handleJoinLeave}
                handleUpdateUserEvents={handleUpdateUserEvents}
            />
>>>>>>> revision-branch
        </div>
    )
}

export default UserEventCard