import { useState, useEffect } from 'react'
import AttendButton from './AttendButton.js'

const UserEventCard = ({ userId, handleCurrentUser, event, id, name, date, participants, image, events, userEvents, handleJoinEvent, handleLeaveEvent, }) => {
    const [isJoined, setIsJoined] = useState(false)
    const [patchObject, setPatchObject] = useState({})


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
    
    const handleUpdateUserEvents = async () => {
       
    }

    const handleJoinLeave = () => {
        if (isJoined) {
            handleLeaveEvent(id)
        } else {
            handleJoinEvent(event);
        }
        handleUpdateUserEvents()
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
                handleUpdateUserEvents={handleJoinLeave}
            />
        </div>
    )
}

export default UserEventCard