const form = document.getElementById('registrationForm');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const course = document.getElementById('course').value;

  const studentData = {
    name: name,
    email: email,
    phone: phone,
    course: course
  };

  displayStudentData(studentData);
  form.reset();
}

function displayStudentData(studentData) {
  const studentDataDisplay = document.getElementById('studentDataDisplay');
  const studentInfo = document.createElement('div');
  studentDataDisplay.innerHTML = `
    <h2 class="display-header">Student Information</h2>
    <p class="display-content"><strong>Name:</strong> ${studentData.name}</p>
    <p class="display-content"><strong>Email:</strong> ${studentData.email}</p>
    <p class="display-content"><strong>Phone:</strong> ${studentData.phone}</p>
    <p class="display-content"><strong>Course:</strong> ${studentData.course}</p>
  `;
  studentDataDisplay.appendChild(studentInfo);
}
