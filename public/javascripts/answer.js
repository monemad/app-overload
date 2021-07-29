window.addEventListener("DOMContentLoaded", event => {
    if (window.location.href.startsWith("http://localhost:8080/questions/") && window.location.href.split('/').length === 5) {
        console.log('Trying to add an event listener to the Answer Delete link on the questions page here')
        const answerDeleteLink = document.getElementById('answer-delete-link')

        if (answerDeleteLink !== null) {
            answerDeleteLink.addEventListener('click', async e => {
                e.preventDefault()
                const headerElement = e.target.parentElement
                const listElement = headerElement.parentElement
                const unorderedList = listElement.parentElement

                unorderedList.removeChild(listElement)
                const answerId = e.target.href.split('/')[4]
                console.log(answerId)

                await fetch(`http://localhost:8080/answers/${answerId}`, {
                    method: 'delete',
                })
            })
        }

    }
})