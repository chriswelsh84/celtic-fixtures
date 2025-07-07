const fixtures = [
    { date: "2025-07-04", opponent: "Queen's Park", competition: "Friendly", venue: "Away", time: "19:45", tv: "Celtic TV" },
    { date: "2025-07-08", opponent: "Cork City", competition: "Friendly", venue: "Away", time: "18:00", tv: "Celtic TV" },
    { date: "2025-08-02", opponent: "St Mirren", competition: "Premiership", venue: "Home", time: "16:30", tv: "Sky Sports" },
    { date: "2025-08-31", opponent: "Rangers", competition: "Premiership", venue: "Away", time: "12:30", tv: "Sky Sports" },
    { date: "2025-09-TBC", opponent: "RB Leipzig", competition: "Champions League", venue: "Away", time: "TBC", tv: "TNT Sports" },
    { date: "2025-10-TBC", opponent: "Borussia Dortmund", competition: "Champions League", venue: "Home", time: "TBC", tv: "TNT Sports" },
    { date: "2025-12-27", opponent: "Livingston", competition: "Premiership", venue: "Away", time: "15:00", tv: "TBC" },
    { date: "2026-01-03", opponent: "Rangers", competition: "Premiership", venue: "Home", time: "12:30", tv: "Sky Sports" },
    { date: "2026-02-28", opponent: "Rangers", competition: "Premiership", venue: "Away", time: "TBC", tv: "Sky Sports" },
    { date: "2026-04-11", opponent: "St Mirren", competition: "Premiership", venue: "Away", time: "TBC", tv: "TBC" }
];

function populateTable(fixtures) {
    console.log("Populating table with:", fixtures); // For debugging
    const tableBody = document.getElementById('fixture-body');
    tableBody.innerHTML = '';
    fixtures.forEach(fixture => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fixture.date}</td>
            <td>${fixture.opponent}</td>
            <td>${fixture.competition}</td>
            <td>${fixture.venue}</td>
            <td>${fixture.time}</td>
            <td>${fixture.tv}</td>
        `;
        tableBody.appendChild(row);
    });
}

function filterFixtures() {
    const filter = document.getElementById('competition-filter').value;
    if (filter === 'all') {
        populateTable(fixtures);
    } else {
        const filteredFixtures = fixtures.filter(fixture => fixture.competition === filter);
        populateTable(filteredFixtures);
    }
    if (window.addCompetitionIcons) window.addCompetitionIcons(); // Ensure icons are added after filtering
}

populateTable(fixtures);
document.getElementById('competition-filter').addEventListener('change', filterFixtures);