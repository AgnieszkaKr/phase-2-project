const UpcomingEvents = ({event}) => {
    console.log(event.date)
    let date = new Date(event.date)
    let day = date.getDate()
    let dayName = date.toLocaleDateString('en-US', {weekday: 'short'})
    let month = date.getMonth() + 1
    let hour = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit', })
    let year = date.getFullYear()
    
    return (
        <div className='Upcoming-Event'>
            <p>{event.name}</p>
            <p>{`${dayName},${day} ${month},${year}`}</p>
        </div>
    )
}

export default UpcomingEvents