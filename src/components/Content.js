import {useEffect, useState} from 'react'
import Event from './Event'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const Content = ({events, setEvents, isLoggedIn, userEvents, handleLeaveEvent, handleJoinEvent }) => {
    
    useEffect(()=>{
        fetch('http://localhost:8000/events')
        .then(req => req.json())
        .then(res => setEvents(res))
    }, [])

    let displayEvents = events.filter((event, index) => (index < 4))

    return (
        <div style={{marginBottom:'15px'}}>
            <Container className='events-container' fluid='md'>
                {displayEvents.map(event => 
                <Row xs={3} md={3} lg={3} xl={3} className="g-3">
                    <Event userEvents={userEvents} key={event.id} event={event} isLoggedIn={isLoggedIn} handleLeaveEvent={handleLeaveEvent} handleJoinEvent={handleJoinEvent} /> 
                </Row>
                )}
            </Container>
        </div>
        )
}

export default Content



