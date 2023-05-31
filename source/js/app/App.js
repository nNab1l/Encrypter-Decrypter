// de app class die toegang heeft tot de hoofdcomponenten
class App{
    //properties
    api;
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor(){

        //properties krijgen hun waardes
        this.decrypter = new Decrypter();
        this.encrypter = new Encrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new API();
        //referentie naar de json data
        this.api.getData("/source/data/data.json").then( (data) => {
            //main property krijgt een waarde met this en data mee
            this.main = new Main(data,this);
        });
    }

    //encrypt method
    encrypt = (textToEncrypt) => {
        //variabele met de waarde van de geëncrypte text
        const encrypted = this.encrypter.encrypt(textToEncrypt);
        //functie waarbij changeEncrypter wordt aangeroepen met de encrypted variabele
        this.main.changeEncrypter(encrypted);
    }

    decrypt = (textToDecrypt) => {
        const decrypted = this.decrypter.decrypt(textToDecrypt);
        this.main.changeDecrypter(decrypted);
    }
}


