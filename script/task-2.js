const h1Element = document.querySelector("h1");
h1Element.style.backgroundColor = "#90ee90";

const myDiv = document.querySelector("#myDiv");
const stylesArray = [
    { property: 'font-weight', value: 'bold' },
    { property: 'color', value: 'red' },
    { property: 'text-decoration', value: 'underline' },
    { property: 'font-style', value: 'italic' }
]

for (let i = 0; i < myDiv.children.length; ++i) {
    let style = stylesArray[i];
    myDiv.children[i].style[style.property] = style.value;
}

const myList = document.getElementById('myList');
let makeHorizontal = "\t";
for (let li of myList.children) {
    makeHorizontal += li.textContent;
}
const preElement = document.createElement('p');
preElement.textContent = makeHorizontal;
document.body.appendChild(preElement);
preElement.style.fontWeight = "normal";
preElement.style.whiteSpace = "break-spaces";

myList.remove();

const span = document.querySelector('span');
span.style.display = "none";
