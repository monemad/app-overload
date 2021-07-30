window.addEventListener("DOMContentLoaded", event => {
    const addCommentButtons = document.getElementsByClassName('add-comment-button')
    Array.from(addCommentButtons).forEach(addCommentButton => {
        addCommentButton.addEventListener('click', e => {
            if(e.target.innerText !== 'Submit Comment'){
                e.preventDefault()
                const submitBtn = e.target
                const submitParent = e.target.parentElement
                const input = submitParent.childNodes[1]
                const textArea = input.childNodes[1]
                textArea.style.visibility = 'visible'
                textArea.style.display = 'block'
                submitBtn.innerText = 'Submit Comment'
            }

        })
    })
})