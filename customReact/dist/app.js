const root = document.querySelector('#root');
const appendElement = (element, mainElement) => {
    const createdElement = document.createElement(element.tag);
    createdElement.innerHTML = element.children;
    mainElement.appendChild(createdElement);
};
const element = {
    tag: "button",
    children: 'Save'
};
const elements = [
    {
        tag: "button",
        children: 'Save'
    },
    {
        tag: "a",
        children: 'Save'
    },
    {
        tag: "span",
        children: 'SPAN'
    },
    {
        tag: "div",
        children: 'This is a Div'
    },
    {
        tag: "b",
        children: 'A Bold Tag'
    },
];
elements.map((element) => {
    appendElement(element, root);
});
export {};
//# sourceMappingURL=app.js.map