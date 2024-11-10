const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "auto",
  geoIpLookup: callback => {
    fetch("https://ipinfo.io/json?token=YOUR_TOKEN")
      .then(response => response.json())
      .then(data => callback(data.country))
      .catch(() => callback("us"));
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});

function confirmation(){
    alert("Your demo has requested!");
}

function gotosecondpage(){
    window.location.href = "second.html";
}