window.addEventListener("DOMContentLoaded", event => {
    if (window.location.href.startsWith("http://localhost:8080/questions/") && window.location.href.split('/').length === 5) {
        console.log('Trying to add an event listener to the Answer Delete link on the questions page here')
        const answerDeleteLinks = document.getElementsByClassName('answer-delete-link')
        console.log("answerDeleteLinks.length = ",  answerDeleteLinks.length)
        if (answerDeleteLinks.length) {
            Array.from(answerDeleteLinks).forEach(answerDeleteLink => {
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
            })
        }


        const answerEditLinks = document.getElementsByClassName('answer-edit-link')
        const answerDetailsTextAreas = document.getElementsByClassName('answer-details-editor')
        const answerDetailsLabel = document.getElementById('answer-details')
        const answerDoneEditingLinks = document.getElementsByClassName('answer-done-editing-link')

        if (Array.from(answerEditLinks).length) {
            Array.from(answerEditLinks).forEach((answerEditLink, i) => {

            answerEditLink.addEventListener('click', e => {
                e.preventDefault()
                const answerDiv = e.target.parentElement.parentElement;
                // console.log(answerDiv.childNodes)
                const textArea = answerDiv.childNodes[0]
                const answerDetails = answerDiv.childNodes[1]
                // console.log(answerDetails.childNodes)
                const answerLabel = answerDetails.childNodes[0]
                console.log(answerLabel)
                const answerEditLink = e.target
                const answerDeleteLink = answerDetails.childNodes[2]
                const answerDoneEditingLink = answerDetails.childNodes[3]
                // console.log(answerDoneEditingLink)

                textArea.value = answerLabel.data;
                textArea.style.visibility = 'visible'
                textArea.style.display = 'block'
                answerDoneEditingLink.style.visibility = 'visible'
                answerDoneEditingLink.style.display = 'block'
                answerLabel.data = ''
                answerEditLink.style.visibility = 'invisible'
                answerEditLink.style.display = 'none'
                answerDeleteLink.style.visibility = 'invisible'
                answerDeleteLink.style.display = 'none'


                answerDoneEditingLink.addEventListener('click', async event => {
                    event.preventDefault()
                    console.log('here')
                    const body = {
                        answer : textArea.value,
                    }

                    answerLabel.data = textArea.value
                    textArea.style.visibility = 'invisible'
                    textArea.style.display = 'none'
                    answerDoneEditingLink.style.visibility = 'invisible'
                    answerDoneEditingLink.style.display = 'none'
                    answerDetails.style.visibility = 'visible'
                    answerDetails.style.display = 'block'
                    answerEditLink.style.visibility = 'visible'
                    answerEditLink.style.display = 'block'
                    answerDeleteLink.style.visibility = 'visible'
                    answerDeleteLink.style.display = 'block'

                    console.log(event.target.href)

                    await fetch(event.target.href, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body)
                    })
                })
            })
        })}
    }
})