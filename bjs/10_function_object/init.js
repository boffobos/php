
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDate.day;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthDate.rusMonth();
    document.getElementById('birthYearOutput').innerText = initPerson.birthDate.year + ' г.р.';
    document.getElementById('occupationOutput').innerText = initPerson.occupation;
};

document.getElementById('generate').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDate.day;
    document.getElementById('birthMonthOutput').innerText = initPerson.birthDate.rusMonth();
    document.getElementById('birthYearOutput').innerText = initPerson.birthDate.year + ' г.р.';
    document.getElementById('occupationOutput').innerText = initPerson.occupation;
});

document.getElementById('reset').addEventListener('click', () => {
    
    document.getElementById('firstNameOutput').innerText = 'Имя:';
    document.getElementById('fatherNameOutput').innerText = 'Отчество:';
    document.getElementById('surnameOutput').innerText = 'Фамилия:';
    document.getElementById('genderOutput').innerText = 'Пол';
    document.getElementById('birthDayOutput').innerText = 'Дата рожения:';
    document.getElementById('birthMonthOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('occupationOutput').innerText = '';
});