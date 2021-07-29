
window.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById('search-bar').addEventListener('input', async e => {
        e.preventDefault();
        const searchBar = document.getElementById('search-bar');
        if (!searchBar.value) {
            const resultsList = document.getElementById('results-list');
            if (resultsList) resultsList.innerHTML = '';
            return;
        };
        const body = { searchTerm: `%${searchBar.value}%` }
        // searchBar.value = '';
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

        // const content = document.getElementById('content');
        // const resultsList = document.createElement('ul');
        // resultsList.id = 'search-results-list';
        // resultsList.innerHTML = results;
        // content.appendChild(resultsList);
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
