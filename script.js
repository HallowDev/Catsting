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
                countries = []
                response.data.forEach(function(element) {
                    coats[i] = element.coat;
                    countries[i] = element.country
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

function getCountries() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET","https://catfact.ninja/breeds",false);
    
    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            let response = JSON.parse(xhr.responseText);
            for(data in response) {
                i = 0;
                countries = []
                response.data.forEach(function(element) {
                    countries[i] = element.country
                    i++
                });
            }
        }
    }
    xhr.send();
}


if(window.location.href == 'http://127.0.0.1:5500/index.html') {
    catstingHome();
}

if(window.location.href == 'http://127.0.0.1:5500/races.html') {
    getCountries();

    const counts = {}

    countries.forEach(function(x) {
        counts[x] = (counts[x] || 0) + 1;
    })

    countryList = document.getElementById('country')

    for(property in counts) {
        console.log(property)
        item = document.createElement("option")
        item.text = property
        item.style.width = "170px"
        countryList.append(item)
    }

    console.log(counts)
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

function darkMode() {
    var expires = ((new Date(Date.now()+ 60*1000)).toUTCString())
    console.log(expires)
    document.cookie = "mode=dark; expires="+expires;
    checkCookie();
}

function checkCookie() {
    let username = getCookie("mode");
    if (username == "dark") {
        console.log("hi")
        document.body.style.backgroundColor = "#353535"
    } else {
        
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}