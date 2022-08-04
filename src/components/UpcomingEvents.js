import {useState} from 'react'
import {Container ,Card, Row, Col, Button} from 'react-bootstrap';

const UpcomingEvents = ({event}) => {
    const[displayDetails, setDisplayDitails]=useState(false)
    
    const date = new Date(event.date)
    const day = date.getDate()
    const dayName = date.toLocaleDateString('en-US', {weekday: 'short'})
    const month = date.toLocaleString('default', { month: 'short' })
    const hour = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit', })
    const year = date.getFullYear()

    const handeleDisplayEvent =()=>{
        setDisplayDitails(!displayDetails)
    }
    const handleSigningUp =()=>{
        // EVENT USER SIGNED UP-UPDATE EVENTS
        console.log(event.id)
    }
    
    return (
        <Row>
            <Card>
                <div onClick={handeleDisplayEvent} >
                    {displayDetails ? (
                    <div>
                    <p>{event.name}</p>
                    <img className="Upcoming-Event-Image" src={event.image} alt="" />
                    <p>{`${dayName}, ${day} ${month}, ${year} ${hour} EST`}</p>
                    <p>{event.description}</p>
                    <button className="signUpForEvent" onClick={handleSigningUp}>Sign up </button>
                    </div>
                    ):(
                    <div>
                    <p>{event.name}</p>
                    <p>{`${dayName}, ${day} ${month}, ${year} ${hour} EST`}</p></div> )}
                    
                </div>
            </Card>
        </Row>
    )
}

export default UpcomingEvents

