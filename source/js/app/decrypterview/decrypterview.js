class DecrypterView{
    //propterties
    header;
    body;
    footer;
    htmlElement;
    main;
    type;

    constructor(main, placeholder){
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        //definitie van het type in deze specifieke scope
        this.type = "DECRYPT";
        this.main = main;

        this.main.app.renderer.render(this.htmlElement,this.main.htmlElement);
        this.header = new Header(this, "Decrypter");
        this.body = new Body(this,placeholder);
        this.footer = new Footer(this, "Decrypt");
    }

    getDataFromBody(){
        //voer cipher uit op this.body en this.type
        this.main.cipher(this.body.text,this.type);
    }

    changeBody(decryptedText){
        //changebody wordt aangeroepen op de body
        this.body.changeBody(decryptedText);
    }
}