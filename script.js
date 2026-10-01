const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Vielen Dank " + name +
        "! Ihre Anfrage wurde erfolgreich aufgenommen."
    );

    form.reset();
});