
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

