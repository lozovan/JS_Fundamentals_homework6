const submitButton = document.querySelector('[type="submit"]');
submitButton.addEventListener("click", function () {
    let fieldElements = document.querySelectorAll("fieldset input:not([type='submit'])");
    const out = document.querySelector(".out");
    out.textContent = "";
    let div = document.createElement("div");
    out.append(div);
    for (let val of fieldElements) {
        let newParagraph = document.createElement("p");
        div.append(newParagraph)
        newParagraph.textContent = val.getAttribute("name") + ": " + val.value + " (" + val.getAttribute("data-form") + ")";
    }
})
