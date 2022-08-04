import {useEffect, useState} from 'react'
import Event from './Event'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const Content = ({events, setEvents}) => {
    
    useEffect(()=>{
        fetch('http://localhost:8000/events')
        .then(req => req.json())
        .then(res => setEvents(res))
    }, [])

    let displayEightEvents = events.filter((event, index) => (index < 6))

    return (
        <Container>     
        <Row className="justify-content-md-center" xs={4} md={2} >
                
                    { displayEightEvents.map(event =><Event key={event.id} event={event}/>)
                    }
                
        </Row>
        </Container>
       
        )
}

export default Content