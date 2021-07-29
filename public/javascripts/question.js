window.addEventListener("DOMContentLoaded", event => {
    console.log('Trying to add an event listener to the Question Edit link on the questions page here')
    const questionEditLink = document.getElementById('question-edit-link')
    const questionTitleTextArea = document.getElementById('question-title-editor')
    const questionDetailsTextArea = document.getElementById('question-details-editor')
    const questionTitleLabel = document.getElementById('question-title')
    const questionDetailsLabel = document.getElementById('question-details')

    if (questionEditLink !== null) {
        questionEditLink.addEventListener('click', async e => {
            e.preventDefault()
            questionDetailsTextArea.value = questionDetailsLabel.innerText;
            questionTitleTextArea.value = questionTitleLabel.innerText;
            questionDetailsTextArea.visibility = 'visible';
            questionDetailsTextArea.display = 'block';
            questionTitleTextArea.visibility = 'visible';
            questionTitleTextArea.display = 'block';

            // await fetch(`http://localhost:8080/answers/${answerId}`, {
            //     method: 'delete',
            // })
        })
    }
})