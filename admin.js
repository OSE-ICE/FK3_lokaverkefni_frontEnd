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
        const routeVideoLink = document.getElementById('route-videolink').value || null;

        if (routeId) {
            await updateRoute(routeId, userId, routeName,routeDistance,routeLink,routeRegion, routeDescription, routeVideoLink);
        } else {
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
            document.getElementById('route-videolink').value = route.videolink || '';
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
        const eventDate = parseDate(eventDateStr); 
        const eventText = document.getElementById('event-text').value;
        const eventLink = document.getElementById('event-link').value;

        if (eventId) {
            await updateEvent(eventId, eventName, eventDate.toISOString().split('T')[0], eventText, eventLink);
        } else {
            await addEvent(eventName, eventDate.toISOString().split('T')[0], eventText, eventLink);
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
        return new Date(year, month - 1, day);
    }
    
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    eventsList.addEventListener('click', async (e) => {
        if (e.target.classList.contains('edit')) {
            const eventId = e.target.dataset.id;
            const event = await getEvent(eventId);
            document.getElementById('event-id').value = event.id;
            document.getElementById('event-name').value = event.name;
            document.getElementById('event-date').value = formatDate(new Date(event.date));
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
    const deleteUserButton = document.getElementById('delete-user-button');

    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userId = document.getElementById('user-id').value;
        const userFirstName = document.getElementById('user-firstname').value;
        const userLastName = document.getElementById('user-lastname').value;
        const userEmail = document.getElementById('user-email').value;
        const userSSID = document.getElementById('SSID').value;

        if (userId) {
            await updateUser(userId, userFirstName, userLastName, userEmail, userSSID);
        } else {
            await addUser(userFirstName, userLastName, userEmail, userSSID);
        }

        loadUsers();
        userForm.reset();
    });

    deleteUserButton.addEventListener('click', async () => {
        const userId = document.getElementById('user-id').value;
        if (userId) {
            await deleteUser(userId);
            loadUsers();
            userForm.reset();
        } else {
            alert('No user selected to delete');
        }
    });

    usersList.addEventListener('click', async (e) => {
        if (e.target.classList.contains('edit')) {
            const userId = e.target.dataset.id;
            const user = await getUser(userId);
            document.getElementById('user-id').value = user.userId;
            document.getElementById('user-firstname').value = user.firstName;
            document.getElementById('user-lastname').value = user.lastName;
            document.getElementById('user-email').value = user.email;
            document.getElementById('SSID').value = user.ssid;
        } else if (e.target.classList.contains('delete')) {
            const userId = e.target.dataset.id;
            await deleteUser(userId);
            loadUsers();
        }
    });


    loadRoutes();
    loadEvents();
    loadUsers();
});


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
                routeId: routeId, 
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
    try {
        const response = await fetch('https://localhost:7295/api/routes');

        if (!response.ok) {
            throw new Error('Failed to load routes');
        }

        const routes = await response.json();
        const routesList = document.getElementById('routes-list');
        routesList.innerHTML = ''; 

        routes.forEach(route => {
            const li = document.createElement('li');
            li.textContent = `ID: ${route.routeId} - ${route.name}`;
            li.dataset.id = route.id;
            routesList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading routes:', error);
    }
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
                date: date,
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
                eventId: eventId, 
                name: name,
                date: date, 
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
    try {
        const response = await fetch('https://localhost:7295/api/events');

        if (!response.ok) {
            throw new Error('Failed to load events');
        }

        const events = await response.json();
        const eventsList = document.getElementById('events-list');
        eventsList.innerHTML = ''; 

        events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = `ID: ${event.eventId} - ${event.name}`;
            li.dataset.id = event.id;
            eventsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading events:', error);
    }
}


async function loadUsers() {
    try {
        const response = await fetch('https://localhost:7295/api/users');

        if (!response.ok) {
            throw new Error('Failed to load users');
        }

        const users = await response.json();
        const usersList = document.getElementById('users-list');
        usersList.innerHTML = ''; 

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `ID: ${user.userId} - ${user.firstName} ${user.lastName}`;
            li.dataset.id = user.id;
            usersList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading users:', error);
    }
}

async function addUser(firstName, lastName, email, ssid) {
    try {
        const response = await fetch('https://localhost:7295/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                ssid: ssid
            })
        });

        if (!response.ok) {
            throw new Error('Failed to add user');
        }

        const newUser = await response.json();
        console.log('User added:', newUser);
    } catch (error) {
        console.error('Error adding user:', error);
    }
}

async function updateUser(userId, firstName, lastName, email, ssid) {
    try {
        const response = await fetch(`https://localhost:7295/api/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: userId,
                firstName: firstName,
                lastName: lastName,
                email: email,
                ssid: ssid
            })
        });

        if (!response.ok) {
            throw new Error('Failed to update user');
        }

        const updatedUser = await response.json();
        console.log('User updated:', updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
    }
}

async function deleteUser(userId) {
    try {
        const response = await fetch(`https://localhost:7295/api/users/${userId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete user');
        }

        console.log('User deleted');
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}

async function getUser(userId) {
    try {
        const response = await fetch(`https://localhost:7295/api/users/${userId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}