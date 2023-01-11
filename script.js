function CatstingHome() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET","https://catfact.ninja/breeds",false);
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            let response = JSON.parse(xhr.responseText);
            races = response.total
        }
    }
    xhr.send();

    xhr.open("GET","https://catfact.ninja/facts",false);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            let response = JSON.parse(xhr.responseText);
            facts = response.total
        }
    }
    xhr.send();
    console.log(races,facts)

    var paragraph = document.getElementById("facts");
    var paragraph2 = document.getElementById("races");
    var text = document.createTextNode(facts);
    var text2 = document.createTextNode(races);

    paragraph.appendChild(text);
    paragraph2.appendChild(text2);
}
    
CatstingHome();