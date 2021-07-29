window.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById('search-btn').addEventListener('click', async e => {
        e.preventDefault();
        const searchBar = document.getElementById('search-bar');
        const body = { searchTerm: `%${searchBar.value}%` }
        searchBar.value = '';
        console.log(body);
        const users = await fetch('http://localhost:8080/questions/search',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        console.log(await users.json());
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
