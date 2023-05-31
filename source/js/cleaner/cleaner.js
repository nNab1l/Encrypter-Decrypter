class Cleaner{
    //whatToClean bepaald wat gecleaned gaat worden
    clean(whatToClean){
        //selecteert wat gecleanend gaat worden
        document.querySelector(whatToClean).innerHTML = "Ik ben gecleaned";
    }
}