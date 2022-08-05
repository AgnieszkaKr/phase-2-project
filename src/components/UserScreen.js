import { useState } from 'react'
import UserEvents from './UserEvents'
import UpcomingEvents from './UpcomingEvents'
import AvaliableEvents from './AvaliableEvents'
import UserLanding from './UserLanding'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

const UserScreen = ({ isLoggedIn, user, handleCurrentUser, userEvents, events, handleJoinEvent, handleLeaveEvent }) => {
    const [showMoreEvents, setShowMoreEvents] = useState(false)

    const { user_name, following_categories } = user
    const userId = user.id

    const handleShowMoreEvents = () => {
        // show more events for user
        setShowMoreEvents(!showMoreEvents)
    }

    return (
        <div className='User-Screen'>
    <div className='introduction-user-screen' style={{ display: 'flex', marginTop: '10%', height: '30%' }}>
        <p></p>
        <div className='carousel-container' style={{ float: "right", }} >
            <Carousel fade='true'>
                <Carousel.Item interval={5000}>
                    <img style={{ height: '450px', width: '450px' }}
                        className='carousel-image'
                        src="https://img.freepik.com/free-vector/computer-programming-camp-illustration_335657-434.jpg?w=826&t=st=1659636983~exp=1659637583~hmac=38333336866efa7f44586e66e7ada8ecbaf2dd88090710484f64697914393875"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        style={{ height: '450px', width: '450px' }}
                        className='carousel-image'
                        src='https://img.freepik.com/free-vector/custom-style-script-website-optimization-coding-software-development-female-programmer-cartoon-character-working-adding-javascript-css-code_335657-2370.jpg?w=826&t=st=1659634104~exp=1659634704~hmac=874e77bc3cb486913218e43ee5e9becc50ba6c8475916880d2942dc1240fe188://img.freepik.com/free-vector/programmer-work-with-working-day-symbols-flat-illustration_1284-60322.jpg?w=1060&t=st=1659633463~exp=1659634063~hmac=1ea339bd6c13939f1dbbda5151d69cf749fc46dcad206aa90d47323958459f7f'
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        style={{ height: '450px', width: '450px' }}
                        className='carousel-image'
                        src='https://img.freepik.com/free-vector/css-html-programming-languages-computer-programming-coding-it-female-programmer-cartoon-character-software-website-development_335657-760.jpg?w=826&t=st=1659633658~exp=1659634258~hmac=b4ef0064b8ad99642192c274010fd89cf4a560408649c51dddec030ab0074c5c'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
    {
        showMoreEvents ? (
            <>
                <AvaliableEvents events={events} userName={user_name} isLoggedIn={isLoggedIn} handleJoinEvent={handleJoinEvent} handleLeaveEvent={handleLeaveEvent} userEvents={userEvents} />
            </>

        ) : (
            <>
                <h3>USER EVENTS</h3>
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
                            {events.map(event => {
                                if (event.id <= 4) return <UpcomingEvents key={event.id} event={event} handleJoinEvent={handleJoinEvent} handleLeaveEvent={handleLeaveEvent} userEvents={userEvents} />
                            })}
                        </Col>
                    </Container>
                    <img style={{ width: '30px', height: '30px', float: 'right' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9sjY02gWy9m1rj_kMRTe5c4Aicl2WO3etg&usqp=CAU' className="show-more-events" onClick={handleShowMoreEvents} />
                </div>
            </>
        )
    }
        </div >
    )
}

export default UserScreen



