class Renderer{
    //render krijgt twee parameters, whatToRender en whereToRender
    render(whatToRender, whereToRender){
        //whereTorender wordt child van whatToRender
        whereToRender.appendChild(whatToRender);
    }
}