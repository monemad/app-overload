window.addEventListener("DOMContentLoaded", (event)=>{
    document.getElementById('search-btn').addEventListener('click', async e => {
        const searchBar = document.getElementById('search-bar');
        console.log(searchBar.value);
        const users = await fetch('http://localhost:8080/users');
        console.log(await users.json());
        searchBar.value = '';
    })
})
