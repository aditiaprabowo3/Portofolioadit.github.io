// Dark Mode
let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "enabled") {
  enableDarkMode();
}

// Listeners

const darkModeToggle = document.querySelector("#dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});

// form contact

const scriptURL = 'https://script.google.com/macros/s/AKfycbwbniJFqGGGW9J2vk4pN8YIxgSRVKRYKG-bWC9sy5JRcpMNpL0_x7p4Ng1LGr6SyDzX2Q/exec'
const form = document.forms['portofolio-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
e.preventDefault()
// ketika tombol submit di klik
// tamplikan tombol loading, hilangkan tombolloading
btnLoading.classList.toggle('d-none');
btnKirim.classList.toggle('d-none');
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
// tampilkan tombol loading,hilangkan tombol kirim
btnLoading.classList.toggle('d-none');
btnKirim.classList.toggle('d-none');
// tampilkan alert
myAlert.classList.toggle('d-none');
// reset
form.reset();

console.log('Success!', response)
})
.catch(error => console.error('Error!', error.message))
})
