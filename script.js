function Catsting() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET","",false);
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            let response = JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
}
    
