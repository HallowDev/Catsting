function catstingHome() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET","https://catfact.ninja/breeds",false);
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            let response = JSON.parse(xhr.responseText);
            races = response.total
            console.log(response)
            for(data in response) {
                i = 0;
                coats = []
                response.data.forEach(function(element) {
                    coats[i] = element.coat;
                    i++
                });
            
            }
        
        }
    }
    xhr.send();

    const counts = {}

    coats.forEach(function(x) {
        counts[x] = (counts[x] || 0) + 1;
    })
    console.log(counts)
    highest = 0;
    for(property in counts) {
        console.log(highest,counts[property])
        if(counts[property] > highest){
            highest = counts[property]
            coat = property
        }
    }

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
    var paragraph3 = document.getElementById("coat");
    var text = document.createTextNode(facts);
    var text2 = document.createTextNode(races);
    var text3 = document.createTextNode(coat);

    paragraph.appendChild(text);
    paragraph2.appendChild(text2);
    paragraph3.appendChild(text3);
}


if(window.location.href == 'http://127.0.0.1:5500/index.html') {
    catstingHome();
}

function randomFact() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET","https://catfact.ninja/fact",false);
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            let response = JSON.parse(xhr.responseText);
            document.getElementById('anecdote').innerHTML = response.fact
        }
    }
    xhr.send();
}