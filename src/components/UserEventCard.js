import { useState, useEffect } from 'react'
import AttendButton from './AttendButton.js'

const UserEventCard = ({ id, name, date, participants, image, events, joinedEvents }) => {
    const [isJoined, setIsJoined] = useState(false)


    useEffect(() => {
        const filterEvents = () => {
            console.log(id)
            joinedEvents.filter((event) => {
                if (event.id == id) {
                    setIsJoined(true)
                }
            })
        }
        filterEvents()
    }, [joinedEvents])

    const handleToggleAttendance = () => {
        setIsJoined(isJoined => !isJoined)
    }

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
                joinedEvents={joinedEvents}
                isJoined={isJoined}
                handleToggleAttendance={handleToggleAttendance}
            />
        </div>
    )
}

export default UserEventCard