document.addEventListener('DOMContentLoaded', () => {
    // Routes
    const routeForm = document.getElementById('route-form');
    const routesList = document.getElementById('routes-list');
    const deleteRouteButton = document.getElementById('delete-route-button');
    

    routeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const routeId = document.getElementById('route-id').value;
        const userId = document.getElementById('userId').value;
        const routeName = document.getElementById('route-name').value;
        const routeDistance = parseFloat(document.getElementById('route-distance').value);
        const routeLink = document.getElementById('route-link').value;
        const routeRegion = document.getElementById('route-region').value;
        const routeDescription = document.getElementById('route-description').value;
        const routeVideoLink = document.getElementById('route-videolink').value;

        if (routeId) {
            // Update route
            await updateRoute(routeId, userId, routeName,routeDistance,routeLink,routeRegion, routeDescription, routeVideoLink);
        } else {
            // Add new route
            await addRoute(userId, routeName,routeDistance,routeLink,routeRegion, routeDescription, routeVideoLink);
        }

        loadRoutes();
        routeForm.reset();
    });

    deleteRouteButton.addEventListener('click', async () => {
        const routeId = document.getElementById('route-id').value;
        if (routeId) {
            await deleteRoute(routeId);
            loadRoutes();
            routeForm.reset();
        } else {
            alert('No route selected to delete');
        }
    });

    routesList.addEventListener('click', async (e) => {
        if (e.target.classList.contains('edit')) {
            const routeId = e.target.dataset.id;
            const route = await getRoute(routeId);
            document.getElementById('route-id').value = route.id;
            document.getElementById('userId').value = route.userId;
            document.getElementById('route-name').value = route.name;
            document.getElementById('route-distance').value = route.distance;
            document.getElementById('route-link').value = route.link;
            document.getElementById('route-region').value = route.region;
            document.getElementById('route-description').value = route.description;
            document.getElementById('route-videolink').value = route.videolink;
        } else if (e.target.classList.contains('delete')) {
            const routeId = e.target.dataset.id;
            await deleteRoute(routeId);
            loadRoutes();
        }
    });

    // Events
    const eventForm = document.getElementById('event-form');
    const eventsList = document.getElementById('events-list');
    const deleteEventButton = document.getElementById('delete-event-button');

    eventForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const eventId = document.getElementById('event-id').value;
        const eventName = document.getElementById('event-name').value;
        const eventDateStr = document.getElementById('event-date').value;
        const eventDate = parseDate(eventDateStr); // Parse the data string
        const eventText = document.getElementById('event-text').value;
        const eventLink = document.getElementById('event-link').value;

        if (eventId) {
            // Update event
            await updateEvent(eventId, eventName, eventDate, eventText, eventLink);
        } else {
            // Add new event
            await addEvent(eventName, eventDate, eventText, eventLink);
        }

        loadEvents();
        eventForm.reset();
    });

    deleteEventButton.addEventListener('click', async () => {
        const eventId = document.getElementById('event-id').value;
        if (eventId) {
            await deleteEvent(eventId);
            loadEvents();
            eventForm.reset();
        } else {
            alert('No event selected to delete');
        }
    });

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

    eventsList.addEventListener('click', async (e) => {
        if (e.target.classList.contains('edit')) {
            const eventId = e.target.dataset.id;
            const event = await getEvent(eventId);
            document.getElementById('event-id').value = event.id;
            document.getElementById('event-name').value = event.name;
            document.getElementById('event-date').value = formatDate(new Date(event.date)); // Format the date
            document.getElementById('event-text').value = event.text;
            document.getElementById('event-link').value = event.link;
        } else if (e.target.classList.contains('delete')) {
            const eventId = e.target.dataset.id;
            await deleteEvent(eventId);
            loadEvents();
        }
    });

    // Users
    const userForm = document.getElementById('user-form');
    const usersList = document.getElementById('users-list');

    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userId = document.getElementById('user-id').value;
        const userName = document.getElementById('user-name').value;
        const userEmail = document.getElementById('user-email').value;

        if (userId) {
            // Update user
            await updateUser(userId, userName, userEmail);
        } else {
            // Add new user
            await addUser(userName, userEmail);
        }

        loadUsers();
        userForm.reset();
    });

    usersList.addEventListener('click', async (e) => {
        if (e.target.classList.contains('edit')) {
            const userId = e.target.dataset.id;
            const user = await getUser(userId);
            document.getElementById('user-id').value = user.id;
            document.getElementById('user-name').value = user.name;
            document.getElementById('user-email').value = user.email;
        } else if (e.target.classList.contains('delete')) {
            const userId = e.target.dataset.id;
            await deleteUser(userId);
            loadUsers();
        }
    });

    // Load initial data
    loadRoutes();
    loadEvents();
    loadUsers();
});

// Functions to interact with the API
async function addRoute(userId, name, distance,link,region, description, videolink) {
    try {
        const response = await fetch('https://localhost:7295/api/routes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                name: name,
                distance: distance,
                link: link,
                region: region,
                description: description,
                videolink: videolink
            })
        });

        if (!response.ok) {
            throw new Error('Failed to add route');
        }

        const newRoute = await response.json();
        console.log('Route added:', newRoute);
    } catch (error) {
        console.error('Error adding route:', error);
    }
}

async function updateRoute(routeId, userId, name,distance,link,region, description, videolink) {
    try {
        const response = await fetch(`https://localhost:7295/api/routes/${routeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                routeId: routeId, // Ensure this matches the backend's expected field name
                userId: userId, // Ensure this matches the backend's expected field name
                name: name,
                distance: distance,
                link: link,
                region: region,
                description: description,
                videolink: videolink
            })
        });

        if (!response.ok) {
            throw new Error('Failed to update route');
        }

        const updatedRoute = await response.json();
        console.log('Route updated:', updatedRoute);
    } catch (error) {
        console.error('Error updating route:', error);
    }
}

async function deleteRoute(routeId) {
    try {
        const response = await fetch(`https://localhost:7295/api/routes/${routeId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete route');
        }

        console.log('Route deleted');
    } catch (error) {
        console.error('Error deleting route:', error);
    }
}

async function loadRoutes() {
    // Implement API call to load all routes and display them in the routes list
}

async function addEvent(name, date, text, link) {
    try {
        const response = await fetch('https://localhost:7295/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                date: date.toISOString(), // Convert date to ISO string
                text: text,
                link: link
            })
        });

        if (!response.ok) {
            throw new Error('Failed to add event');
        }

        const newEvent = await response.json();
        console.log('Event added:', newEvent);
    } catch (error) {
        console.error('Error adding event:', error);
    }
}

async function updateEvent(eventId, name, date, text, link) {
    try {
        const response = await fetch(`https://localhost:7295/api/events/${eventId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                eventId: eventId, // Ensure this matches the backend's expected field name
                name: name,
                date: date.toISOString(), // Convert date to ISO string
                text: text,
                link: link
            })
        });

        if (!response.ok) {
            throw new Error('Failed to update event');
        }

        const updatedEvent = await response.json();
        console.log('Event updated:', updatedEvent);
    } catch (error) {
        console.error('Error updating event:', error);
    }
}

async function deleteEvent(eventId) {
    try {
        const response = await fetch(`https://localhost:7295/api/events/${eventId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete event');
        }

        console.log('Event deleted');
    } catch (error) {
        console.error('Error deleting event:', error);
    }
    
}

async function loadEvents() {
    // Implement API call to load all events and display them in the events list
}


async function addUser(name, email) {
    // Implement API call to add a new user
}

async function updateUser(id, name, email) {
    // Implement API call to update an existing user
}

async function deleteUser(id) {
    // Implement API call to delete a user
}

async function getUser(id) {
    // Implement API call to get a user by ID
}

async function loadUsers() {
    // Implement API call to load all users and display them in the users list
}