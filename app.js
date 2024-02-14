document.addEventListener('DOMContentLoaded', function () {
    // Retrieve existing tickets from localStorage or initialize an empty array if none exist
    const newlyExistedtickets = [
        {
            id: 1,
            title: 'Integrate third-party API',
            status: 'In Progress',
            priority: 'medium',
            assignee: 'David',
            points: 2
        },
        {
            id: 2,
            title: 'Integrate third-party API',
            status: 'In Progress',
            priority: 'High',
            assignee: 'Anita',
            points: 2
        },
        {
            id: 3,
            title: 'Integrate third-party API',
            status: 'In Progress',
            priority: 'Low',
            assignee: 'Peter',
            points: 2
        },
    ];
    const tickets = JSON.parse(localStorage.getItem('tickets')) || newlyExistedtickets;
    
    function renderTickets(tickets) {
        const tableBody = document.getElementById('ticket-table').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ""; // Clear existing tickets

        tickets.forEach(ticket => {
            let row = tableBody.insertRow();
            row.innerHTML = `
                <td>${ticket.id}</td>
                <td>${ticket.title}</td>
                <td>${ticket.status}</td>
                <td class="${ticket.priority.toLowerCase()}">${ticket.priority}</td>
                <td>${ticket.assignee}</td>
                <td>${ticket.points}</td>
            `;
        });
    }

    // This function adds a new ticket to the dashboard
    function addTicket(newTicket) {
        tickets.push(newTicket);
        localStorage.setItem('tickets', JSON.stringify(tickets));
        renderTickets(tickets);
    }

    // Check if there's any new ticket data in localStorage when the page loads
    const newTicketData = localStorage.getItem('newTicket');
    if (newTicketData) {
        const newTicket = JSON.parse(newTicketData);
        addTicket(newTicket);
        localStorage.removeItem('newTicket'); // Clear the new ticket data
    }

    // Initial rendering of tickets
    renderTickets(tickets);
});
