import {useState} from 'react'
import Calendar from 'react-calendar'
import Event from './Event'

const CreateEvent = ({userName }) => {
    const[eventName, setEventName]=useState("")
    const[description,setDescription]=useState('')
    const [image, setImage]=useState('')
    const[date, setToday]=useState(new Date())
    const[displayCreatedEvent, setDisplayCreatedEvent]=useState(false)
    const[newEvent, setNewEvent]=useState({})
    const onChangeCalendar = (date) =>{
        setToday(date)
        console.log(date)}

    const handleCreateNewEvent =(e)=>{
        e.preventDefault()
        console.log(date)
        fetch('http://localhost:8000/events',
        {method:'POST',
        headers: {
        'Content-Type':'application/json'
        },
        body: JSON.stringify({
        name: eventName,
        date: date,
        participants:[],
        image: image,
        category:[],
        description: description,
        owner: userName,

        })
        }).then(req=> req.json())
        .then (res => setNewEvent(res))

        setEventName("")
        setToday(new Date())
        setDescription('')
        setImage('')
        setDisplayCreatedEvent(true)

        }


    return (
        
        <div>
        {displayCreatedEvent ?
        <div style={{alignItems: 'center', justifyContent:'center', display:'grid'}}>
            Congratulation! Your new event:
             <Event event={newEvent}/>
        </div>
        :
        <div style={{alignItems: 'center', justifyContent:'center', display: 'flex'}}>
                <form onSubmit={handleCreateNewEvent} style={{alignItems: 'center', justifyContent:'center', display:'grid'}}>
                    <br/>
                    <input className='New-Event' type='text' placeholder="event's name" value={eventName} onChange={(e)=>setEventName(e.target.value)}/>
                    <br/>
                    <br/>
                    <Calendar onChange={onChangeCalendar} value={date} />
                    <br/>
                    <input type='text' className='New-Event' placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <br/>
                    <br/>
                    <input type='text'className='New-Event' placeholder="image url" value={image} onChange={(e)=>setImage(e.target.value)}/>
                    <br/>
                    <br/>
                    <button type="submit" >create event</button>
                </form>
        </div>
        }
        </div>
    )
}

export default CreateEvent;

