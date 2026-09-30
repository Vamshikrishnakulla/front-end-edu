// @ts-check

document.addEventListener("DOMContentLoaded", () => {
  const inputs = [
    { id: "contactname", key: "name" },
    { id: "add", key: "addno" },
    { id: "college", key: "college" },
    { id: "uni", key: "university" },
    { id: "branch", key: "branch" },
    { id: "contact_email", key: "email" },
    { id: "text_area", key: "key" },
  ];

  inputs.forEach((inputData) => {
    const inputElement = document.getElementById(inputData.id);
    if (inputElement) {
      inputElement.addEventListener("focusout", (e) => {
        localStorage.setItem(inputData.key, e.target.value);
      });
      inputElement.removeAttribute("onfocusout");
    }
  });

  const submitBtn = document.getElementById("sub");
  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      if (isAuthenticated()) {
        // The form submission logic handles this normally with the event listener on the form
      } else {
        e.preventDefault();
        alert("Please, Fill all the required feilds.");
      }
    });
    submitBtn.removeAttribute("onclick");
  }

  let form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (isAuthenticated()) {
        document.querySelector("#sub").disabled = true;
        document.querySelector("#sub").innerHTML = "submitting...";
        let data = new FormData(form);
        fetch(
          "https://script.google.com/macros/s/AKfycbyWPijfaI3oVMyEC_WgQLoyr8mkkz85nZohC7zIhDu-OqUN6tihccRLAMAgBChB94Xw/exec",
          {
            method: "POST",
            mode: "no-cors", // This bypasses the Google Apps Script redirect CORS block
            body: data,
          },
        )
          .then((res) => res.text())
          .then((data) => {
            document.querySelector("#sub").innerHTML = "success";
            alert("Registered/{already} sucessfully.Please Login now.");
            window.location.assign("login.html");
          });
      }
    });
  }
});
