const apiUrl = `http://localhost:3000`;

function getUrlParam(param){
    var url = new URL(window.location.href);
    var c = url.searchParams.get(param);
    return c;

}