import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container ,Card, Row, Col, Button} from 'react-bootstrap';

const Event = ({event}) => {
    const[showMore, setShowMore]=useState(false)
    const handleClick =()=>{
        setShowMore(!showMore)
    }
    let showDescription= (showMore) ? "hide details":"show details"
    const date = new Date(event.date)
    const day = date.getDate()
    const dayName = date.toLocaleDateString('en-US', {weekday: 'short'})
    const month = date.toLocaleString('default', { month: 'short' })
    const hour = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit', })
    const year = date.getFullYear()
    return (
        <Col>
            <Card style={{ width: '18rem'}} className="ml-2" >
                <Card.Img variant="top" src={event.image} alt="" />
                <Card.Body>
                    <Card.Title>{event.name}</Card.Title>
                    <Card.Text>
                        {`${dayName}, ${day} ${month}, ${year} ${hour} EST`}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    {showMore ? <div>{event.description}</div>:<></>}
                </Card.Body>
                <Card.Footer>
                    <button className="button-description" onClick={handleClick}>{showDescription}</button>   
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default Event;
