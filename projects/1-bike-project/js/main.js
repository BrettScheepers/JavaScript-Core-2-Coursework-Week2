// Jumbotron Buttons
const blueBtn = document.getElementById('blueBtn');
const orangeBtn = document.getElementById('orangeBtn');
const greenBtn = document.getElementById('greenBtn');

const jumbotron = document.querySelector('.jumbotron');
const donate = document.getElementById('jumbotron-donate');
const volunteer = document.getElementById('jumbotron-volunteer');

blueBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = `#588fbd`;
    donate.style.backgroundColor = `#ffa500`;
    volunteer.style.backgroundColor = `black`;
    volunteer.style.color = `white`;
})

orangeBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = `#f0ad4e`;
    donate.style.backgroundColor = `#5751fd`;
    volunteer.style.backgroundColor = `#31b0d5`;
    volunteer.style.color = `white`;
})

greenBtn.addEventListener('click', () => {
    jumbotron.style.backgroundColor = `#87ca8a`;
    donate.style.backgroundColor = `black`;
    volunteer.style.backgroundColor = `#8c9c08`;
    volunteer.style.color = `white`;
})

// Submit Buttons
const form = document.getElementById('form');
const email = document.getElementById('exampleInputEmail1');
const name = document.getElementById('example-text-input');
const description = document.getElementById('exampleTextarea');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (name.value === '') name.style.backgroundColor = 'red';
    if (description.value === '') description.style.backgroundColor = 'red';
    if (email.value === '' || !email.value.includes('@')) email.style.backgroundColor = 'red';
    
    if (!email.value === '' && email.value.includes('@') && !name.value === '' && !description.value === '') {
        window.alert('Thank you for filling out our form!');
        name.value = '';
        email.value = '';
        description.value = '';
    };
})