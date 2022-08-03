import { useState, useEffect } from 'react'

// if user is attending event, button should be leave event
// if user is not attending event, button should be join event
// we know whether the user is attending an event or not if their
// attending events array includes the id of an event

const AttendButton = ({ id, events, joinedEvents }) => {

    // determine initial state in parent component and update state in children

    const [isJoined, setIsJoined] = useState(false)

    
    useEffect(() => {
        const filterEvents = () => {
            console.log(id)
            joinedEvents.filter((event) => {
                console.log('id is', id, 'event.id is', event.id)
                return (
                    event.id == id
                    ? setIsJoined(true)
                    : setIsJoined(false)
                )
            })
        }
        filterEvents()
    }, [joinedEvents])

    // const filterEvents = () => {
    //     console.log(id)
    //     joinedEvents.filter((event) => {
    //         console.log('id is', id, 'event.id is', event.id)
    //         return (
    //             event.id == id
    //                 ? setIsJoined(true)
    //                 : setIsJoined(false)
    //         )
    //     })
    // }
    // setTimeout(() => {
    //     filterEvents()
    // }, 5000)
    

    // const activeServiceList = serviceList.filter((item) => {
    //     return activeIds.includes(item.id);
    // });
    
    const [isAttending, setIsAttending] = useState()

    return (
        <div className='Attend-Button'>
            {isJoined
            ? <button onClick={((e) => {
                console.log(isJoined)
            })}>Leave</button>
            : <button>Join</button>
            }
        </div>
    )
}

export default AttendButton