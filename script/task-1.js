document.addEventListener('DOMContentLoaded', function () {
    const runTaskButton = document.querySelector("#taskOne");

    runTaskButton.addEventListener('click', function () {
        const ulElements = document.querySelectorAll("#list li");
        const resultArray = [];
        const arrayUlElements = Array.from(ulElements);
        const lengthList = arrayUlElements.length;

        for (let i = 0; i < lengthList; ++i) {
            let currentElement = i % 2 === 0 ? arrayUlElements.shift() : arrayUlElements.pop();
            resultArray.push(currentElement.textContent);
        }
        const modalContent = resultArray.join(', ');

        showModal(modalContent);
    });

    function showModal(content) {
        alert("Output result:" + "\n" + content);
    }
});
