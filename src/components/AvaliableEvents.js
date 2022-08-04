import {useState} from 'react'
import Event from './Event'
import Calendar from 'react-calendar'
import CreateEvent from './CreateEvent'
import 'react-calendar/dist/Calendar.css';

const AvaliableEvents = ({events, userName}) => {

    const[searchKey, setSearchKey]=useState('')
    // display four events
    const fourDisplayedEvents = [events[0], events[1], events[2], events[3]]
    const[filter, setFilter]=useState(fourDisplayedEvents)
    const[index, setIndex]=useState(4)
    const[calendar, setCalendar]=useState(false)
    const[createEvent, setCreateEvent]=useState(false)
    const showFourMoreEvents =()=>{

        setCalendar(false)
        setIndex(index+4)
        // click event won't display more events than in events array
        if (index+4 < events.length){
            setFilter([events[0+index], events[1+index], events[2+index], events[3+index] ])
        }  
    }



    const handleSearchKey =(e)=>{
        setCalendar(false)
        setSearchKey(e.target.value)
        console.log(e.target.value)
        let filterEvents = events.filter(event => {return (event.name).toLowerCase().includes(searchKey.toLowerCase())})
        console.log()
        setFilter(filterEvents)
    }

     const handleShowInterview =()=>{
        setCalendar(false)
        let filterEvents = events.filter(event => {return (event.name).toLowerCase().includes("interview")})
        setFilter(filterEvents)
    }

    const handleShowHackathon =()=>{
        setCalendar(false)
        let filterEvents = events.filter(event => {return (event.name).toLowerCase().includes("hackathon")})
        setFilter(filterEvents)
    }

    const handleShowPairProgramming =()=>{
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
        setFilter(fourDisplayedEvents)
        setCalendar(!calendar)
    }

    const handleCreateNewEvent =() =>{
        setCreateEvent(!createEvent)
        console.log("create")
        
    }
    

    return (
        <div>

        {createEvent ? (<CreateEvent userName={userName}/>):(
        <div>
        <div>SEARCH EVENTS</div>
        <div className='Search-Box'>
            <div className=''>
            <div></div>
            <input className='Input-Keyword' type='tex=' placeholder='search by keyword' value={searchKey} onChange={handleSearchKey}/>
            </div>
            <div className=''>
            <div>MOCK INTERVIEW</div>
            <img src='https://cdn.dribbble.com/users/2704931/screenshots/7048399/media/e9125c8957513a73a246798b8b21350d.png?compress=1&resize=800x600&vertical=top' alt='interview'className='Group-Event-Image' onClick={handleShowInterview}/>
           
           </div>
            <div className=''>
            <div>PAIR PROGRAMMING</div>
            <img src='https://raw.githubusercontent.com/DXHeroes/knowledge-base-content/master/files/pair-programming.svg?sanitize=true' alt='pair-programming' className='Group-Event-Image' onClick={handleShowPairProgramming}/>
            </div>
            <div className=''>
            <div>HACATHONS</div>
            <img src='https://t3.ftcdn.net/jpg/02/83/03/80/360_F_283038002_b0lUl4BSXEEICv0VIZX2Em6mAQe8vMkN.jpg' alt='hackathon' className='Group-Event-Image' onClick={handleShowHackathon}/>
            
            </div>
            
            <div className=''>
            <img src='https://img.freepik.com/free-vector/calendar-icon-white-background_1308-84634.jpg?w=2000' alt='hackathon' className='Group-Event-Image' onClick={showCalendar}/>
            
            </div>  
        </div>
     
        <div className='AvaliableEvents'>
            {filter.map(event => <Event key={event.id} event={event}/> )}
            {calendar ? (
                <div> <Calendar onChange={onChangeCalendar} value={date} className="calendar"/></div>
            ):(<></> )}
        </div>

        <div onClick={showFourMoreEvents}>SHOW MORE EVENTS => (should show more 4 events)</div>
        </div>
      )}

        <div onClick={handleCreateNewEvent}>CREATE EVENT</div>
        
        </div>
    )
}

export default AvaliableEvents


