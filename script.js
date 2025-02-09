// const firstName = document.querySelector('#fname');
// console.log(firstName);
// const lastName = document.querySelector('#lname');
const students = [];
// const div = document.getElementsByTagName('div'),
//   p = document.createElement('p');

function subButton() {
  const nameInput = document.getElementById('fname').value;
  // console.log(nameInput);
  const lastNameInput = document.getElementById('lname').value;
  // console.log(lastNameInput);
  const emailInput = document.getElementById('email').value;
  // console.log(emailInput);
  const numberInput = document.getElementById('number').value;
  // console.log(numberInput);
  const passwordInput = document.getElementById('password').value;
  // console.log(passwordInput);
  const cPasswordInput = document.getElementById('confirm').value;
  // console.log(cPasswordInput);
  students.push({
    name: nameInput,
    names: lastNameInput,
    email: emailInput,
    number: numberInput,
    password: passwordInput,
    cofirmPassword: cPasswordInput,
  });
  console.log(students[students.length - 1]);

  // const row = `
  //      <tr>
  //      <td>${students[students.length - 1].name}</td>
  //      <td>${students[students.length - 1].names}</td>
  //      <td>${students[students.length - 1].email}</td>
  //      <td>${students[students.length - 1].number}</td>
  //      <td>${students[students.length - 1].password}</td>
  //      <td>${students[students.length - 1].cofirmPassword}</td>

  //      </tr>
  //     `;
  // p.innerHTML += row;
}

const studentcontainer = document.getElementById('student-list');
for (let i = 0; i < students.length; i++) {
  const student = students[i];

  console.log(student.name);

  const studentList = document.createElement('div');
  productCard.classList.add('studentsL');

  studentList.innerHTML = `
  <h1>${students[students.length - 1].name}</h1>
  <h1>${students[students.length - 1].names}</h1>
  <h1>${students[students.length - 1].email}</h1>
  <h1>${students[students.length - 1].number}</h1>
  <h1>${students[students.length - 1].password}</h1>
  <h1>${students[students.length - 1].cofirmPassword}</h1>
`;
  studentcontainer.appendChild(studentList);
  console.log(studentList);
}
