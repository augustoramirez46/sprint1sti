document.querySelector('.csv-file3').addEventListener('change', upload2, false);
const list3 = document.querySelector('.person');
const button3 = document.querySelector('.execute3');
const results3 = document.querySelector('.results-text3');
var kText = document.querySelector('.k-label');
var resultInfo = [];

var dataS3 = [];
var k;

function upload2(evt) {
    
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {

        var csvData = event.target.result;

        dataS3 = Papa.parse(csvData, {
            header: true
        });
        dataS3 = JSON.parse(JSON.stringify(dataS3.data));
        
        dataS3.forEach(element => {
            
            element.Tomate = parseFloat(element.Tomate / 10);
            element.Pepperoni = parseFloat(element.Pepperoni / 10);
            element.Pollo = parseFloat(element.Pollo / 10);
            element.Tocineta = parseFloat(element.Tocineta / 10);
            element.Rugula = parseFloat(element.Rugula / 10);
            element.Cebolla = parseFloat(element.Cebolla / 10);
            element.Pina = parseFloat(element.Pina / 10);
            element.Champinones = parseFloat(element.Champinones / 10);
            element.Berenjena = parseFloat(element.Berenjena / 10);
            element.Guacamole = parseFloat(element.Guacamole / 10);
            element.Cabano = parseFloat(element.Cabano / 10);
            element.Maicitos = parseFloat(element.Maicitos / 10);
            element.Maduritos = parseFloat(element.Maduritos / 10);
            element.Queso = parseFloat(element.Queso / 10);
            element.Ajo = parseFloat(element.Ajo / 10);
            element.QuesoAzul = parseFloat(element.QuesoAzul / 10);
            element.Manzana = parseFloat(element.Manzana / 10);
            element.Jamon = parseFloat(element.Jamon / 10);
            element.Chorizo = parseFloat(element.Chorizo / 10);
            element.Pimenton = parseFloat(element.Pimenton / 10);
            element.Anchoas = parseFloat(element.Anchoas / 10);
            element.Chocolate = parseFloat(element.Chocolate / 10);
            element.Frijoles = parseFloat(element.Frijoles / 10);
            element.SalsaBBQ = parseFloat(element.SalsaBBQ / 10);
            element.AceitunasVerdes = parseFloat(element.AceitunasVerdes / 10);
            element.AceitunasNegras = parseFloat(element.AceitunasNegras / 10);
            /*
            element.a = parseFloat(element.a);
            element.b = parseFloat(element.b);
            element.c = parseFloat(element.c);
            element.d = parseFloat(element.d);
            element.e = parseFloat(element.e);
            */
        });
        
        k = Math.sqrt(25);
        console.log(dataS3);
        console.log(k);
        menuHandlers3()
        
        
    }
};

function menuHandlers3() {
    for (let i = 0; i < dataS3.length; i++) {
        const elem = dataS3[i];
        var listItem = document.createElement('option');
        listItem.value = i;
        listItem.innerHTML = elem.Nombre;

        kText.innerHTML = `K = ${k}`;
        list3.appendChild(listItem);
                       
    }
};


button3.addEventListener('click', function() {
    var a = list3.options[list3.selectedIndex].value;
   // var b = list2.options[list2.selectedIndex].value;

    let copyA = dataS3.slice();
   // let copyB = dataS2.slice();


    for (let i = 0; i < copyA.length; i++) {
        const element = copyA[i];
       // if(JSON.stringify(element) === JSON.stringify(copyA[a])) return;

        let pPunto = 
        (element.Tomate * copyA[a].Tomate) +
        (element.Pepperoni * copyA[a].Pepperoni) +
        (element.Pollo * copyA[a].Pollo) +
        (element.Tocineta * copyA[a].Tocineta) +
        (element.Rugula * copyA[a].Rugula) +
        (element.Cebolla * copyA[a].Cebolla) +
        (element.Pina * copyA[a].Pina) +
        (element.Champinones * copyA[a].Champinones) +
        (element.Berenjena * copyA[a].Berenjena) +
        (element.Guacamole * copyA[a].Guacamole) +
        (element.Cabano * copyA[a].Cabano) +
        (element.Maicitos * copyA[a].Maicitos) +
        (element.Maduritos * copyA[a].Maduritos) +
        (element.Queso * copyA[a].Queso) +
        (element.Ajo * copyA[a].Ajo) +
        (element.QuesoAzul * copyA[a].QuesoAzul) +
        (element.Manzana * copyA[a].Manzana) +
        (element.Jamon * copyA[a].Jamon) +
        (element.Chorizo * copyA[a].Chorizo) +
        (element.Pimenton * copyA[a].Pimenton) +
        (element.Anchoas * copyA[a].Anchoas) +
        (element.Chocolate * copyA[a].Chocolate) +
        (element.Frijoles * copyA[a].Frijoles) +
        (element.SalsaBBQ * copyA[a].SalsaBBQ) +
        (element.AceitunasVerdes * copyA[a].AceitunasVerdes) +
        (element.AceitunasNegras * copyA[a].AceitunasNegras);

        let MagnitudeA = Math.sqrt(
        (element.Tomate * element.Tomate) +
        (element.Pepperoni * element.Pepperoni) +
        (element.Pollo * element.Pollo) +
        (element.Tocineta * element.Tocineta) +
        (element.Rugula * element.Rugula) +
        (element.Cebolla * element.Cebolla) +
        (element.Pina * element.Pina) +
        (element.Champinones * element.Champinones) +
        (element.Berenjena * element.Berenjena) +
        (element.Guacamole * element.Guacamole) +
        (element.Cabano * element.Cabano) +
        (element.Maicitos * element.Maicitos) +
        (element.Maduritos * element.Maduritos) +
        (element.Queso * element.Queso) +
        (element.Ajo * element.Ajo) +
        (element.QuesoAzul * element.QuesoAzul) +
        (element.Manzana * element.Manzana) +
        (element.Jamon * element.Jamon) +
        (element.Chorizo * element.Chorizo) +
        (element.Pimenton * element.Pimenton) +
        (element.Anchoas * element.Anchoas) +
        (element.Chocolate * element.Chocolate) +
        (element.Frijoles * element.Frijoles) +
        (element.SalsaBBQ * element.SalsaBBQ) +
        (element.AceitunasVerdes * element.AceitunasVerdes) +
        (element.AceitunasNegras * element.AceitunasNegras)
        );

        let MagnitudeB = Math.sqrt(
            (copyA[a].Tomate * copyA[a].Tomate) +
            (copyA[a].Pepperoni * copyA[a].Pepperoni) +
            (copyA[a].Pollo * copyA[a].Pollo) +
            (copyA[a].Tocineta * copyA[a].Tocineta) +
            (copyA[a].Rugula * copyA[a].Rugula) +
            (copyA[a].Cebolla * copyA[a].Cebolla) +
            (copyA[a].Pina * copyA[a].Pina) +
            (copyA[a].Champinones * copyA[a].Champinones) +
            (copyA[a].Berenjena * copyA[a].Berenjena) +
            (copyA[a].Guacamole * copyA[a].Guacamole) +
            (copyA[a].Cabano * copyA[a].Cabano) +
            (copyA[a].Maicitos * copyA[a].Maicitos) +
            (copyA[a].Maduritos * copyA[a].Maduritos) +
            (copyA[a].Queso * copyA[a].Queso) +
            (copyA[a].Ajo * copyA[a].Ajo) +
            (copyA[a].QuesoAzul * copyA[a].QuesoAzul) +
            (copyA[a].Manzana * copyA[a].Manzana) +
            (copyA[a].Jamon * copyA[a].Jamon) +
            (copyA[a].Chorizo * copyA[a].Chorizo) +
            (copyA[a].Pimenton * copyA[a].Pimenton) +
            (copyA[a].Anchoas * copyA[a].Anchoas) +
            (copyA[a].Chocolate * copyA[a].Chocolate) +
            (copyA[a].Frijoles * copyA[a].Frijoles) +
            (copyA[a].SalsaBBQ * copyA[a].SalsaBBQ) +
            (copyA[a].AceitunasVerdes * copyA[a].AceitunasVerdes) +
            (copyA[a].AceitunasNegras * copyA[a].AceitunasNegras)
            );

            let similarity;

            similarity = pPunto / ((MagnitudeA)*(MagnitudeB));

            resultInfo.push({
                Nombre: `${element.Nombre}`,
                Similaridad: `${similarity}`
            });

        console.log(pPunto);

       
        
    }
    
return;
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