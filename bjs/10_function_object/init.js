
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('fatherNameOutput').innerText = initPerson.fatherName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    console.log(initPerson.gender);
};

