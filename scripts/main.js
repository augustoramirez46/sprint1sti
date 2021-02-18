document.querySelector('.csv-file').addEventListener('change', upload, false);
var data = null;
var data1;

function upload(evt) {

    console.log('a');
    
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
        
        var csvData = event.target.result;

        data = Papa.parse(csvData, {header : true});

        console.log(data);
    }
    
};

function viewArray() {
   
    console.log(data);
    
};


document.getElementById('01_maymen').addEventListener('click', sort0101);

function sort0101() {
    console.log('0101');

    var byAge = data.data.slice(0);

    byAge.sort(function(a,b) {
    return b.Edad - a.Edad;
    });

    console.log(byAge);
 
};

document.getElementById('01_menmay').addEventListener('click', sort0102);

function sort0102() {
    console.log('0101');

    var byAge = data.data.slice(0);

    byAge.sort(function(a,b) {
    return a.Edad - b.Edad;
    });

    console.log(byAge);
 
};

document.getElementById('02_maymen').addEventListener('click', sort0201);

function sort0201() {
    console.log('0101');

    var byAge = data.data.slice(0);

    byAge.sort(function(a,b) {
    return b.Estatura - a.Estatura;
    });

    console.log(byAge);
 
};

document.getElementById('02_menmay').addEventListener('click', sort0202);

function sort0202() {
    console.log('0101');

    var byAge = data.data.slice(0);

    byAge.sort(function(a,b) {
    return a.Estatura - b.Estatura;
    });

    console.log(byAge);
 
};

