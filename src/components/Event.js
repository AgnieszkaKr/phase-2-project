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
            <Col style={{marginTop:"40px"}}>
            <Card style={{ width: '13rem', height: 'auto', marginRight:'40px', marginLeft:'20px'}} class="mr-3" >
                <img variant="top" src={event.image} alt="" style={{ width: '13rem', height: '7rem'}} />
                <br/>
                <div className='Event-Title'>{event.name}</div>
                <div className='Event-Date' style={{marginTop:'3px'}}>{`${dayName}, ${day} ${month}, ${year} ${hour} EST`} </div>
                
                {showMore ? <div>{event.description}</div>:<></>}
                <br/>
                <div onClick={handleClick}>
                    {showDescription}
                </div>
                
            </Card>
            </Col>
    )
}

export default Event;
