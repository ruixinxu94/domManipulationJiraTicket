document.addEventListener('DOMContentLoaded', function () {
    const defaultTickets = [
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

    // Retrieve existing tickets from localStorage or initialize with defaultTickets if none exist
    const tickets = JSON.parse(localStorage.getItem('tickets')) || defaultTickets;

    // Function to render tickets on the page
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

    // Function to add a new ticket to the dashboard
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
        localStorage.removeItem('newTicket'); // Clear the new ticket data after adding
    }

    // Initial rendering of tickets
    renderTickets(tickets);

    // Theme toggle button logic
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');

    // Function to update the button text based on the theme
    function updateButtonText() {
        toggleThemeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    }

    toggleThemeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        updateButtonText();
        localStorage.setItem('ruixinxu-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Check for saved theme preference in localStorage and apply it
    if(localStorage.getItem('ruixinxu-theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Update the button text based on the current theme
    updateButtonText();
});
