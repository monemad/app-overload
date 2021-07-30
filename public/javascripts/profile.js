let isEdit= true;
window.addEventListener('DOMContentLoaded', event => {
    document.getElementById('edit-user-details').addEventListener('click', async e => {

        if (isEdit){
            showEditForm();
        } else {
            const errorLis = Array.from(document.querySelectorAll('li.error'));
            if (errorLis.length){
                for (let i = 0; i < errorLis.length; i++){
                    errorLis[i].remove();
                }
            }
            
            const nameRegEx = /^[\w-'!]+ [\w-'!]+$/;
            
            let valid = true;
            const errors = [];
            
            const inputs = Array.from(document.getElementsByClassName('edit-input')).map(input => input.value);
            let name;
            console.log(inputs);

            if (!inputs[0] || !nameRegEx.test(inputs[0])){
                valid = false;
                errors.unshift('Enter first and last name')
            } else {
                name = inputs[0].split(' ');
            }
            if (name && name[0].length > 50){
                valid = false;
                errors.unshift('First name is too long')
            }
            if (name && name[1].length > 50){
                valid = false;
                errors.unshift('Last name is too long')
            }
            if (!inputs[1]) {
                valid = false;
                errors.unshift('Enter username')
            }
            if (inputs[1].length > 50) {
                valid = false;
                errors.unshift('Username is too long')
            }
            
            if (valid){
                console.log(name[0], name[1]);
                const updateValues = { firstName: name[0], lastName: name[1], username: inputs[1] };
                console.log('about to fetch');
                await fetch('/users/profile', {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updateValues)
                });
                console.log('done fetching');
                window.location.href = '/users/profile';
                const confirmButton = document.getElementById('confirm-user-details');
                confirmButton.innerText = 'Edit';
                confirmButton.id = 'edit-user-details';
                isEdit = true;
            } else {
                const detailsList = document.getElementById('user-details-list')
                for (let err of errors){
                    const errLi = document.createElement('li');
                    errLi.innerText = err;
                    errLi.className = 'error'

                    detailsList.insertBefore(errLi, detailsList.children[0]);
                }
            }
        }
    })
})

const showEditForm = () => {
    let userDetails = Array.from(document.querySelectorAll('#user-details-list > li'));
    const editButton = document.getElementById('edit-user-details');
    editButton.innerText = 'Confirm';
    editButton.id = 'confirm-user-details';
    const values = userDetails.map(ele => ele.innerText);
    console.log(values);
    
    userDetails[0].remove();
    userDetails[1].remove();

    const editDiv = document.createElement('div');
    editDiv.id = 'edit-div';

    const nameLabel = document.createElement('label');
    nameLabel.innerText = 'Name: '

    const nameInput = document.createElement('input');
    nameInput.className = 'edit-input';
    nameInput.value = values[0];
    nameInput.type = 'text';

    const usernameLabel = document.createElement('label');
    usernameLabel.innerText = 'Username: '

    const usernameInput = document.createElement('input');
    usernameInput.className = 'edit-input';
    usernameInput.value = document.getElementsByTagName('h1')[0].innerText.slice(0, -10);
    usernameInput.type = 'text';        

    editDiv.appendChild(nameLabel);
    editDiv.appendChild(nameInput);
    editDiv.appendChild(usernameLabel);
    editDiv.appendChild(usernameInput);

    const userDetailsList = document.getElementById('user-details-list');
    userDetailsList.insertBefore(editDiv, userDetails[2]);

    const cancel = document.createElement('a');
    cancel.innerText = 'Cancel';
    cancel.id = 'cancel-edit';
    cancel.href = '/users/profile';
    cancel.classList.add('text-button');
    document.getElementById('edit-text-buttons').insertBefore(cancel, editButton);
    document.getElementById('edit-text-buttons').classList.add('editing');
    
    isEdit = false;
}
