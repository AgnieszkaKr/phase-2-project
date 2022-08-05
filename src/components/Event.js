import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container ,Card, Row, Col, Button} from 'react-bootstrap';

const Event = ({event, isLoggedIn}) => {
    console.log(isLoggedIn)
    const[showMore, setShowMore]=useState(false)
    const handleClick =()=>{
        setShowMore(!showMore)
    }

    const signUp =()=>{

        // sign up for event
    }


    let showDescription= (showMore) ? "Log in to sign up":"show details"
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
                <div className='Event-Title' style={{ textAlign: 'justify', padding:'10px'}}>{event.name}</div>
                <div className='Event-Date' style={{marginTop:'3px',twxtAlign: 'justify', padding:'10px'}}>{`${dayName}, ${day} ${month}, ${year} ${hour} EST`} </div>
                {showMore ? 
                    <div style={{ textAlign: 'justify', padding:'10px'}}><br/>{event.description}<br/>
                    {isLoggedIn ? <button onClick={signUp}>sign up</button> : <></>}</div>
                        :
                        <></>}
                        <br/>
                        <button style={{borderRadius: '25px', border:"none"}} onClick={handleClick}>{showDescription}</button>
                
                
            </Card>
            </Col>
    )
}

export default Event;
