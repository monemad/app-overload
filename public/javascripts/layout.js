
window.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById('search-form').addEventListener('submit', e => {
        e.preventDefault();
    })

    document.getElementById('search-bar').addEventListener('input', insertSearchResults)

    document.getElementById('search-bar').addEventListener('click', insertSearchResults)

    document.getElementsByTagName('html')[0].addEventListener('click', async e => {
        const resultsDiv = document.getElementById('search-results-div');
        document.getElementById('search-bar').classList.remove('expanded');

        if (resultsDiv) resultsDiv.remove();
    })



    document.querySelector('.homebtn').addEventListener('click', e => {
    e.preventDefault()
    window.location.href = '/'
    })

    document.querySelector('.questionbtn').addEventListener('click', e => {
        e.preventDefault()
        window.location.href = '/questions'
        })

    document.querySelector('.userbtn').addEventListener('click', e => {
            e.preventDefault()
            window.location.href = '/users'
            })

})

const insertSearchResults = async e => {
    e.stopPropagation();
    e.preventDefault();
    const searchBar = document.getElementById('search-bar');
    const body = { searchTerm: `%${searchBar.value}%` }

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
    const results = searchResult.map(res => `<a href='/questions/${res.id}'><li class='search-result'>${res.title}</li></a>`).join('');
    console.log(results);

    if (!searchBar.value || !results) {
        const resultsDiv = document.getElementById('search-results-div');
        if (resultsDiv) resultsDiv.remove();
        searchBar.classList.remove('expanded');
        return;
    };

    const searchDiv = document.getElementById('search-div');

    let resultsDiv = document.getElementById('search-results-div');
    let resultsList = document.getElementById('results-list');
    if(!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'search-results-div';
        resultsList = document.createElement('ul');
        resultsList.id = 'results-list';
        searchDiv.appendChild(resultsDiv);
        resultsDiv.appendChild(resultsList);
    }
    

    resultsList.innerHTML = '';
    resultsList.innerHTML = results;
    searchBar.classList.add('expanded');
}
