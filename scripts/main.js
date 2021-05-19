document.querySelector('.csv-file1').addEventListener('change', upload, false);

var data = [];


function upload(evt) {
    
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {

        var csvData = event.target.result;

        data = Papa.parse(csvData, {
            header: true
        });

        data = JSON.parse(JSON.stringify(data.data));
        
        data.forEach(element => {
            element.Edad = parseInt(element.Edad);
            element.Estatura = parseInt(element.Estatura);
        });
        
        console.log(data);
    }
};


document.getElementById('01_maymen').addEventListener('click', sort0101);
const htmlList = document.querySelector('.sprint1_list_itemContainer');

function sort0101() {
    console.log('0101');

    var byAge = data.slice(0);

    byAge.sort(function (a, b) {
        return b.Edad - a.Edad;
    });

    while (htmlList.firstChild) {
        htmlList.removeChild(htmlList.firstChild);
    }
    
    for (let i = 0; i < byAge.length; i++) {
        const element = byAge[i];
        const newItem = document.createElement('li');
        newItem.innerHTML = `${element.Nombre} ${element.Edad} ${element.Estatura}`
        console.log(newItem)
        htmlList.appendChild(newItem);
    }
    
    console.log(byAge);

};

document.getElementById('01_menmay').addEventListener('click', sort0102);

function sort0102() {
    console.log('0101');

    var byAge = data.slice(0);

    byAge.sort(function (a, b) {
        return a.Edad - b.Edad;
    });

    while (htmlList.firstChild) {
        htmlList.removeChild(htmlList.firstChild);
    }
    for (let i = 0; i < byAge.length; i++) {
        const element = byAge[i];
        const newItem = document.createElement('li');
        newItem.innerHTML = `${element.Nombre} ${element.Edad} ${element.Estatura}`
        console.log(newItem)
        htmlList.appendChild(newItem);
    }

    console.log(byAge);

};

document.getElementById('02_maymen').addEventListener('click', sort0201);

function sort0201() {
    console.log('0101');

    var byAge = data.slice(0);

    byAge.sort(function (a, b) {
        return b.Estatura - a.Estatura;
    });

    while (htmlList.firstChild) {
        htmlList.removeChild(htmlList.firstChild);
    }
    for (let i = 0; i < byAge.length; i++) {
        const element = byAge[i];
        const newItem = document.createElement('li');
        newItem.innerHTML = `${element.Nombre} ${element.Edad} ${element.Estatura}`
        console.log(newItem)
        htmlList.appendChild(newItem);
    }

    console.log(byAge);

};

document.getElementById('02_menmay').addEventListener('click', sort0202);

function sort0202() {
    console.log('0101');

    var byAge = data.slice(0);

    byAge.sort(function (a, b) {
        return a.Estatura - b.Estatura;
    });

    while (htmlList.firstChild) {
        htmlList.removeChild(htmlList.firstChild);
    }
    for (let i = 0; i < byAge.length; i++) {
        const element = byAge[i];
        const newItem = document.createElement('li');
        newItem.innerHTML = `${element.Nombre} ${element.Edad} ${element.Estatura}`
        console.log(newItem)
        htmlList.appendChild(newItem);
    }

    console.log(byAge);
};