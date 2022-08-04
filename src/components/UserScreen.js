import { useState } from 'react'
import UserEvents from './UserEvents'
import UpcomingEvents from './UpcomingEvents'
import AvaliableEvents from './AvaliableEvents'
import {Container ,Card, Row, Col, Button} from 'react-bootstrap';

const UserScreen = ({ user, handleCurrentUser, userEvents, events, handleJoinEvent, handleLeaveEvent }) => {
    const [showMoreEvents, setShowMoreEvents] = useState(false)
    
    const { user_name, following_categories } = user
    const userId = user.id

    const handleShowMoreEvents = () => {
        // show more events for user
        setShowMoreEvents(!showMoreEvents)
    }

    return (
        <div className='User-Screen'>
            <div className='introduction-user-screen'>
            <p id="Description-UserScreen">If you want to do coding challenges, practice interview skills, or prepare for a whiteboard interview join us to practice with others Software Developers. Whether you are Python, React, or JavaScript enthusiast this is the right place for you!</p>
            <img id="Logo-User-Screen" src='https://img.freepik.com/free-vector/software-developers-working-script-coding-engineer-character-programming-php-python-javascript-other-languages_90220-243.jpg?w=740&t=st=1659485948~exp=1659486548~hmac=c9b6d11c76746839fb57e651d45b6839a94a2ca1c1ca1c2ef57b86964753f18a' alt="logo" />
            </div>
            {showMoreEvents ? (
                <>
                <AvaliableEvents events={events} userName={user_name}/>
                </>

            ) : (
            <>
                <UserEvents
                    userName={user_name}
                    userId={userId}
                    handleCurrentUser={handleCurrentUser}
                    userEvents={userEvents}
                    followingCategories={following_categories}
                    events={events}
                    handleJoinEvent={handleJoinEvent}
                    handleLeaveEvent={handleLeaveEvent}
                />
                <div className="Upcoming-Events">
                    <h3>Upcoming events</h3>
                    <Container>
                        <Col>
                            {events.map(event =>{
                            if (event.id <= 4) return <UpcomingEvents key={event.id} event={event}/>
                            })}
                        </Col>
                    </Container>
                    <img style={{ width:'30px', height:'30px', display:'flex' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9sjY02gWy9m1rj_kMRTe5c4Aicl2WO3etg&usqp=CAU' className="show-more-events" onClick={handleShowMoreEvents}/>
                </div>
            </>
            )}
        </div>
    )
}

export default UserScreen



