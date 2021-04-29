document.querySelector('.csv-file2').addEventListener('change', upload2, false);
const list1 = document.querySelector('.persona1');
const list2 = document.querySelector('.persona2');
const button = document.querySelector('.execute');
const results = document.querySelector('.results-text');

var dataS2 = [];

function upload2(evt) {
    
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {

        var csvData = event.target.result;

        dataS2 = Papa.parse(csvData, {
            header: true
        });
        dataS2 = JSON.parse(JSON.stringify(dataS2.data));
        
        dataS2.forEach(element => {
            element.a = parseFloat(element.a);
            element.b = parseFloat(element.b);
            element.c = parseFloat(element.c);
            element.d = parseFloat(element.d);
            element.e = parseFloat(element.e);
        });
        
        console.log(dataS2);
        menuHandlers();
        
    }
};

function menuHandlers() {
    for (let i = 0; i < dataS2.length; i++) {
        const elem = dataS2[i];
        var listItem = document.createElement('option');
        var listItem2 = document.createElement('option');
        listItem.value = i;
        listItem.innerHTML = elem.Nombre;

        listItem2.value = i;
        listItem2.innerHTML = elem.Nombre;
        list1.appendChild(listItem);
        list2.appendChild(listItem2);                
    }
}

button.addEventListener('click', function() {
    var a = list1.options[list1.selectedIndex].value;
    var b = list2.options[list2.selectedIndex].value;

    let copyA = dataS2.slice();
    let copyB = dataS2.slice();

    console.log(copyA[a]);
    console.log(copyB[b]);

    let pPunto;

    pPunto = 
    (copyA[a].a*copyB[b].a) + 
    (copyA[a].b*copyB[b].b) + 
    (copyA[a].c*copyB[b].c) + 
    (copyA[a].d*copyB[b].d) + 
    (copyA[a].e*copyB[b].e);

    console.log(pPunto);

    let magnitudeA;

    magnitudeA = Math.sqrt(
        (copyA[a].a*copyA[a].a)+
        (copyA[a].b*copyA[a].b)+
        (copyA[a].c*copyA[a].c)+
        (copyA[a].d*copyA[a].d)+
        (copyA[a].e*copyA[a].e)
    );

    let magnitudeB;

    magnitudeB = Math.sqrt(
        (copyB[b].a*copyB[b].a)+
        (copyB[b].b*copyB[b].b)+
        (copyB[b].c*copyB[b].c)+
        (copyB[b].d*copyB[b].d)+
        (copyB[b].e*copyB[b].e)
    );

    let similarity;

    similarity = pPunto / ((magnitudeA)*(magnitudeB));

    console.log(similarity);

    results.innerHTML = 
    `Producto Punto= ${pPunto} <br>
    Magnitud Persona 1= ${magnitudeA} <br>
    Magnitud Persona 2= ${magnitudeB} <br>
    Similaridad= ${similarity}`;

    
/*
    var aData = getDataFromData(a);
    var bData = getDataFromData(b);

    console.log(aData)*/

})
/*
function getDataFromData(index) {
    let copy = dataS2.slice();
    let selectedItem = copy.slice(index, index + 1);
    console.log(selectedItem);
    return selectedItem;
}
*/