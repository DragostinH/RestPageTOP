import createDiv from "./div";

export default function createForm() {
    const form = document.createElement('form');
    const nameAndEmailDiv = createDiv();
    nameAndEmailDiv.classList.add('name-and-email-container');
    form.name = 'contact-us-form';
    form.action = "";
    form.id = 'contact-us-form';



    // Name input;
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = "input-name";
    nameInput.placeholder = 'Name';
    const nameLabel = document.createElement('label');
    const nameTitle = document.createElement('h4');
    nameTitle.innerText = "Name:*";
    nameLabel.appendChild(nameTitle);
    nameLabel.appendChild(nameInput);
    // Email input;
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = "input-email";
    emailInput.placeholder = 'john@example.com';
    const emailLabel = document.createElement('label');
    const emailTitle = document.createElement('h4');
    emailTitle.innerText = "Email:*";
    emailLabel.appendChild(emailTitle);
    emailLabel.appendChild(emailInput);

    // Adding 2 input methods in 1 container
    nameAndEmailDiv.appendChild(nameLabel);
    nameAndEmailDiv.appendChild(emailLabel);


    // Tel number input;
    const telNumberInput = document.createElement('input');
    telNumberInput.type = 'tel';
    telNumberInput.id = 'input-tel';
    telNumberInput.placeholder = 'Telephone number';
    const telNumberLabel = document.createElement('label');
    const telNumberTitle = document.createElement('h4');
    telNumberTitle.innerText = "Tel.:"
    telNumberLabel.appendChild(telNumberTitle);
    telNumberLabel.appendChild(telNumberInput);

    // Subject input;
    const subjtectInput = document.createElement('input');
    subjtectInput.type = 'text';
    subjtectInput.id = 'input-subject';
    subjtectInput.placeholder = 'E.g. Passing positive feedback to specific waiter...'
    const subjectLabel = document.createElement('label');
    const subjectTitle = document.createElement('h4');
    subjectTitle.innerText = 'Subject:';
    subjectLabel.appendChild(subjectTitle);
    subjectLabel.appendChild(subjtectInput);


    // Your thoughts input;
    const textBoxDiv = createDiv();
    textBoxDiv.id = 'text-box-div';
    const textBox = document.createElement('textarea');
    textBox.name = 'message';
    textBox.id = 'input-message';
    textBox.placeholder = 'Message...';
    textBoxDiv.appendChild(textBox);
    

    // Submit button;
    const submitDiv = createDiv();
    submitDiv.id = 'submit-div';
    const submitInput = document.createElement('input');
    submitInput.type = 'submit';
    submitInput.value = 'Submit';
    submitInput.id = 'input-submit';
    submitDiv.appendChild(submitInput);

    // Append it all to the form
    form.appendChild(nameAndEmailDiv);
    form.appendChild(telNumberLabel);
    form.appendChild(subjectLabel);
    form.appendChild(textBoxDiv);
    form.appendChild(submitDiv);

    return form;
}