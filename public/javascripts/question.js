window.addEventListener("DOMContentLoaded", event => {
    console.log('Trying to add an event listener to the Question Edit link on the questions page here')
    const questionEditLink = document.getElementById('question-edit-link')
    const questionDeleteLink = document.getElementById('question-delete-link')
    const questionTitleTextArea = document.getElementById('question-title-editor')
    const questionDetailsTextArea = document.getElementById('question-details-editor')
    const questionTitleLabel = document.getElementById('question-title')
    const questionDetailsLabel = document.getElementById('question-details')
    const questionDoneEditingLink = document.getElementById('question-done-editing-link')
    const questionId = window.location.href.split('/')[4]

    if (questionEditLink !== null) {
        questionEditLink.addEventListener('click', e => {
            e.preventDefault()
            console.log('here')
            questionDetailsTextArea.value = questionDetailsLabel.innerText;
            questionTitleTextArea.value = questionTitleLabel.innerText;
            questionDetailsTextArea.style.visibility = 'visible';
            questionDetailsTextArea.style.display = 'block';
            questionTitleTextArea.style.visibility = 'visible';
            questionTitleTextArea.style.display = 'block';

            questionTitleLabel.style.visibility = 'invisible';
            questionTitleLabel.style.display = 'none'
            questionDetailsLabel.style.visibility = 'invisible'
            questionDetailsLabel.style.display = 'none'

            questionDoneEditingLink.style.visibility = 'visible'
            questionDoneEditingLink.style.display = 'block'
            questionEditLink.style.visibility = 'invisible'
            questionEditLink.style.display = 'none'
            questionDeleteLink.style.visibility = 'invisible'
            questionDeleteLink.style.display = 'none'

            questionDoneEditingLink.addEventListener('click', async event => {
                event.preventDefault()
                console.log('here')
                const body = {
                    title: questionTitleTextArea.value,
                    details: questionDetailsTextArea.value
                }

                questionDetailsLabel.innerText = questionDetailsTextArea.value;
                questionTitleLabel.innerText = questionTitleTextArea.value;

                questionDetailsTextArea.style.visibility = 'invisible';
                questionDetailsTextArea.style.display = 'none';
                questionTitleTextArea.style.visibility = 'invisible';
                questionTitleTextArea.style.display = 'none';

                questionTitleLabel.style.visibility = 'visible';
                questionTitleLabel.style.display = 'block'
                questionDetailsLabel.style.visibility = 'visible'
                questionDetailsLabel.style.display = 'block'

                questionDoneEditingLink.style.visibility = 'invisible'
                questionDoneEditingLink.style.display = 'none'
                questionEditLink.style.visibility = 'visible'
                questionEditLink.style.display = 'block'
                questionDeleteLink.style.visibility = 'visible'
                questionDeleteLink.style.display = 'block'

                await fetch(`http://localhost:8080/questions/${questionId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
            })


        })
    }
})