document.getElementById("studentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const course = document.getElementById("course").value;
  const address = document.getElementById("address").value;

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Course:</strong> ${course}</p>
    <p><strong>Address:</strong> ${address}</p>
  `;

  document.getElementById("modal").style.display = "flex";
});

document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

document.getElementById("closeResetBtn").addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("studentForm").reset();
});