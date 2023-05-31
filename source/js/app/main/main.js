class Main{
    //main properties
    encrypterView;
    decrypterView;
    htmlElement;
    app;

    //constructor die data en app meekrijgt
    constructor(data,app){
        //definitie van app
        this.app = app;

        //htmlelement wordt een main tag met class main
        this.htmlElement = document.createElement("main");
        this.htmlElement.classList.add("main");
        //render functie met het zojuist gemaakt html element en selectie van de body
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        //encrypterview 
        this.encrypterView = new EncrypterView(this,data.encrypt);
        this.decrypterView = new DecrypterView(this, data.decrypt);
    }

    //cipher functie met textToCipher en type
    cipher(textToCipher, type){
        //if statement die checkt of het type overeenkomt met ENCRYPT
        if(type === "ENCRYPT"){
            //encryptie wordt uitgevoerd op textToCipher
            this.app.encrypt(textToCipher);
        }
        else{
            //decryptie wordt uitgevoerd op textToCipher
            this.app.decrypt(textToCipher);
        }
    }

    //encrypter wordt verandert
    changeEncrypter(encryptedText){
        //changebody wordt uitgevoerd op encrypterview
        this.encrypterView.changeBody(encryptedText);
    }

    //decrypter wordt verandert
    changeDecrypter(decryptedText){
        //changebody wordt uitgevoerd op decrypterview
        this.decrypterView.changeBody(decryptedText);
    }
}