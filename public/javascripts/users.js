window.addEventListener('DOMContentLoaded', event => {
    document.getElementById('user-layout').addEventListener('click', e => {
        if(!e.target.dataset.id) return;
        window.location.href = `/users/${e.target.dataset.id}`
    })
})
