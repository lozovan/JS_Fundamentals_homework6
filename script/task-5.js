document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
    const boxElements = document.querySelectorAll('.items');

    circles.forEach((circle, index) => {
        const animClass = circle.getAttribute('data-anim');
        circle.classList.add(animClass);

        const p = document.createElement('p');
        p.textContent = `Element with animation: "${animClass}" applied!`;
        const loremText = document.createElement('p');

        boxElements[index].appendChild(p);
        boxElements[index].appendChild(loremText);
    });
});




