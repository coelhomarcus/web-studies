function validateEmail() {
    const email = document.getElementById("user-email");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
    if(email.value === "")
    {
      alert("Please, type your email address.");
      return;
    }

    if (emailRegex.test(email.value))
    {
      window.location.href = "success/success.html";
    } 
    else 
    {
      email.style.border = "1px solid red";
      email.style.background = "#ffcccc";
      email.style.color = "red";
      document.getElementById("invalid-email-text").style.display = "inline";
    }
}