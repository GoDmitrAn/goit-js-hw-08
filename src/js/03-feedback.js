let throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.querySelector('input');
const textareaEl = formEl.querySelector('textarea');

const keyLocaleStorage="feedback-form-state";
formEl.addEventListener("submit", handleSubmit);
formEl.addEventListener("input", throttle(save, 500));

if (localStorage.getItem("feedback-form-state")!==null) {
    const {email, message} = load();
    inputEl.value = email;
    textareaEl.value = message;
    
}
function save() {
    const formData = new FormData(formEl);
    const serializedFields = {
        email: formData.get('email'),
        message: formData.get('message')
    }
    try {
    
    localStorage.setItem(keyLocaleStorage, JSON.stringify(serializedFields));
    } catch (error) {
    console.error("Set state error: ", error.message);
    }
};
function load() {
  try {
    const serializedState = localStorage.getItem(keyLocaleStorage);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message }
  } = event.currentTarget;

  if (email.value === "" || message.value === "") {
    return console.log("Please fill in all the fields!");
  }
    const userData = { 
        'email': email.value,
        'message':message.value
    }
    console.log("userData: ", userData)
    
    event.currentTarget.reset();
    localStorage.clear();
}