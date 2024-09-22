console.log("test");

//DOM manipulation
//select FORM

//event to submit form data
//1. event handler
// - prevent the default behaviour
// - a ForData object template
// - get formValue to insert them into FormData object

const form = document.querySelector("form");

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const formValues = Object.fromEntries(formData);
  //   const formValues = formData.get("");

  console.log(formValues);

  // - fetch the CREATE endpoint to send formValues to server

  fetch("https://week4-assignment-guestbook-1-ycn9.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
}

form.addEventListener("submit", handleSubmit);

//select feedback container
//1.fetch READ endpoint to have access to data
//2. fetch urls
//3. parse response into json
//4. wrangle data if nessary

// fetch("http://localhost:8080/add-guests"), {
// method: "POST",
//    headers: {
//      "Content-Type": "application/json",
//    },
//    body: JSON.stringify({ formValues }),
//  });

// dataDatabase.forEach(item) => {
//create DOM elements to contain data
//

// });
