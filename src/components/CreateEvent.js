import {useState} from 'react'
import Calendar from 'react-calendar'
import Event from './Event'

const CreateEvent = ({userName}) => {
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
        <div>
            Congratulation! You just created new event!
             <Event event={newEvent}/>
            <div> show more events</div>
        </div>
        :
        <div className='Craeate-Event'>
                <form onSubmit={handleCreateNewEvent} >
                    <input type='text' placeholder="event's name" value={eventName} onChange={(e)=>setEventName(e.target.value)}/>
                    <Calendar onChange={onChangeCalendar} value={date} />
                    <input type='text' placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <input type='text' placeholder="image url" value={image} onChange={(e)=>setImage(e.target.value)}/>
                    <button type="submit" >create event</button>
                </form>
        </div>
        }
        </div>
    )
}

export default CreateEvent;

