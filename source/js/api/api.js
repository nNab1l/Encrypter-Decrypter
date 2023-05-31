class API{
    //gbruik async en await om het niet direct uit te voeren maar om te wachten op de promise
    async getData(url){
        let dataToBeReturned = {};
        //
        await fetch(url).then(
            (response) => {
                return response.json();
            }
            //dataToBeReturned is data
        ).then((data) =>{
            dataToBeReturned = data.data;
        });
        //return de dataToBeReturned
        return dataToBeReturned;
    }
}