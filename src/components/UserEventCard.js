import { useState, useEffect } from 'react'
import AttendButton from './AttendButton.js'
import {Container ,Card, Row, Col, Button} from 'react-bootstrap';

const UserEventCard = ({ userId, handleCurrentUser, event, id, name, date, participants, image, events, userEvents, handleJoinEvent, handleLeaveEvent, description }) => {
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

    const eventDate = new Date(event.date)
    const day = eventDate.getDate()
    const dayName = eventDate.toLocaleDateString('en-US', {weekday: 'short'})
    const month = eventDate.toLocaleString('default', { month: 'short' })
    const hour = eventDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit', })
    const year = eventDate.getFullYear()
    return (
        <Col>
            <Card style={{ width: '18rem'}} className="ml-2" >
                <Card.Img variant="top" src={image} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {`${dayName}, ${day} ${month}, ${year} ${hour} EST`}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    {description}
                    {/* {showMore ? <div>{description}</div>:<></>} */}
                </Card.Body>
                <Card.Footer>  
                    <AttendButton 
                        key={id}
                        id={id} 
                        events={events}
                        userEvents={userEvents}
                        isJoined={isJoined}
                        handleUpdateUserEvents={handleUpdateUserEvents}
                    />
                </Card.Footer>
            </Card>
        </Col> 
    )
}

export default UserEventCard


