let isEdit= true;
window.addEventListener('DOMContentLoaded', event => {
    document.getElementById('edit-user-details').addEventListener('click', e => {
        let userDetails = Array.from(document.querySelectorAll('#user-details-list > li'));
        const editButton = document.getElementById('edit-user-details');
        if (isEdit){
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
            nameInput.value = values[0];
            nameInput.type = 'text';

            const usernameLabel = document.createElement('label');
            usernameLabel.innerText = 'Username: '

            const usernameInput = document.createElement('input');
            usernameInput.value = document.getElementsByTagName('h1')[0].innerText.slice(0, -10);
            usernameInput.type = 'text';        

            const emailLabel = document.createElement('label');
            emailLabel.innerText = 'Email: '

            const emailInput = document.createElement('input');
            emailInput.value = values[1];
            emailInput.type = 'email';

            editDiv.appendChild(nameLabel);
            editDiv.appendChild(nameInput);
            editDiv.appendChild(usernameLabel);
            editDiv.appendChild(usernameInput);
            editDiv.appendChild(emailLabel);
            editDiv.appendChild(emailInput);

            const userDetailsList = document.getElementById('user-details-list');
            userDetailsList.insertBefore(editDiv, userDetails[2]);

            const cancel = document.createElement('span');
            cancel.innerText = 'Cancel';
            cancel.id = 'cancel-edit';
            cancel.classList.add('text-button');
            document.getElementById('edit-text-buttons').insertBefore(cancel, editButton);
            document.getElementById('edit-text-buttons').classList.add('editing');
            
            isEdit = false;
        } else {
            userDetails[userDetails.length-1].innerText = 'Edit';
            userDetails[userDetails.length-1].id = 'edit-user-details';
            emailRegEx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            
            
            isEdit = true;
        }
    })
})
