async function fetchEvents() {
    try {
        console.log('Fetching events...');
        const response = await fetch('https://localhost:7295/api/events'); // Update the URL to your events API endpoint
        const events = await response.json();
        console.log('Events fetched:', events);
        localStorage.setItem('events', JSON.stringify(events));
    } catch (error) {
        console.error('Failed to fetch events:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await fetchEvents(); // Fetch events from the server and store in localStorage

    let eventsContainer = document.querySelector('.events');

    if (eventsContainer === null) {
        console.error('No element with class .events found');
        return;
    }

    const storedEvents = localStorage.getItem('events');
    if (!storedEvents) {
        console.error('No events found in localStorage');
        return;
    }

    const events = JSON.parse(storedEvents);
    console.log('Events from localStorage:', events);

     // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to midnight to compare dates only

    // Function to parse date in dd.MM.yyyy format
    function parseDate(dateStr) {
        const [day, month, year] = dateStr.split('-').map(Number);
        return new Date(year, month - 1, day); // Month is 0-based in JavaScript Date
    }
    
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    // Filter events to include only those with a date greater than or equal to today
    const upcomingEvents = events.filter(event => {
        const eventDate = parseDate(event.date);
        eventDate.setHours(0, 0, 0, 0); // Set to midnight to compare dates only
        return eventDate >= today;
    });

    // Sort events by date in ascending order
    upcomingEvents.sort((a, b) => parseDate(a.date) - parseDate(b.date));
    

    const eventId = window.location.hash; // Gets the URL fragment including the '#'
    if (eventId) {
        const eventElement = document.querySelector(eventId);
        if (eventElement) {
            eventElement.scrollIntoView(); // Scrolls the page to the event element
        }
    }

    events.reverse().forEach(event => {
        let eventElement = document.createElement('div');
        eventElement.id = `event-${event.eventId}`; // Set the ID for the event element
        eventElement.style.padding = '10px';
        eventElement.style.margin = '10px';
        eventElement.style.borderRadius = '10px';
        eventElement.style.backgroundColor = 'rgba(206, 212, 228, 0.3)';
        eventElement.style.color = 'rgb(94, 60, 36)';
        eventElement.style.fontSize = '18px';

        // Display event details
        let eventName = document.createElement('h4');
        eventName.textContent = event.name;
        eventElement.appendChild(eventName);

        let eventDate = document.createElement('p');
        eventDate.textContent = `Dagsetning: ${formatDate(new Date(event.date))}`; // Format the date
        eventElement.appendChild(eventDate);

        let eventDescription = document.createElement('p');
        eventDescription.textContent = event.text;
        eventElement.appendChild(eventDescription);

        // Use the link defined in the event data 
            let eventLink = document.createElement('a');
            eventLink.href = event.link;
            eventLink.target = '_blank'; // Open the link in a new tab
            eventLink.textContent = 'Skoða betur';
            eventElement.appendChild(eventLink);
        

     

        eventsContainer.appendChild(eventElement);
    });
});