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

    let displayEightEvents = events.filter((event, index) => (index < 3))

    return (
        <Container >     
        <Row class="justify-content-md-center" >
                
                    { displayEightEvents.map(event =><Event key={event.id} event={event}/>)
                    }
                
        </Row>
        </Container>
       
        )
}

export default Content