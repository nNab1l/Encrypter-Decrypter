
class EncrypterView{
    //properties
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    //constructor met main en object property
    constructor(main, object){
        //nieuw htmlelement 
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main;
        //definitie van het type in deze specifieke scope
        this.type = "ENCRYPT";

        //rendert het main element (article)
        this.main.app.renderer.render(this.htmlElement,this.main.htmlElement);
        //header krijgt this mee en encrypt
        this.header = new Header(this, "Encrypt");
        //body krijgt this en de object property
        this.body = new Body(this, object);
        //footer krijgt this en encrypt mee net als de header
        this.footer = new Footer(this, "Encrypt");
    }

    getDataFromBody(){
        //voer cipher uit op this.body en this.type
        this.main.cipher(this.body.text,this.type);
    }

    changeBody(encryptedText){
        //changebody wordt aangeroepen op de body
        this.body.changeBody(encryptedText);
    }
}