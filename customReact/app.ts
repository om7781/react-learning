const root = document.querySelector('#root') as HTMLElement;

interface elementType {
    tag: string;
    children : string;
}

const appendElement = (element: elementType, mainElement: HTMLElement) => {
    const createdElement = document.createElement(element.tag);
    createdElement.innerHTML = element.children;
    mainElement.appendChild(createdElement)
}

const element = {
    tag: "button",
    children : 'Save'
}

const elements = [
    {
        tag: "button",
        children : 'Save'
    },
    {
        tag: "a",
        children : 'Save'
    },
    {
        tag: "span",
        children : 'SPAN'
    },
    {
        tag: "div",
        children : 'This is a Div'
    },
    {
        tag: "b",
        children : 'A Bold Tag'
    },
]

elements.map((element)=>{
    appendElement(element, root)
})

