document.getElementById('new-ticket').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const ticketData = {};
    formData.forEach((value, key) => {
        ticketData[key] = value;
    });
    ticketData.id = Math.floor(Math.random() * 2000000000000);

    let existingTickets = JSON.parse(localStorage.getItem('tickets')) || [
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
            title: 'Fix UI',
            status: 'In Progress',
            priority: 'High',
            assignee: 'Anita',
            points: 2
        },
        {
            id: 3,
            title: 'On call',
            status: 'In Progress',
            priority: 'Low',
            assignee: 'Peter',
            points: 2
        },
    ];

    existingTickets.push(ticketData);

    localStorage.setItem('tickets', JSON.stringify(existingTickets));

    window.alert("Ticket created successfully!");
    window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('ruixinxu-theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
})
