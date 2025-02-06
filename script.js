const form = document.getElementById('userForm');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://script.google.com/macros/s/AKfycbwP_VHg_ukE5rcr847kgXFy3THeD98SmnLKMqSLOVH9dL8isBRj4qjfSG9y2wmH6wA0-w/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => {
        alert('Form submitted successfully!');
        form.reset();
    }).catch(error => {
        alert('There was an error submitting the form.');
        console.error(error);
    });
});
