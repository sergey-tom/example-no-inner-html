function mountTo(id) {
    document.getElementById(id).appendChild(this.element);
}

function withChildren(...children) {
    const element = this.element;
    children.forEach(child => element.appendChild(child.element));
    return this;
}

function withText(text) {
    this.element.innerText = text;
    return this;
}

function withAttr(name, value) {
    this.element.setAttribute(name, value);
    return this;    
}

function withStyle(style) {
    return this.attr('style', style);
}

function withEvent(ev, handler) {
    this.element.addEventListener(ev, handler);
    return this;
}

function make(name) {
    const element = document.createElement(name);
    return { 
        element, 
        with: withChildren, 
        text: withText, 
        attr: withAttr, 
        style: withStyle,
        event: withEvent,
        mountTo,
    };
}

const div = () => make('div');
const ul = () => make('ul');
const li = () => make('li');
const button = () => make('button');