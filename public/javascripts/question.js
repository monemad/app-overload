window.addEventListener("DOMContentLoaded", event => {
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

                await fetch(`/questions/${questionId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
            })


        })
    }

    const commentEditLinks = document.getElementsByClassName('comment-editor')
    if(commentEditLinks.length){
        Array.from(commentEditLinks).forEach(commentEditLink => {
            commentEditLink.addEventListener('click', e => {
                e.preventDefault()

                const editLink = e.target
                const deleteLink = e.target.parentElement.childNodes[2]
                const commentDoneEditingLink = e.target.parentElement.childNodes[3]
                const comment = e.target.parentElement.parentElement;
                const commentEditor = comment.childNodes[0]
                commentEditor.style.visibility = 'visible'
                commentEditor.style.display = 'block'
                commentEditor.value = e.target.parentElement.childNodes[0].data.split('---')[0]
                e.target.parentElement.childNodes[0].data = ''
                const commentLabel = e.target.parentElement.childNodes[0]
                // commentLabel.style.visibility = 'invisible'
                // commentLabel.style.display = 'none'
                deleteLink.style.visibility = 'invisible'
                deleteLink.style.display = 'none'
                commentDoneEditingLink.style.visibility = 'visible'
                commentDoneEditingLink.style.display = 'block'
                editLink.style.visibility = 'invisible'
                editLink.style.display = 'none'

                commentDoneEditingLink.addEventListener('click', async e=> {
                    e.preventDefault()
                    commentEditor.style.visibility = 'invisible'
                    commentEditor.style.display = 'none'
                    deleteLink.style.visibility = 'visible'
                    deleteLink.style.display = 'block'
                    commentDoneEditingLink.style.visibility = 'invisible'
                    commentDoneEditingLink.style.display = 'none'
                    editLink.style.visibility = 'visible'
                    editLink.style.display = 'block'
                    commentLabel.data = commentEditor.value;
                    commentEditor.value = ''

                    const body = {
                        comment: commentLabel.data,
                    }

                    await fetch(e.target.href, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body)
                    })
                })
            })
        })
    }

    const commentDeleteLinks = document.getElementsByClassName('comment-delete')
    if (commentDeleteLinks.length) {
        Array.from(commentDeleteLinks).forEach(commentDeleteLink => {
            commentDeleteLink.addEventListener('click', async e => {
                e.preventDefault()
                const comment = e.target.parentElement;
                const commentList = comment.parentElement;
                commentList.removeChild(comment);

                await fetch(`/comments/${e.target.href.split('/')[4]}/${e.target.href.split('/')[5]}`, {
                    method: 'DELETE',
                })
            })
        })
    }
})