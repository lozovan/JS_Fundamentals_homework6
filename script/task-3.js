document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector("body");

    const main = document.createElement("main");
    main.className = "mainClass check item";

    const div = document.createElement("div");
    div.id = "myDiv";

    const paragraph = document.createElement("p");
    paragraph.textContent = "First paragraph";

    div.appendChild(paragraph);
    main.appendChild(div);
    body.appendChild(main);
});