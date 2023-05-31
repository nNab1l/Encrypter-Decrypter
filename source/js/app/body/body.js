
class Body{
    //properties
    htmlElement;
    view;
    inputHtmlelement;
    text;
    //geef view en object mee aan de constructor
    constructor(view,object){
        //maak de section met de relevante class
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("view__body");
        //maak een textarea die met de relevante class
        this.inputHtmlelement = document.createElement("textarea");
        this.inputHtmlelement.classList.add("view__input");
        //maak de textarea een child van de section
        this.htmlElement.appendChild(this.inputHtmlelement);
        //de placeholder van de textarea is gelijk aan object.placeholder wat
        //er in resulteert dat de placeholder text in de textarea komt
        this.inputHtmlelement.placeholder = object.placeholder;
        this.inputHtmlelement.value = object.value;

        //de text is gelijk aan de value van object
        this.text = object.value;
        this.inputHtmlelement.oninput = this.typed;
        this.view = view;
        //rendert het section element in view
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
    }

    //de functies die de getypete text bijhouden
    typed = (event) => {
        //this.text is 
        this.text = event.target.value;
    }

    //newText dient als parameter die de nieuwe textueele waarde bepaalt
    changeBody(newText){
        //update de value van inputHtmlelement
        this.inputHtmlelement.value = newText;
    }
}