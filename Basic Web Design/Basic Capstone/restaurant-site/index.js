const form = document.getElementById('applicationForm');

const ageInput = document.getElementById('age');
const phoneInput = document.getElementById('phone');
const moreInfoInput = document.getElementById('moreInfo');

const ageError = document.getElementById('ageError');
const phoneError = document.getElementById('phoneError');
const moreInfoError = document.getElementById('moreInfoError');
const charCounter = document.getElementById('charCounter');

moreInfoInput.addEventListener('input', () => {
    charCounter.textContent = `${30 - moreInfoInput.value.length} characters remaining`;

});
moreInfoInput.addEventListener("keydown", function (e) {
    const lines = this.value.split("\n");
    if (e.key === "Enter" && lines.length >= 4) {
        e.preventDefault(); // Stop adding new lines
    }
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const age = Number(ageInput.value);
    if (isNaN(age) || age < 21 || age > 99) {
        ageError.textContent = 'Must be an Adult between 21 and 99.';
        isValid = false;
    } else {
        ageError.textContent = '';
    }

    const digits = phoneInput.value.replace(/\D/g, '');
    if (digits.length !== 10) {
        phoneError.textContent = 'format xxx-yyy-zzzz. 10 Digits long';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }


    if (moreInfoInput.value.length > 30) {
        moreInfoError.textContent = 'Maximum of 30 characters.';
        isValid = false;
    } else {
        moreInfoError.textContent = '';
    }

    if (isValid) {
        const formData = {
            age: age,
            phone: phoneInput.value.trim(),
            moreInfo: moreInfoInput,
        };
        console.log('Form Submission:', formData);
        alert('FORM IS SUBMITTED!!!!!');
        form.reset();
        charCounter.textContent = '30 characters remaining';
    }

});

