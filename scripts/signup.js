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
        let val = e.target.value;
        if (inputData.key === "email") {
          val = val.trim().toLowerCase();
        } else if (inputData.key === "branch") {
          val = val.trim().toUpperCase();
        } else {
          val = val.trim();
        }
        localStorage.setItem(inputData.key, val);
      });
      inputElement.removeAttribute("onfocusout");
    }
  });

  const submitBtn = document.getElementById("sub");
  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      if (isProfileComplete()) {
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
      if (isProfileComplete()) {
        document.querySelector("#sub").disabled = true;
        document.querySelector("#sub").innerHTML = "submitting...";
        let data = new FormData(form);

        // Also normalize inputs before they are sent, or just ensure localStorage captures them correctly on submit
        inputs.forEach((inputData) => {
          const inputElement = document.getElementById(inputData.id);
          if (inputElement) {
            let val = inputElement.value;
            if (inputData.key === "email") {
              val = val.trim().toLowerCase();
            } else if (inputData.key === "branch") {
              val = val.trim().toUpperCase();
            } else {
              val = val.trim();
            }
            localStorage.setItem(inputData.key, val);
            data.set(inputElement.name || inputData.id, val); // Try to update FormData as well if possible, or assume it's good
          }
        });

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
