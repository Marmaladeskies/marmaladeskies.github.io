document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Script loaded");

    // Function to filter items based on type
    function filterByType(type) {
        const items = document.querySelectorAll('.item');
        console.log(`Filtering for type: ${type}`);
        
        items.forEach(item => {
            const itemType = item.dataset.type || 'unknown'; // Use data attribute for type
            if (type === 'all' || itemType === type) {
                item.style.display = 'inline-block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Attach event listeners to buttons
    document.getElementById('showAll').addEventListener('click', () => {
        console.log('Show All clicked');
        filterByType('all');
    });
    document.getElementById('showMovies').addEventListener('click', () => {
        console.log('Show Movies clicked');
        filterByType('movie');
    });
    document.getElementById('showTelevision').addEventListener('click', () => {
        console.log('Show TV Shows clicked');
        filterByType('tvshow');
    });
    document.getElementById('showMusic').addEventListener('click', () => {
        console.log('Show Music clicked');
        filterByType('music');
    });

    // Initially show all items
    filterByType('all');
});