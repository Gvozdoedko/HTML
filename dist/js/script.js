class Div {
    constructor(name, prop, ...another) {
        this.name = name;
        this.prop = prop;
        this.another = another;
    }

    createEl() {
        let newEl = document.createElement(`${this.name}`);
        for (const key in this.prop) {
            newEl.setAttribute(`${key}`, `${this.prop[key]}`);
        }
        newEl.textContent = `${this.another}`;
        document.getElementById("main").append(newEl);
    }
}

const myDiv = new Div(`div`, { id: "my-div", class: "my_div" }, `Hello, world`);

document.getElementById("btn").addEventListener("click", () => {
    myDiv.createEl();
});
