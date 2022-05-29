const apiUrl = `https://block-backend-mc.herokuapp.com`;

function getUrlParam(param){
    var url = new URL(window.location.href);
    var c = url.searchParams.get(param);
    return c;

}