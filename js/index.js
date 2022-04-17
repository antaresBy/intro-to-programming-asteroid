/* Footer */
const today     =   new Date();
const thisYear  =   today.getFullYear();
const footer    =   document.querySelector("footer");
const copyright =   document.createElement("p");

copyright.textContent = `Lena Zhdanko ${thisYear}`;
footer.appendChild(copyright);

/* Skills*/
const skills = ['HTML', 'CSS', 'JavaScript'];
const skillsSection = document.getElementById ('skills');
const skillsList = skillsSection.querySelector('ul');

for (let txt of skills) {
    skill = document.createElement('li');
    skill.textContent = txt;
    skillsList.appendChild(skill);
}

/* Contact form */

// Hide the #messages section by default
const messageSection = document.getElementById('messages');
messageSection.style.display = 'none';


const messageForm = document.querySelector("form[name=leave_message]")

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // check form values
    console.log ('Name: ' + name + '; Email: ' + email + '; Message: ' + message);
    // return #messages section
    messageSection.style.display = 'block';

    //store message
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    
    newMessage.innerHTML ='<a href="mailto:' + email + '">' + name + '</a> wrote: <span>' + message + '</span> ';
    messageList.append(newMessage);

    // edit message
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit message'
    editButton.type = 'button';
    editButton.addEventListener('click', () => {
        const editedLi = editButton.parentNode;

        if (editButton.innerText == 'Edit message') {
            const editedSpan = editedLi.querySelector('span');
            const editedMessage = editedSpan.textContent;
            const newInput = document.createElement('input');

            newInput.type = "text";
            newInput.value = editedMessage;

            editedLi.removeChild(editedSpan);
            editedLi.insertBefore(newInput, editButton);
            editButton.innerText = "Save message";
        }
        else {
            const editedInput = editedLi.querySelector('input');
            const editedMessage = editedInput.value;
            const newSpan = document.createElement('span');

            newSpan.innerText = editedMessage;

            editedLi.removeChild(editedInput);
            editedLi.insertBefore(newSpan, editButton);
            editButton.innerText = "Edit message";
        }

    })
    newMessage.append(editButton);

    //remove message
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove message'
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        removeButton.parentNode.remove();
        if (messageList.childElementCount == 0) {
            // Hide the #messages section when the list is empty
            messageSection.style.display = 'none';
        }
    })
    newMessage.append(removeButton);

    //clear the form
    //e.target.reset();
}
)

