

class Main{
    encrypterView;
    decrypterView;
    htmlElement;
    app;

    constructor(data,app){
        this.app = app;

        this.htmlElement = document.createElement("main");
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        this.encrypterView = new EncrypterView(this,data.encrypt);
        this.decrypterView = new DecrypterView(this, data.decrypt);
    }
}

class EncrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;

    constructor(main, placeholder){
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;

        this.main.app.renderer.render(this.htmlElement,this.main.htmlElement);
        this.header = new Header(this, "Encrypt");
        this.body = new Body(this, placeholder);
        this.footer = new Footer(this, "Encrypt");
    }

    getDataFromBody(){
        console.log(this.body.text);
    }
}

class DecrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;

    constructor(main, placeholder){
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;

        this.main.app.renderer.render(this.htmlElement,this.main.htmlElement);
        this.header = new Header(this, "Decrypter");
        this.body = new Body(this,placeholder);
        this.footer = new Footer(this, "Decrypt");
    }

    getDataFromBody(){
        console.log(this.body.text);
    }
}


class Header{
    htmlElement;
    view;
    headinghtmlElement;
    constructor(view, headingText){
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("view__header");
        this.headinghtmlElement = document.createElement("h1");
        this.headinghtmlElement.innerText = headingText;
        this.headinghtmlElement.classList.add("view__heading");
        this.htmlElement.appendChild(this.headinghtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
        // this.view.main.app.render.renderer(this.htmlElement, this.view.htmlElement)
    }
}




class Body{
    htmlElement;
    view;
    inputHtmlelement;
    text;
    constructor(view,placeholder){
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("view__body");
        this.inputHtmlelement = document.createElement("textarea");
        this.inputHtmlelement.classList.add("view__input");
        this.htmlElement.appendChild(this.inputHtmlelement);
        this.inputHtmlelement.placeholder = placeholder;

        this.inputHtmlelement.oninput = this.typed;
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

    typed = (event) => {
        this.text = event.target.value;
    }
}

class Footer{
    htmlElement;
    view;
    buttonhtmlElement;
    app;

    constructor(view, buttonText){
        this.app = app;
        this.htmlElement = document.createElement("footer");
        this.htmlElement.classList.add("view__footer");
        this.buttonhtmlElement = document.createElement("button");
        this.buttonhtmlElement.classList.add("view__button");
        this.buttonhtmlElement.onclick = this.buttonClicked;
        this.buttonhtmlElement.innerText = buttonText;
        this.htmlElement.appendChild(this.buttonhtmlElement);
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
        // this.view.main.app.render.renderer(this.htmlElement, this.view.htmlElement)
    }

    buttonClicked = () => {
        this.view.getDataFromBody();
    }
}

class App{
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor(){
        
        this.decrypter = new Decrypter();
        this.encrypter = new Encrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new API();
        this.api.getData("/source/data/data.json").then( (data) => {
            this.main = new Main(data,this);
        });
    }
}

const app = new App();
console.log(app);