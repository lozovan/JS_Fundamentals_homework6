class createListener {
    constructor(elementsGroup, mutableGroup) {
        this.elementsGroup = elementsGroup;
        if (mutableGroup && typeof mutableGroup === 'object') {
            this.mutableGroup = mutableGroup;
        } else {
            this.mutableGroup = null;
        }
        this.newActiveElement = '';
    }

    getElementsGroup() {
        return this.elementsGroup;
    }
    getMutableGroup() {
        return this.mutableGroup;
    }

    setnewActiveElement(newColor) {
        this.newActiveElement = newColor;
    }

    getnewActiveElement() {
        return this.newActiveElement;
    }
    addListener() {
        const currentElements = document.querySelectorAll(`.${this.getElementsGroup().mover.childClass}`);
        currentElements.forEach(element => {
            element.addEventListener('click', () => {
                this.changeColorContainer(element)
                if (this.getMutableGroup() !== null) this.changeMutableGroup(element);
                this.changePrice()
            });
        });
    }
    changeColorContainer(element) {
        const currentActiveColor = document.querySelector(`.${this.getElementsGroup().mover.childClass}.${this.getElementsGroup().mover.flag}`);
        currentActiveColor.classList.remove(`${this.getElementsGroup().mover.flag}`);
        element.classList.add(`${this.getElementsGroup().mover.flag}`);
        this.setnewActiveElement(element.getAttribute(`${this.getElementsGroup().mover.childClass}`));
    }

    changeMutableGroup() {
        const arrayKeys = Object.keys(this.getMutableGroup());
        arrayKeys.forEach(element => {
            const deleteClass = document.querySelector(`.${this.getMutableGroup()[element].childClass}.${this.getMutableGroup()[element].flag}`);
            deleteClass.classList.remove(`${this.getMutableGroup()[element].flag}`);
            const selectedElement = document.querySelector(`.${this.getMutableGroup()[element].childClass}[${this.getElementsGroup().mover.childClass}=${this.getnewActiveElement()}]`);
            selectedElement.classList.add(`${this.getMutableGroup()[element].flag}`);
        });
    }
    changePrice() {
        const dataPriceGradient = parseFloat(document.querySelector(`.gradient.second`).getAttribute('data-price'));
        const dataPriceColor = parseFloat(document.querySelector(`.color.active`).getAttribute('data-price'));
        const dataPriceSize = parseFloat(document.querySelector(`.size.active`).getAttribute('data-price'));
        const dataQuantity = document.querySelector(`#quanti`).value;
        const price = dataPriceGradient < dataPriceColor ? (dataPriceGradient + dataPriceSize) * dataQuantity : (dataPriceColor + dataPriceSize) * dataQuantity;
        outprice.textContent = `${price.toFixed(2)} $`;
    }
}
const propertiesColor = {
    mover: { parentClass: 'colors', childClass: 'color', flag: 'active' }
}
const mutableColor = {
    element1: { parentClass: 'gradients', childClass: 'gradient', flag: 'second' },
    element2: { parentClass: 'shoeBackground', childClass: 'shoe', flag: 'show' }
}

const propertiesSize = {
    mover: { parentClass: 'size-container', childClass: 'size', flag: 'active' }
}

const color = new createListener(propertiesColor, mutableColor);
color.addListener();
const size = new createListener(propertiesSize);
size.addListener();
size.changePrice();


quanti.addEventListener('change', size.changePrice);