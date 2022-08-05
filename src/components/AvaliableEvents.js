import {useState} from 'react'
import Event from './Event'
import Calendar from 'react-calendar'
import CreateEvent from './CreateEvent'
import 'react-calendar/dist/Calendar.css';
import {Container ,Card, Row, Col, Button} from 'react-bootstrap';

const AvaliableEvents = ({events, userName, isLoggedIn, userEvents, handleLeaveEvent, handleJoinEvent }) => {

    const[searchKey, setSearchKey]=useState('')
    // display four events
    const fourDisplayedEvents = [events[0], events[1], events[2], events[3]]
    const[filter, setFilter]=useState(fourDisplayedEvents)
    const[index, setIndex]=useState(4)
    const[calendar, setCalendar]=useState(false)
    const[createEvent, setCreateEvent]=useState(false)
    const showFourMoreEvents =()=>{
        setCreateEvent(false)
        setCalendar(false)
        setIndex(index+4)
        // click event won't display more events than in events array
        if (index+4 < events.length){
            setFilter([...filter, events[0+index], events[1+index], events[2+index], events[3+index] ])
        }  
    }

    const handleSearchKey =(e)=>{
        setCreateEvent(false)
        setCalendar(false)
        setSearchKey(e.target.value)
        console.log('searching', e.target.value)
        let filterEvents = events.filter(event => {return (event.name).toLowerCase().includes(searchKey.toLowerCase())})
        // console.log()
        setFilter(filterEvents)
    }

     const handleShowInterview =()=>{
        setCreateEvent(false)
        setCalendar(false)
        let filterEvents = events.filter(event => {return (event.name).toLowerCase().includes("interview")})
        setFilter(filterEvents)
    }

    const handleShowHackathon =()=>{
        setCreateEvent(false)
        setCalendar(false)
        let filterEvents = events.filter(event => {return (event.name).toLowerCase().includes("hackathon")})
        setFilter(filterEvents)
    }

    const handleShowPairProgramming =()=>{
        setCreateEvent(false)
        setCalendar(false)
        let filterEvents = events.filter(event => {return (event.name).toLowerCase().includes("pair")})
        setFilter(filterEvents)
    }
    
    const[date, setDate]=useState(new Date())
    // search events by date
    // filter events
    // take event.date declare date1 take month day year
    // take date from calendar, compare to event date return if true
    const onChangeCalendar = (date) =>{
        setCalendar(!calendar)
        setDate(date)
        console.log(date)
        const clickDate = new Date(date)
        const clickDay = clickDate.getDate()
        const clickMonth = clickDate.toLocaleString('default', { month: 'short' })
        const clickYear = clickDate.getFullYear()
        const filterByDate = events.filter(event =>{
            const eventDate = new Date(event.date)
            const eventDay = eventDate.getDate()
            const eventMonth = eventDate.toLocaleString('default', { month: 'short' })
            const eventYear = eventDate.getFullYear()
            return clickDay === eventDay && clickMonth ===  eventMonth && eventYear === clickYear
        })
        setFilter(filterByDate)
    }

    const showCalendar =() =>{
        setCreateEvent(false)
        setFilter(fourDisplayedEvents)
        setCalendar(!calendar)
    }

    const handleCreateNewEvent =() =>{
        setCalendar(false)
        setCreateEvent(!createEvent) 
    }
    

    return (
        <div>

        {createEvent ? (
        <div>
        <div style={{justifyContent:'center',display: 'flex'}}>Click on a Category!</div>
        <div className='Search-Box'>
            <div className='Search-Group' style={{alignItems:'center'}}>
            <input className='Input-Keyword' type='tex=' placeholder='search by keyword' value={searchKey} onChange={handleSearchKey}/>
            </div>
            <div className='Search-Group'>
            <div className='Search-Group-Name'></div>    
            <img src='https://img.freepik.com/free-vector/calendar-icon-white-background_1308-84634.jpg?w=2000' alt='hackathon' className='Group-Event-Image' style={{marginTop:'20px'}} onClick={showCalendar}/>
            </div>

            <div className='Search-Group'>
            <div className='Search-Group-Name'>MOCK INTERVIEW</div>
            <img src='https://cdn.dribbble.com/users/2704931/screenshots/7048399/media/e9125c8957513a73a246798b8b21350d.png?compress=1&resize=800x600&vertical=top'  alt='interview'className='Group-Event-Image' onClick={handleShowInterview}/>
           
           </div>
            <div className='Search-Group'>
            <div className='Search-Group-Name'>PAIR PROGRAMMING</div>
            <img src='https://raw.githubusercontent.com/DXHeroes/knowledge-base-content/master/files/pair-programming.svg?sanitize=true' alt='pair-programming' className='Group-Event-Image' onClick={handleShowPairProgramming}/>
            </div>
            <div className='Search-Group'>
            <div className='Search-Group-Name'>HACATHONS</div>
            <img src='https://t3.ftcdn.net/jpg/02/83/03/80/360_F_283038002_b0lUl4BSXEEICv0VIZX2Em6mAQe8vMkN.jpg' alt='hackathon' className='Group-Event-Image' onClick={handleShowHackathon}/>
            </div>
            
            <div className='Search-Group'>
            <div className='Search-Group-Name'>CREATE AN EVENT</div>
            <img src='https://softsuave-assets.s3.amazonaws.com/images/2020/product/cnt-img-2.png' alt='hackathon' className='Group-Event-Image' onClick={handleCreateNewEvent}/>
            </div>  
        </div>
     
       
            <CreateEvent isLoggedIn={isLoggedIn} handleLeaveEvent={handleLeaveEvent} handleJoinEvent={handleJoinEvent} userName={userName}/>
            {calendar ? (
               <div> <div style={{background:'none', justifyContent:'center'}}><p></p> <Calendar  onChange={onChangeCalendar} value={date} className="calendar"/></div></div>
            ):(<>
            <Container className='events-container' fluid='md'>
                {filter.map(event => 
                <Row xs={3} md={3} lg={3} xl={3} className="g-3">
                    <Event isLoggedIn={isLoggedIn} key={event.id} event={event} events={events} userEvents={userEvents} /> 
                </Row>
                )}
            </Container>
            <div>
            <img style={{ width:'30px', height:'30px', margin:'0 0 0 25px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9sjY02gWy9m1rj_kMRTe5c4Aicl2WO3etg&usqp=CAU' onClick={showFourMoreEvents}/>
            <div>show more</div>
            </div> 
            </>)}
        </div>     
        ):(
        <div>
        <div style={{justifyContent:'center',display: 'flex'}}></div>
        <div className='Search-Box'>
            <div className='Search-Group' style={{alignItems:'center'}}>
            <input className='Input-Keyword' type='tex=' placeholder='search by keyword' value={searchKey} onChange={handleSearchKey}/>
            </div>
            <div className='Search-Group'>
            <div className='Search-Group-Name'></div>    
            <img src='https://img.freepik.com/free-vector/calendar-icon-white-background_1308-84634.jpg?w=2000' alt='hackathon' className='Group-Event-Image' style={{marginTop:'20px'}} onClick={showCalendar}/>
            </div>

            <div className='Search-Group'>
            <div className='Search-Group-Name'>MOCK INTERVIEW</div>
            <img src='https://cdn.dribbble.com/users/2704931/screenshots/7048399/media/e9125c8957513a73a246798b8b21350d.png?compress=1&resize=800x600&vertical=top' alt='interview'className='Group-Event-Image' onClick={handleShowInterview}/>
           
           </div>
            <div className='Search-Group'>
            <div className='Search-Group-Name'>PAIR PROGRAMMING</div>
            <img src='https://raw.githubusercontent.com/DXHeroes/knowledge-base-content/master/files/pair-programming.svg?sanitize=true' alt='pair-programming' className='Group-Event-Image' onClick={handleShowPairProgramming}/>
            </div>
            <div className='Search-Group'>
            <div className='Search-Group-Name'>HACATHONS</div>
            <img src='https://t3.ftcdn.net/jpg/02/83/03/80/360_F_283038002_b0lUl4BSXEEICv0VIZX2Em6mAQe8vMkN.jpg' alt='hackathon' className='Group-Event-Image' onClick={handleShowHackathon}/>
            </div>
            
            <div className='Search-Group'>
            <div className='Search-Group-Name'>CREATE AN EVENT</div>
            <img src='https://softsuave-assets.s3.amazonaws.com/images/2020/product/cnt-img-2.png' alt='hackathon' className='Group-Event-Image' onClick={handleCreateNewEvent}/>
            </div>  
        </div>
     
       
            
            {calendar ? (
              <div>  <div style={{background:'none', justifyContent:'center'}}><p></p> <Calendar style={{background:'none', justifyContent:'center'}} onChange={onChangeCalendar} value={date} className="calendar"/></div></div>
            ):(<>
            <Container className='events-container' fluid='md' >
                {filter.map(event => 
                <Row xs={3} md={3} lg={3} xl={3} className="g-3">
                    
                    <Event handleLeaveEvent={handleLeaveEvent} handleJoinEvent={handleJoinEvent} userEvents={userEvents} key={event.id} event={event}/>
                    
                    
                </Row>
                )}
            </Container>
            <div style={{justifyContent:"center"}}>
            <img style={{ width:'30px', height:'30px', margin:'0 0 0 25px ' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9sjY02gWy9m1rj_kMRTe5c4Aicl2WO3etg&usqp=CAU' onClick={showFourMoreEvents}/>
            <div>show more</div>
            </div>      
            
            </>)}
        </div>
      )}
        
        </div>
    )
}

export default AvaliableEvents


