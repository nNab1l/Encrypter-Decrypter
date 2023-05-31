class Header{
    //properties
    htmlElement;
    view;
    headinghtmlElement;
    //geef view en headingText mee om te gebruiken
    constructor(view, headingText){
        //header element wordt gemaakt
        this.htmlElement = document.createElement("header");
        //geef de relevante class
        this.htmlElement.classList.add("view__header");
        //h1 aanmaak met de relevante class en innerText
        this.headinghtmlElement = document.createElement("h1");
        this.headinghtmlElement.innerText = headingText;
        this.headinghtmlElement.classList.add("view__heading");
        //maak de h1 een child van de header
        this.htmlElement.appendChild(this.headinghtmlElement);
        //definieër view
        this.view = view;
        //rendert het header element in view
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }
}