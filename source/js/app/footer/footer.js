class Footer{
    htmlElement;
    view;
    buttonhtmlElement;
    app;

    constructor(view, buttonText){
        this.app = app;
        //creëer een footer
        this.htmlElement = document.createElement("footer");
        //geef de class mee
        this.htmlElement.classList.add("view__footer");
        this.buttonhtmlElement = document.createElement("button");
        this.buttonhtmlElement.classList.add("view__button");

        this.buttonhtmlElement.onclick = this.buttonClicked;
        //zet de innerText van de button gelijk aan buttonText
        this.buttonhtmlElement.innerText = buttonText;
        this.htmlElement.appendChild(this.buttonhtmlElement);
        this.view = view;
        //rendert het header element in view
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

    //onclick functie die getDataFromBody aanroept 
    buttonClicked = () => {
        this.view.getDataFromBody();
    }
}