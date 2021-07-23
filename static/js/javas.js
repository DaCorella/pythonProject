function getSubtotal(valor){
    return (valor * 2.2046);
}
function getiva(valor){
    return (valor * 100);
}

function gettotalp(valor){
    return (valor / 1000);
}





function calculo() {
    var valor1,cantidad1,ds1,sub1,iva1,tp1;
    var valor=0,cantidad=0,ds=0,sub=0,iva=0,tp=0;
    valor1=document.getElementById("valor");
    cantidad1=document.getElementById("cantidad");
    valor = parseFloat(valor1.value);
    cantidad = parseFloat(cantidad1.value);
    ds1=document.getElementById("ds");
    sub1=document.getElementById("sub");
    iva1=document.getElementById("iva");
    iva = parseFloat(iva1.value);
    tp1=document.getElementById("tp");
    tp = parseFloat(tp1.value);
    sub=getSubtotal(valor,cantidad);
    iva=getiva(sub);
    tp=gettotalp(sub,iva);
    sub1.value=sub;
    iva1.value=iva;
    tp1.value=tp;
    ds1.value=0;

    
}
