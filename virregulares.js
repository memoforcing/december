function onLoadingSetFocus(){
    document.getElementById('inputb').focus(); 
    document.getElementById("iniciarTestBtn").disabled = false;
    document.getElementById("iniciarTestNoRandoBtn").disabled = false;
}

function setFocusResposta()
{
    if(event.keyCode === 13){
        document.getElementById("inputb").focus();        
    }
}

function setFocusRespostaC()
{
    if(event.keyCode === 13){
        document.getElementById("inputc").focus();        
    }
}

function setFocusRespostaD()
{
    if(event.keyCode === 13){
        document.getElementById("inputd").focus();        
    }
}

//--------------------------------------------------

var getarray1 = [];
var getarray2 = [];
var getarray3 = [];
var getarray4 = [];

var getarray11 = []; 
var getarray22 = []; 
var getarray33 = []; 
var getarray44 = []; 

var getarrayBis1 = [];
var getarrayBis2 = [];
var getarrayBis3 = [];
var getarrayBis4 = [];


var getarrayZero1 = [];
var getarrayZero2 = [];
var getarrayZero3 = [];
var getarrayZero4 = [];



var contagemDeRodadas = 0;
var contagemDeRodadasZero = true;
faseTest = true;

function iniciarTest(){    

    disableBtnsIniciarTest();
        
    var table = document.getElementById('tabelaa');
    
    for (var i = 1; i < table.rows.length; i++)
        {      
            getarray1.push(table.rows[i].cells[0].innerHTML);
            getarray2.push(table.rows[i].cells[1].innerHTML);   
            getarray3.push(table.rows[i].cells[2].innerHTML);
            getarray4.push(table.rows[i].cells[3].innerHTML);                       
        }  
    if (contagemDeRodadas === 0){
        for (var i = 1; i < table.rows.length; i++)
        {      
            getarrayBis1.push(table.rows[i].cells[0].innerHTML);
            getarrayBis2.push(table.rows[i].cells[1].innerHTML);    
            getarrayBis3.push(table.rows[i].cells[2].innerHTML);
            getarrayBis4.push(table.rows[i].cells[3].innerHTML);                       
        }      
    }    

    if (contagemDeRodadasZero === true){
        for (var i = 1; i < table.rows.length; i++)
        {    
        getarrayZero1.push(table.rows[i].cells[0].innerHTML); 
        getarrayZero2.push(table.rows[i].cells[1].innerHTML); 
        getarrayZero3.push(table.rows[i].cells[2].innerHTML); 
        getarrayZero4.push(table.rows[i].cells[3].innerHTML); 
        }
    }

    console.log("getarray xx1 = " + getarray1);
    console.log("getarray xx2 = " + getarray2);

    arrayToInput();    

}

function arrayToInput(){
    document.getElementById('inputa').value = getarray1[0];
    document.getElementById('inputb').value = "";
    document.getElementById('inputc').value = "";
    document.getElementById('inputd').value = "";
    deleteTable();
    console.log("getarrayBis1 no arrayToInput()" + getarrayBis1)
    }

function deleteTable(){
    var  tamanhoTabela = tabelaa.rows.length;
    console.log("tamanhoTabela = " + tamanhoTabela);
    while (tamanhoTabela > 1) 
            {
                document.getElementById("tabelaa").deleteRow(1);
                tamanhoTabela = tamanhoTabela - 1; 
            }
    faseTestb = true;    
    x = 0;  // je remet le compteur x a zero pour initier la phase de test;     
    iniciarFaseTestOrdenado();     
    }
    
function iniciarFaseTestOrdenado(){
    console.log("Entrou na fase iniciarFaseTestOrdenado()");
    document.getElementById("inputb").focus(); 
    if(event.keyCode === 13){
        console.log("Entrou na fase iniciarFaseTestOrdenado() ENTER");
        faseTestOrdenado();
    }  
}    

var rodadas = 1
function faseTestOrdenado(){
    
    console.log("Entrou na fase FaseTestOrdenado()");
document.getElementById("contagemRodadas").innerHTML = "rodada " + contagemDeRodadas;
if (faseTestb){
    console.log("fase test " + faseTestb);
    //document.getElementById('inputa').value=getarray1[x];
    if (document.getElementById('inputb').value ===  getarray2[x] 
        && document.getElementById('inputc').value ===  getarray3[x]
        && document.getElementById('inputd').value ===  getarray4[x]){
        console.log("It looks ok... ");
        document.getElementById("resultadoP").innerHTML = "V";
        document.getElementById("resultadoP").style.color = "green";

    }  else {
        console.log("wrong... ");
        getarray11.push(getarray1[x]);
        getarray22.push(getarray2[x]);
        getarray33.push(getarray3[x]);
        getarray44.push(getarray4[x]);

        console.log("getarray11 = " + getarray11);
        console.log("getarray22 = " + getarray22);
        document.getElementById("resultadoP").innerHTML = "X"
        document.getElementById("resultadoP").style.color = "red";
    }
    if (x === (getarray1.length - 1)){
        console.log("OK Fim");
        document.getElementById('inputa').value="Fim";
        document.getElementById('inputb').value="Fim";
        document.getElementById('inputc').value="Fim";
        document.getElementById('inputd').value="Fim";
        document.getElementById("inputa").disabled = true;
        document.getElementById("inputb").disabled = true;
        document.getElementById("inputc").disabled = true;
        document.getElementById("inputd").disabled = true;

        document.getElementById("conferirErrosBtn").disabled = false;

        document.getElementById("iniciarTestBtn").disabled = true;
        document.getElementById("iniciarTestNoRandoBtn").disabled = true;
    } else {
        x = x + 1;
        document.getElementById('inputb').value="";
        document.getElementById('inputc').value="";
        document.getElementById('inputd').value="";
        document.getElementById('inputb').focus();  
        document.getElementById('inputa').value=getarray1[x]; 
    }            
}        
}

function conferirErros(){
    getarray1 = [];
    getarray2 = [];  
    getarray3 = [];
    getarray4 = [];// deletando os arrays para eles podem ser reusados.
    var tabelaabody = document.getElementsByName('tabelaabody')[0];
    for (var i = 0; i < getarray11.length; i++)
    {  
       
       var portV = getarray11[i];
       var englV = getarray22[i];
       var englp = getarray33[i];
       var englpp = getarray44[i];
       console.log("portV " + portV);
       console.log("portV " + englV);  
       
       // vamos inserir o array na tabela
       var newRow = tabelaabody.insertRow(i);
        
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
        
            cell1.innerHTML = portV;
            cell2.innerHTML = englV;
            cell3.innerHTML = englp;
            cell4.innerHTML = englpp;
    
    }  
    
    document.getElementById("inputa").disabled = false;
    document.getElementById("inputb").disabled = false;
    document.getElementById("inputc").disabled = false;
    document.getElementById("inputd").disabled = false;
    x = 0;
    
    
    
    console.log("getarray11.length nov = " + getarray11.length);
    
    
    if (getarray11.length == 0) {
        document.getElementById("recomecarDoZeroBtn").disabled = false;
        document.getElementById("inverterColunasBtn").disabled = false;
    rodadas += 1
    document.getElementById("iniciarTestBtn").disabled = true;
        document.getElementById("iniciarTestNoRandoBtn").disabled = true;    
    } else {
        document.getElementById("recomecarDoZeroBtn").disabled = true;
        document.getElementById("inverterColunasBtn").disabled = true;
        document.getElementById("iniciarTestBtn").disabled = false;
        document.getElementById("iniciarTestNoRandoBtn").disabled = false; 
    }
    document.getElementById("conferirErrosBtn").disabled = true;  
    
    
    getarray11 = [];
    getarray22 = [];
    getarray33 = [];
    getarray44 = [];
    console.log("getarray11 = " + getarray11);
    contagemDeRodadas = contagemDeRodadas + 1;
    contagemDeRodadasZero = false;
    document.getElementById("contagemRodadas").innerHTML = "Fim rodada " + contagemDeRodadas;
    document.getElementById("resultadoP").style.color = "black";
    rodadas += 1;   
    
    }



    function recomecarDoZero(){

        console.log("contagemDeRodadas = " + contagemDeRodadas);
        contagemDeRodadas = 0;
        contagemDeRodadasZero = false;
        console.log("contagemDeRodadas = " + contagemDeRodadas);
        podeUsarkeycode13 = false;
    
    //--------------------------------------------------------------------------
    
    var  tamanhoTabela = tabelaa.rows.length;
    console.log("tamanhoTabela = " + tamanhoTabela);
    while (tamanhoTabela > 1) 
            {
                document.getElementById("tabelaa").deleteRow(1);
                tamanhoTabela = tamanhoTabela - 1; 
            }
    
    
    //--------------------------------------------------------------------------
    
    getarray1 = [];
    getarray2 = [];
    getarray3 = [];
    getarray4 = [];

    getarray11 = []; 
    getarray22 = []; 
    getarray33 = []; 
    getarray44 = []; 
    
    
    for (i = 0; i < getarrayZero1.length; i++){
        //getarray1.push(getarrayBis1[i]);
        //getarray2.push(getarrayBis2[i]); 
        getarray1.push(getarrayZero1[i]);
        getarray2.push(getarrayZero2[i]); 
        getarray3.push(getarrayZero3[i]);
        getarray4.push(getarrayZero4[i]);      
    } 
    console.log("getarrrrraybis = " + getarrayBis1);
    console.log("getarrrrraybis = " + getarray1);
    x = 0;
    var tabelaabody = document.getElementsByName('tabelaabody')[0];
    
    for(i = 0; i < getarrayZero1.length; i++){
    
        
    
        var portV = getarray1[i]
        var englV = getarray2[i]
        var englp = getarray3[i]
        var englpp = getarray4[i]
    
        var newRow = tabelaabody.insertRow(i);
    
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
    
        cell1.innerHTML = portV;
        cell2.innerHTML = englV;
        cell3.innerHTML = englp;
        cell4.innerHTML = englpp;
    
    }
    
        getarray1 = [];
        getarray2 = [];
        getarray3 = [];
        getarray4 = [];

        getarray11 = []; 
        getarray22 = []; 
        getarray33 = []; 
        getarray44 = []; 
    
        document.getElementById("iniciarTestBtn").disabled = false;
        document.getElementById("iniciarTestNoRandoBtn").disabled = false;
        document.getElementById("conferirErrosBtn").disabled = true;
        document.getElementById("recomecarDoZeroBtn").disabled = true;
        document.getElementById("inverterColunasBtn").disabled = false;
    
        document.getElementById("getRowBtn").disabled = false;
        document.getElementById("editRowBtn").disabled = false;
        document.getElementById("insertRowBtn").disabled = false;
        document.getElementById("deleteTableRowBtn").disabled = false;
    
        
    }



    function iniciarTestNoRandom(){

        disableBtnsIniciarTest();
    
        podeUsarkeycode13 = true;  // usado para impedir o teclado enter para adicionar linhas
    
        var table = document.getElementById('tabelaa');
    
        ordenadoOuRandom = "random";
        getarray1 = [];
        getarray2 = [];
        getarray3 = [];
        getarray4 = [];
    
        for (var i = 1; i < table.rows.length; i++)
        {      
            getarray1.push(table.rows[i].cells[0].innerHTML);
            getarray2.push(table.rows[i].cells[1].innerHTML); 
            getarray3.push(table.rows[i].cells[2].innerHTML);
            getarray4.push(table.rows[i].cells[3].innerHTML);                       
        }  
        console.log("getarray xx1 = " + getarray1);
        console.log("getarray xx2 = " + getarray2);
    
        if (contagemDeRodadas === 0){
            for (var i = 1; i < table.rows.length; i++)
            {      
                getarrayBis1.push(table.rows[i].cells[0].innerHTML);
                getarrayBis2.push(table.rows[i].cells[1].innerHTML);     
                getarrayBis3.push(table.rows[i].cells[2].innerHTML);
                getarrayBis4.push(table.rows[i].cells[3].innerHTML);                         
            }      
        }     
    
        if (contagemDeRodadasZero === true){
            for (var i = 1; i < table.rows.length; i++)
            {    
                getarrayZero1.push(table.rows[i].cells[0].innerHTML); 
                getarrayZero2.push(table.rows[i].cells[1].innerHTML); 
                getarrayZero3.push(table.rows[i].cells[2].innerHTML); 
                getarrayZero4.push(table.rows[i].cells[3].innerHTML); 
            }
        }
        
        
        
        for (g = 0; g < (getarray1.length*15); g++) {
            var chooseRow =  Math.floor(Math.random() * (getarray1.length));
                arrayrandom1.push(getarray1[chooseRow]); 
                arrayrandom2.push(getarray2[chooseRow]);
                arrayrandom3.push(getarray3[chooseRow]); 
                arrayrandom4.push(getarray4[chooseRow]);
        }    
    
        console.log(arrayrandom1);
        console.log(arrayrandom2);
    
        getarray1 = [];
        getarray2 = [];
        getarray3 = [];
        getarray4 = [];
    
    for (f = 0; f < arrayrandom1.length; f++)
                {
                    var equalsto = false;
                    areadeTransferencia1 = arrayrandom1[f];
                    areadeTransferencia2 = arrayrandom2[f];
                    areadeTransferencia3 = arrayrandom3[f];
                    areadeTransferencia4 = arrayrandom4[f];
                    
                    console.log("cleanarray.length = " + cleanarray1.length); // ajouté
                    
                    for (e = 0; e < cleanarray1.length; e++)
                        {
                            if (areadeTransferencia1 == cleanarray1[e])
                                {
                                    equalsto = true;
                                    { break;}                        
                                }
                        }
                            if (equalsto == false) 
                                {
                                    cleanarray1.push(areadeTransferencia1);
                                    cleanarray2.push(areadeTransferencia2);
                                    cleanarray3.push(areadeTransferencia3);
                                    cleanarray4.push(areadeTransferencia4);
    
                                    getarray1.push(areadeTransferencia1);
                                    getarray2.push(areadeTransferencia2);
                                    getarray3.push(areadeTransferencia3);
                                    getarray4.push(areadeTransferencia4);
                                    
                                    arrayLimpo1 = arrayLimpo1 + cleanarray1[e];                              
                                    arraylimpo2 = arraylimpo2 + cleanarray2[e];   
                                    arrayLimpo3 = arrayLimpo3+ cleanarray3[e];                              
                                    arraylimpo4 = arraylimpo4 + cleanarray4[e];   
                                    
                                    console.log("cleanarray 2110 = " + cleanarray1); 
                                    console.log("getarray1 2110 = " + getarray1);                             
                                }
                } 
    
                faseTest = true;
                arrayrandom1 = [];
                arrayrandom2 = [];
                arrayrandom3 = [];
                arrayrandom4 = [];

                cleanarray1 = [];
                cleanarray2 = [];
                cleanarray3 = [];
                cleanarray4 = [];
                
                
                arrayToInput();  
                
    }


    function disableBtnsIniciarTest(){
        document.getElementById("iniciarTestBtn").disabled = true;
        document.getElementById("iniciarTestNoRandoBtn").disabled = true;
        document.getElementById("conferirErrosBtn").disabled = true;
        document.getElementById("recomecarDoZeroBtn").disabled = true;
        document.getElementById("inverterColunasBtn").disabled = true;  

    }

var arrayrandom1 = [];
var arrayrandom2 = [];
var arrayrandom3 = [];
var arrayrandom4 = [];
var cleanarray1 =[];
var cleanarray2 =[];
var cleanarray3 =[];
var cleanarray4 =[];
var areadeTransferencia1;
var areadeTransferencia2;
var areadeTransferencia3;
var areadeTransferencia4;

var arrayLimpo1 = "";
var arraylimpo2 = "";
var arrayLimpo3 = "";
var arraylimpo4 = "";

var equalsto = false;

var shaped = 0;

var difTabArray;

//------------------------------
var tablex = document.getElementById("tabelaa"),rIndex;

var listen = new Audio();
/*
function activeSpeaker(){
    for(var i = 1; i < tablex.rows.length; i++){

        tablex.rows[i].onclick = function()
            {
                console.log("merde");
                rIndex = this.rowIndex;
                console.log("rIndex " + rIndex);
    
                document.getElementById("inputa").value = this.cells[0].innerHTML;
                document.getElementById("inputb").value = this.cells[1].innerHTML;

                let speek = rIndex;
               
               
                switch (speek){
                    case 1:
                        console.log("speek case = 1" + document.getElementById("inputb").value);
                        listen.src = "audiciao/iwanttowork.mp3";
                        break;
                    case 2:
                        console.log("speek case = 2");
                        listen.src = "audiciao/you.mp3";
                        break;    
                    case 3:
                        console.log("speek case = 1");
                        listen.src = "audiciao/he.mp3";
                        break;
                    case 4:
                        console.log("speek case = 2");
                        listen.src = "audiciao/she.mp3";
                        break;    
                    case 5:
                        console.log("speek case = 1");
                        listen.src = "audiciao/it.mp3";
                        break;
                    case 6:
                        console.log("speek case = 2");
                        listen.src = "audiciao/we.mp3";
                        break;  
                    case 7:
                        console.log("speek case = 2");
                        listen.src = "audiciao/youx.mp3";
                        break;    
                    case 8:
                        console.log("speek case = 1");
                        listen.src = "audiciao/they.mp3";
                        break;
                    case 9:
                        console.log("speek case = 2");
                        listen.src = "audiciao/theyF.mp3";
                        break;                                          
                } 
            }
    } 
}
*/
function activeSpeaker2(){
    for(var i = 1; i < tablex.rows.length; i++){

        tablex.rows[i].onclick = function()
            {
                console.log("merde");
                rIndex = this.rowIndex;
                console.log("rIndex " + rIndex);
    
                document.getElementById("inputa").value = this.cells[0].innerHTML;
                document.getElementById("inputb").value = this.cells[1].innerHTML;
                document.getElementById("inputc").value = this.cells[2].innerHTML;
                document.getElementById("inputd").value = this.cells[3].innerHTML;

                let speek = document.getElementById("inputa").value;
               
               
                switch (speek){
                    case "acordar":
                        console.log("speek case = 1" + document.getElementById("inputa").value);
                        listen.src = "audiciao/virregulares/acordarAwake.mp3";
                        speek = "";
                        break;
                    case "levantar":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/levantar.mp3";
                        speek = "";
                        break;    
                    case "ser/estar":
                        console.log("speek case = 1");
                        listen.src = "audiciao/virregulares/serestar.mp3";
                        speek = "";
                        break;
                    case "bater":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/bater.mp3";
                        speek = "";
                        break;    
                    case "tornar-se":
                        console.log("speek case = 1");
                        listen.src = "audiciao/virregulares/tornarse.mp3";
                        speek = "";
                        break;
                    case "começar":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/comecar.mp3";
                        speek = "";
                        break;  
                    case "suportar":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/suportar.mp3";
                        speek = "";
                        break;    
                    case "curvar":
                        console.log("speek case = 1");
                        listen.src = "audiciao/virregulares/curvar.mp3";
                        speek = "";
                        break;  
                        
                    case "apostar":                        
                        listen.src = "audiciao/virregulares/apostar.mp3";
                        speek = "";
                        break;
                    case "oferecer":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/oferecer.mp3";
                        speek = "";
                        break;    
                    case "amarrar":
                        console.log("speek case = 1");
                        listen.src = "audiciao/virregulares/amarrar.mp3";
                        speek = "";
                        break;
                    case "morder":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/morder.mp3";
                        speek = "";
                        break;    
                    case "sangrar":
                        console.log("speek case = 1");
                        listen.src = "audiciao/virregulares/sangrar.mp3";
                        speek = "";
                        break;
                    case "soprar":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/soprar.mp3";
                        speek = "";
                        break;  
                    case "quebrar":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/quebrar.mp3";
                        speek = "";
                        break;    
                    case "procriar":
                        console.log("speek case = 1");
                        listen.src = "audiciao/virregulares/procriar.mp3";
                        speek = "";
                        break;   

                    case "trazer":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/trazer.mp3";
                        speek = "";
                        break;    
                    case "construir":
                        console.log("speek case = 1");
                        listen.src = "audiciao/virregulares/construir.mp3";
                        speek = "";
                        break; 
        //--------------------------------------------------
        
        case "queimar*":
                        console.log("speek case = 1");
                        listen.src = "audiciao/virregulares/queimar.mp3";
                        speek = "";
                        break;  
                        
                    case "explodir*":                        
                        listen.src = "audiciao/virregulares/burst.mp3";
                        speek = "";
                        break;
                    case "comprar":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/buy.mp3";
                        speek = "";
                        break;    
                    case "lançar":
                        console.log("speek case = 1");
                        listen.src = "audiciao/virregulares/cast.mp3";
                        speek = "";
                        break;
                    case "escolher":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/choose.mp3";
                        speek = "";
                        break;    
                    case "aderir":
                        console.log("speek case = 1");
                        listen.src = "audiciao/virregulares/cling.mp3";
                        speek = "";
                        break;
                    case "vir":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/come.mp3";
                        speek = "";
                        break;  
                    case "cacarejar":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/crow.mp3";
                        speek = "";
                        break;    

                    case "pegar*":
                        console.log("speek case = 2");
                        listen.src = "audiciao/virregulares/catch.mp3";
                        speek = "";
                        break;    
                    // 09/12     
                    case "comer":
                        listen.src = "audiciao/virregulares/eat.mp3";
                        speek = "";
                        break; 
                    case "cortar":
                        listen.src = "audiciao/virregulares/cut.mp3";
                        speek = "";
                        break;                    
                    case "negociar":
                        listen.src = "audiciao/virregulares/deal.mp3";
                        speek = "";
                        break;      
                    case "cavar":
                        listen.src = "audiciao/virregulares/dig.mp3";
                        speek = "";
                        break;              
                    case "fazer":
                        listen.src = "audiciao/virregulares/do.mp3";
                        speek = "";
                        break;  
                    case "desenhar*":
                        listen.src = "audiciao/virregulares/draw.mp3";
                        speek = "";
                        break;  
                    case "beber":
                        listen.src = "audiciao/virregulares/drink.mp3";
                        speek = "";
                        break;
                    case "dirigir":
                        listen.src = "audiciao/virregulares/drive.mp3";
                        speek = "";
                        break;
                    case "residir":
                        listen.src = "audiciao/virregulares/dwell.mp3";
                        speek = "";
                        break;    
                        
                    // 10/12 
                    
                    case "cair":
                        listen.src = "audiciao/virregulares/fall.mp3";
                        speek = "";
                        break; 
                    case "alimentar":
                        listen.src = "audiciao/virregulares/feed.mp3";
                        speek = "";
                        break;                    
                    case "sentir":
                        listen.src = "audiciao/virregulares/feel.mp3";
                        speek = "";
                        break;      
                    case "lutar":
                        listen.src = "audiciao/virregulares/fight.mp3";
                        speek = "";
                        break;              
                    case "achar":
                        listen.src = "audiciao/virregulares/find.mp3";
                        speek = "";
                        break;  
                    case "fugir":
                        listen.src = "audiciao/virregulares/flee.mp3";
                        speek = "";
                        break;  
                    case "arremessar":
                        listen.src = "audiciao/virregulares/fling.mp3";
                        speek = "";
                        break;
                    case "voar":
                        listen.src = "audiciao/virregulares/fly.mp3";
                        speek = "";
                        break;
                    case "proibir":
                        listen.src = "audiciao/virregulares/forbid.mp3";
                        speek = "";
                        break;   
                    case "esquecer":
                        listen.src = "audiciao/virregulares/forget.mp3";
                        speek = "";
                        break;    
                    case "engatinhar":
                        listen.src = "audiciao/virregulares/creep.mp3";
                        speek = "";
                        break;    


                        // 11/12 
                    
                    case "perdoar":
                        listen.src = "audiciao/virregulares/forgive.mp3";
                        speek = "";
                        break; 
                    case "congelar":
                        listen.src = "audiciao/virregulares/freeze.mp3";
                        speek = "";
                        break;                    
                    case "dirigir":
                        listen.src = "audiciao/virregulares/drive.mp3";
                        speek = "";
                        break;      
                    case "obter*":
                        listen.src = "audiciao/virregulares/get.mp3";
                        speek = "";
                        break;              
                    case "dar":
                        listen.src = "audiciao/virregulares/give.mp3";
                        speek = "";
                        break;  
                    case "ir":
                        listen.src = "audiciao/virregulares/go.mp3";
                        speek = "";
                        break;  
                    case "crescer":
                        listen.src = "audiciao/virregulares/grow.mp3";
                        speek = "";
                        break;
                    case "pendurar":
                        listen.src = "audiciao/virregulares/hang.mp3";
                        speek = "";
                        break;
                    case "ter":
                        listen.src = "audiciao/virregulares/have.mp3";
                        speek = "";
                        break;   
                    case "ouvir":
                        listen.src = "audiciao/virregulares/hear.mp3";
                        speek = "";
                        break;    
                    case "puxar":
                        listen.src = "audiciao/virregulares/heave.mp3";
                        speek = "";
                        break;  

                    case "esconder":
                        listen.src = "audiciao/virregulares/hide.mp3";
                        speek = "";
                        break;   
                    case "segurar":
                        listen.src = "audiciao/virregulares/hold.mp3";
                        speek = "";
                        break;    
                    case "bater/atingir":
                        listen.src = "audiciao/virregulares/hit.mp3";
                        speek = "";
                        break;  
            //          12/12  

                    case "machucar":
                        listen.src = "audiciao/virregulares/hurt.mp3";
                        speek = "";
                        break; 
                    case "manter":
                        listen.src = "audiciao/virregulares/keep.mp3";
                        speek = "";
                        break;                    
                    case "ajoelhar":
                        listen.src = "audiciao/virregulares/kneel.mp3";
                        speek = "";
                        break;      
                    case "tricotar":
                        listen.src = "audiciao/virregulares/knit.mp3";
                        speek = "";
                        break;              
                    case "saber":
                        listen.src = "audiciao/virregulares/know.mp3";
                        speek = "";
                        break;  
                    case "deitar":
                        listen.src = "audiciao/virregulares/lay.mp3";
                        speek = "";
                        break;  
                    case "conduzir":
                        listen.src = "audiciao/virregulares/lead.mp3";
                        speek = "";
                        break;
                    case "pular":
                        listen.src = "audiciao/virregulares/leap.mp3";
                        speek = "";
                        break;
                    case "aprender":
                        listen.src = "audiciao/virregulares/learn.mp3";
                        speek = "";
                        break;   
                    case "deixar":
                        listen.src = "audiciao/virregulares/leave.mp3";
                        speek = "";
                        break;    
                    case "emprestar":
                        listen.src = "audiciao/virregulares/lend.mp3";
                        speek = "";
                        break;  

                    case "deixar*":
                        listen.src = "audiciao/virregulares/let.mp3";
                        speek = "";
                        break;   
                    case "deitar/colocar":
                        listen.src = "audiciao/virregulares/lie.mp3";
                        speek = "";
                        break;    
                    case "ascender":
                        listen.src = "audiciao/virregulares/light.mp3";
                        speek = "";
                        break;  
                    case "perder":
                        listen.src = "audiciao/virregulares/lose.mp3";
                        speek = "";
                        break;   
                    case "fazer/criar":
                        listen.src = "audiciao/virregulares/make.mp3";
                        speek = "";
                        break;    
                    case "significar":
                        listen.src = "audiciao/virregulares/mean.mp3";
                        speek = "";
                        break;  
                    case "encontrar":
                        listen.src = "audiciao/virregulares/meet.mp3";
                        speek = "";
                        break;   
    
                    case "participar":
                        listen.src = "audiciao/virregulares/partake.mp3";
                        speek = "";
                        break;   
                    case "pagar":
                        listen.src = "audiciao/virregulares/pay.mp3";
                        speek = "";
                        break;    
                    case "custar":
                        listen.src = "audiciao/virregulares/cost.mp3";
                        speek = "";
                        break;        



                    // 13/12  
                    
                    
                    case "colocar":
                        listen.src = "audiciao/virregulares/put.mp3";
                        speek = "";
                        break;  
                    case "desistir*":
                        listen.src = "audiciao/virregulares/quit.mp3";
                        speek = "";
                        break;
                    case "ler":
                        listen.src = "audiciao/virregulares/read.mp3";
                        speek = "";
                        break;
                    case "andar de":
                        listen.src = "audiciao/virregulares/ride.mp3";
                        speek = "";
                        break;   
                    case "soar":
                        listen.src = "audiciao/virregulares/ring.mp3";
                        speek = "";
                        break;    
                    case "aumentar*":
                        listen.src = "audiciao/virregulares/rise.mp3";
                        speek = "";
                        break;  

                    case "correr":
                        listen.src = "audiciao/virregulares/run.mp3";
                        speek = "";
                        break;   
                    case "costurar":
                        listen.src = "audiciao/virregulares/sew.mp3";
                        speek = "";
                        break;    
                    case "dizer":
                        listen.src = "audiciao/virregulares/say.mp3";
                        speek = "";
                        break;  
                    case "serrar":
                        listen.src = "audiciao/virregulares/saw.mp3";
                        speek = "";
                        break;      
                    case "ver":
                        listen.src = "audiciao/virregulares/saw.mp3";
                        speek = "";
                        break;   
                    case "procurar*":
                        listen.src = "audiciao/virregulares/seek.mp3";
                        speek = "";
                        break;    
                    case "vender":
                        listen.src = "audiciao/virregulares/sell.mp3";
                        speek = "";
                        break;  
                    case "enviar":
                        listen.src = "audiciao/virregulares/send.mp3";
                        speek = "";
                        break;   
    
                    case "ajustar":
                        listen.src = "audiciao/virregulares/set.mp3";
                        speek = "";
                        break;   
                  



                        // 14/12  
                    
                    
                    case "derramar":
                        listen.src = "audiciao/virregulares/shed.mp3";
                        speek = "";
                        break;  
                    case "brilhar":
                        listen.src = "audiciao/virregulares/shine.mp3";
                        speek = "";
                        break;
                    case "atirar":
                        listen.src = "audiciao/virregulares/shoot.mp3";
                        speek = "";
                        break;
                    case "mostrar":
                        listen.src = "audiciao/virregulares/show.mp3";
                        speek = "";
                        break;   
                    case "despedaçar":
                        listen.src = "audiciao/virregulares/shred.mp3";
                        speek = "";
                        break;    
                    case "contrair":
                        listen.src = "audiciao/virregulares/shrink.mp3";
                        speek = "";
                        break;  

                    case "fechar":
                        listen.src = "audiciao/virregulares/shut.mp3";
                        speek = "";
                        break;   
                    case "cantar":
                        listen.src = "audiciao/virregulares/sing.mp3";
                        speek = "";
                        break;    
                    case "dizer":
                        listen.src = "audiciao/virregulares/say.mp3";
                        speek = "";
                        break;  
                    case "afundar":
                        listen.src = "audiciao/virregulares/sink.mp3";
                        speek = "";
                        break;      
                    case "sentar-se":
                        listen.src = "audiciao/virregulares/sit.mp3";
                        speek = "";
                        break;   
                    case "matar":
                        listen.src = "audiciao/virregulares/slay.mp3";
                        speek = "";
                        break;    
                    case "dormir":
                        listen.src = "audiciao/virregulares/sleep.mp3";
                        speek = "";
                        break;  
                    case "escorregar":
                        listen.src = "audiciao/virregulares/slide.mp3";
                        speek = "";
                        break;   
    
                    case "atirar":
                        listen.src = "audiciao/virregulares/sling.mp3";
                        speek = "";
                        break;   

                        //15/12

                     case "cheirar":
                        listen.src = "audiciao/virregulares/smell.mp3";
                        speek = "";
                        break;  
                    case "espancar":
                        listen.src = "audiciao/virregulares/smite.mp3";
                        speek = "";
                        break;
                    case "semear":
                        listen.src = "audiciao/virregulares/sow.mp3";
                        speek = "";
                        break;
                    case "falar":
                        listen.src = "audiciao/virregulares/speak.mp3";
                        speek = "";
                        break;   
                    case "soletrar":
                        listen.src = "audiciao/virregulares/spell.mp3";
                        speek = "";
                        break;    
                    case "gastar":
                        listen.src = "audiciao/virregulares/spend.mp3";
                        speek = "";
                        break;  
    
                    case "derramar*":
                        listen.src = "audiciao/virregulares/spill.mp3";
                       speek = "";
                        break;   
                    case "girar":
                        listen.src = "audiciao/virregulares/spin.mp3";
                        speek = "";
                        break;    
                    case "cuspir":
                        listen.src = "audiciao/virregulares/spit.mp3";
                        speek = "";
                        break;  
                    case "mimar":
                        listen.src = "audiciao/virregulares/spoil.mp3";
                        speek = "";
                        break;      
                    case "espalhar":
                        listen.src = "audiciao/virregulares/spread.mp3";
                        speek = "";
                        break;   
                    case "saltar":
                        listen.src = "audiciao/virregulares/spring.mp3";
                        speek = "";
                        break;    
                    case "ficar em pé":
                        listen.src = "audiciao/virregulares/stand.mp3";
                        speek = "";
                        break;  
                    case "travar":
                        listen.src = "audiciao/virregulares/stick.mp3";
                        speek = "";
                        break;   
        
                    case "picar":
                        listen.src = "audiciao/virregulares/sting.mp3";
                        speek = "";
                        break;


                        case "feder":
                            listen.src = "audiciao/virregulares/stink.mp3";
                           speek = "";
                            break;   
                        case "aspergir":
                            listen.src = "audiciao/virregulares/strew.mp3";
                            speek = "";
                            break;    
                        case "cavalgar":
                            listen.src = "audiciao/virregulares/stride.mp3";
                            speek = "";
                            break;  
                        case "atacar":
                            listen.src = "audiciao/virregulares/strike.mp3";
                            speek = "";
                            break;      
                        case "amarrar*":
                            listen.src = "audiciao/virregulares/string.mp3";
                            speek = "";
                            break;   
                        case "saltar":
                            listen.src = "audiciao/virregulares/spring.mp3";
                            speek = "";
                            break;    
                        case "esforçar-se":
                            listen.src = "audiciao/virregulares/strive.mp3";
                            speek = "";
                            break;  
                        case "jurar":
                            listen.src = "audiciao/virregulares/swear.mp3";
                            speek = "";
                            break;   
            
                        case "suar":
                            listen.src = "audiciao/virregulares/sweat.mp3";
                            speek = "";
                            break;
                          
                            case "varrer":
                                listen.src = "audiciao/virregulares/sweep.mp3";
                                speek = "";
                                break;      
                            case "inchar":
                                listen.src = "audiciao/virregulares/swell.mp3";
                                speek = "";
                                break;   
                            case "nadar":
                                listen.src = "audiciao/virregulares/swim.mp3";
                                speek = "";
                                break;    
                            case "balançar":
                                listen.src = "audiciao/virregulares/swing.mp3";
                                speek = "";
                                break;  
                            case "pegar":
                                listen.src = "audiciao/virregulares/take.mp3";
                                speek = "";
                                break;   
                
                        case "ensinar":
                            listen.src = "audiciao/virregulares/teach.mp3";
                            speek = "";
                            break;
                        case "roubar":
                            listen.src = "audiciao/virregulares/steal.mp3";
                            speek = "";
                            break;
        







           
                            case "rasgar":
                                listen.src = "audiciao/virregulares/tear.mp3";
                                speek = "";
                                break;    
                            case "contar":
                                listen.src = "audiciao/virregulares/tell.mp3";
                                speek = "";
                                break;  
                            case "pensar":
                                listen.src = "audiciao/virregulares/think.mp3";
                                speek = "";
                                break;      
                            case "prosperar":
                                listen.src = "audiciao/virregulares/thrive.mp3";
                                speek = "";
                                break;   
                            case "jogar":
                                listen.src = "audiciao/virregulares/throw.mp3";
                                speek = "";
                                break;    
                            case "empurrar":
                                listen.src = "audiciao/virregulares/thrust.mp3";
                                speek = "";
                                break;  
                            case "pisar":
                                listen.src = "audiciao/virregulares/tread.mp3";
                                speek = "";
                                break;   
                
                            case "entender":
                                listen.src = "audiciao/virregulares/understand.mp3";
                                speek = "";
                                break;
                              
                                case "acordar*":
                                    listen.src = "audiciao/virregulares/wake.mp3";
                                    speek = "";
                                    break;      
                                case "vestir":
                                    listen.src = "audiciao/virregulares/wear.mp3";
                                    speek = "";
                                    break;   
                                case "tecer":
                                    listen.src = "audiciao/virregulares/weave.mp3";
                                    speek = "";
                                    break;    
                                case "chorar":
                                    listen.src = "audiciao/virregulares/weep.mp3";
                                    speek = "";
                                    break;  
                                case "molhar":
                                    listen.src = "audiciao/virregulares/wet.mp3";
                                    speek = "";
                                    break;   
                    
                            case "vencer":
                                listen.src = "audiciao/virregulares/win.mp3";
                                speek = "";
                                break;
                            case "ventilar":
                                listen.src = "audiciao/virregulares/wind.mp3";
                                speek = "";
                                break;            
                                
                            case "torcer":
                                listen.src = "audiciao/virregulares/wring.mp3";
                                speek = "";
                                break;                                  
                        
                } 
            }
    } 
}

var getAux1 = [];
var getAux2 = [];
function inverterColunas(){            
    var table = document.getElementById('tabelaa');
        
    for (var i = 1; i < table.rows.length; i++)
        {      
            getAux1.push(table.rows[i].cells[0].innerHTML);
            getAux2.push(table.rows[i].cells[1].innerHTML);                       
        }  
        console.log("inverterColunas() = " + getAux1);
        console.log("inverterColunas() = " + getAux2); 
    
        //---------------------------------------------------- deletando tabela antiga
    
        var  tamanhoTabela = tabelaa.rows.length;
    console.log("tamanhoTabela = " + tamanhoTabela);
    while (tamanhoTabela > 1) 
            {
                document.getElementById("tabelaa").deleteRow(1);
                tamanhoTabela = tamanhoTabela - 1; 
            }
    
        //----------------------------------------------------
        
        
    var tabelaabody = document.getElementsByName('tabelaabody')[0];
    
    console.log("getAux2.length = " + getAux2.length);
    
    
    
    for(i = 0; i < getAux2.length; i++){        
    
        var portV = getAux2[i];
        var englV = getAux1[i];
        console.log("portV = " + portV);
        console.log("englV = " + englV); 
    
        var newRow = tabelaabody.insertRow(i);
    
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
    
        cell1.innerHTML = portV;
        cell2.innerHTML = englV;
    
    }   
    getAux1 = [];
    getAux2 = [];
    }

function deleteTableRow()
{
    var index,
        table = document.getElementById("tabelaa");
    
    for (var i = 1; i < table.rows.length; i++ )
        { 
            table.rows[i].onclick = function()
            {
                index = this.rowIndex;                        
                table.deleteRow(index);                
                i--;           
                
                console.log("index = " + index);
            };    
        } 
    
}