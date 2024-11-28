async function fetchRoutes() {
    try {
        console.log('Fetching routes...');
        const response = await fetch('https://localhost:7295/api/routes');
        const routes = await response.json();
        console.log('Routes fetched:', routes);
        localStorage.setItem('routes', JSON.stringify(routes));
    } catch (error) {
        console.error('Failed to fetch routes:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await fetchRoutes(); // Fetch routes from the server and store in localStorage

    let routesContainer = document.querySelector('.routes');

    if (routesContainer === null) {
        console.error('No element with class .routes found');
        return;
    }

    const storedRoutes = localStorage.getItem('routes');
    if (!storedRoutes) {
        console.error('No routes found in localStorage');
        return;
    }

    const routes = JSON.parse(storedRoutes);
    console.log('Routes from localStorage:', routes);

     // Function to scroll to the route element if the URL contains a hash
     function scrollToRoute() {
        const routeId = window.location.hash; // Gets the URL fragment including the '#'
        if (routeId) {
            const routeElement = document.querySelector(routeId);
            if (routeElement) {
                routeElement.scrollIntoView(); // Scrolls the page to the route element
            }
        }
    }

    
    routes.reverse().forEach(route => {
        let routeElement = document.createElement('div');
        routeElement.id = `route-${route.routeId}`; // Set the ID for the route element
        routeElement.style.padding = '10px';
        routeElement.style.margin = '10px';
        routeElement.style.borderRadius = '10px';
        routeElement.style.backgroundColor = 'rgba(206, 212, 228, 0.3)';
        routeElement.style.color = 'rgb(94, 60, 36)';
        routeElement.style.fontSize = '18px';

         // Optionally, create a link that scrolls to this route when clicked
         let scrollToRouteLink = document.createElement('a');
         scrollToRouteLink.href = `#route-${route.routeId}`;
         routeElement.appendChild(scrollToRouteLink);

        // Display route details
        let routeName = document.createElement('h4');
        routeName.textContent = `Leið: ${route.name}`;
        routeElement.appendChild(routeName);

        let routeDistance = document.createElement('p');
        routeDistance.textContent = `Vegalengd: ${route.distance}`;
        routeElement.appendChild(routeDistance);

        let routeRegion = document.createElement('p');
        routeRegion.textContent = `Svæði: ${route.region}`;
        routeElement.appendChild(routeRegion);

        let routeDescription = document.createElement('p');
        routeDescription.textContent = `Leiðarlýsing: ${route.description}`;
        routeElement.appendChild(routeDescription);

       // Use the link defined in the route data
        let routeLink = document.createElement('a');
        routeLink.href = route.link;
        routeLink.target = '_blank';
        routeLink.textContent = 'Skoða leið';
        routeElement.appendChild(routeLink);
        routeElement.appendChild(document.createElement('br'));
        routeElement.appendChild(document.createElement('br'));

        // Use the link defined in the route data
        if (route.videoLink) {
            let routeVideoLink = document.createElement('a');
            routeVideoLink.href = route.videoLink;
            routeVideoLink.target = '_blank';
            routeVideoLink.textContent = 'Horfa á myndband';
            routeElement.appendChild(routeVideoLink);
        }

        routesContainer.appendChild(routeElement);
    });

    // Call the function to scroll to the route element on page load
    scrollToRoute();

    // Listen for hash changes and scroll to the route element
    window.addEventListener('hashchange', scrollToRoute);
});