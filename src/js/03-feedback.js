import throttle from 'lodash.throttle';

const formContainer = document.querySelector(".feedback-form")
const inputEl = document.querySelector("input");
const textareaEl = document.querySelector("textarea");

const STORAGE_KEY = "feedback-form-state";

const formData = {};

textareaEl.addEventListener("input", throttle(onElemInput, 500));
inputEl.addEventListener("input", throttle(onElemInput, 500));
formContainer.addEventListener("submit", onFormSubmit);

getText();

function onElemInput(evt) {
    formData[evt.target.name] = evt.target.value;
    let dataString = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, dataString)

    console.log(value);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()

    localStorage.removeItem(STORAGE_KEY);

    formData.message = "";
    formData.email = "";
}

function getText() {
    const savedText = localStorage.getItem(STORAGE_KEY);

    if (savedText) {
        let objectValue = JSON.parse(savedText);

        textareaEl.value = objectValue.message;
        inputEl.value = objectValue.email;
        formData.email = objectValue.email;
        formData.message = objectValue.message;
    }
}
