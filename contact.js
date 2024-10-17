

function submitForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorDiv = document.getElementById("formError");

  
    if (!name || !email || !subject || !message) {
        errorDiv.textContent = "Please fill out all fields.";
        return;
    }

  
    errorDiv.textContent = "";


    alert("Form submitted successfully!\n" +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Subject: ${subject}\n` +
        `Message: ${message}`);
    
   
    document.getElementById("contactForm").reset();
}
