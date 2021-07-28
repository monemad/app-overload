
window.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById('search-btn').addEventListener('click', async e => {
        e.preventDefault();
        const searchBar = document.getElementById('search-bar');
        if (!searchBar.value) return;
        const body = { searchTerm: `%${searchBar.value}%` }
        searchBar.value = '';
        console.log(body);
        const res = await fetch('http://localhost:8080/questions/search',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        
        const searchResult = await res.json();
        const results = searchResult.map(res => `<li class='search-result'><a href='/questions/${res.id}'>${res.title}</a></li>`);
        console.log(results);
        const content = document.getElementById('content');
        const resultsList = document.createElement('ul');
        resultsList.id = 'search-results-list';
        resultsList.innerHTML = results;
        content.appendChild(resultsList);
    })
})
