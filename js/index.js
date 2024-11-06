console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Accessing the value via form elements

  /*
  const formElement = event.target.elements;
  
  console.log(formElement.firstName);
  console.log(formElement.firstName.value);
  */

  // Accessing the form values via FormData

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  // resetting a form
  event.target.reset();

  // focussing an element in a form
  event.target.elements.firstName.focus();
});

const messageInput = document.querySelector('[data-js="personal-message"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);

messageInput.addEventListener("input", (event) => {
  charactersLeftElement.textContent = 150 - event.target.value.length;
});
