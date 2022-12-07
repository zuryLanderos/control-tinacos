var porcentaje;


declaracion();

function increseWatter(){
    var objetivo = document.getElementById('percentage');
    var fllujo = document.getElementById('flujo');
    var aviso = document.getElementById('aviso');
    var offsetHeight = document.getElementById('watterId').offsetHeight;

    console.log('height', offsetHeight);
    if( offsetHeight < 200 ){
        offsetHeight = offsetHeight + 1
        document.getElementById("watterId").style.height = offsetHeight+"px";
        var actualTop = document.getElementById("watterId").offsetTop
        actualTop = actualTop - 1;
        document.getElementById("watterId").style.top = actualTop+"px";
        porcentaje = ( offsetHeight / 200 ) * 100;
        objetivo.innerHTML = porcentaje.toFixed(0) + ' %';


        fllujo.innerHTML = 'Flujo de subida Alto';
        fllujo.style.color = '#BF7900'

        if ( offsetHeight > 180 ) {
            aviso.innerHTML = 'Riesgo de desbordamiento';
        } else {
            aviso.innerHTML = '';
        }
        

    } else {
        aviso.innerHTML = 'No hay fluejo, pero tanque lleno';

        var objetivo = document.getElementById('percentage');
        objetivo.innerHTML = '100 %';

        fllujo.style.color = '#830000'
        fllujo.innerHTML = 'Flujo de subida Cerrado';

         

        clearInterval(myInterval);
    }
    
}

window.iniciar = function (){

    document.getElementById("watterId").style.height = "20px";
    document.getElementById("watterId").style.top = "436px";
    porcentaje = ( 10 / 200 ) * 100;

    myInterval = setInterval(increseWatter, 150);
}

function declaracion(){
    console.log('Declarado');
    var element = document.getElementById('buttonxd');

    console.log(element);
    if (element){
        element.onclick( iniciar );
    }
}


