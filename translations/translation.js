$(document).ready(() => {
    var fr = fetch(`translations/en.json`)
    .then(response => response.json())
    .then(data =>{
        for(var key in data){
            $(`#${key}`).text(`${data[key]}`)
        }
    })
    

})