let btnSend = document.getElementById ("btnSendRequest");
let pResult = document.getElementById("result");

let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4 && httpRequest.status == 200){
        let rTxt = httpRequest.responseText;
        let lukeSkywalker = JSON.parse(rTxt);
        pResult.innerHTML = lukeSkywalker.name + " tezit " + lukeSkywalker.mass + "kg";
        
        
    }
};
btnSend.onclick = function ()  {
    let url = "https://swapi.co/api/people/2/";
    httpRequest.open("GET",url, true);
    httpRequest.send();
};
