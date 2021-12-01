function onLoadingSetFocus(){
    document.getElementById('inputa').focus(); 
    document.getElementById("iniciarTestBtn").disabled = false;
    document.getElementById("iniciarTestNoRandoBtn").disabled = false;
}

function setFocusResposta()
{
    if(event.keyCode === 13){
        document.getElementById("inputb").focus();        
    }
}

//--------------------------------------------------

var getarray1 = [];
var getarray2 = [];
var getarray11 = []; 
var getarray22 = []; 
var getarrayBis1 = [];
var getarrayBis2 = [];
var getarrayZero1 = [];
var getarrayZero2 = [];



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
        }  
    if (contagemDeRodadas === 0){
        for (var i = 1; i < table.rows.length; i++)
        {      
            getarrayBis1.push(table.rows[i].cells[0].innerHTML);
            getarrayBis2.push(table.rows[i].cells[1].innerHTML);                       
        }      
    }    

    if (contagemDeRodadasZero === true){
        for (var i = 1; i < table.rows.length; i++)
        {    
        getarrayZero1.push(table.rows[i].cells[0].innerHTML); 
        getarrayZero2.push(table.rows[i].cells[1].innerHTML); 
        }
    }

    console.log("getarray xx1 = " + getarray1);
    console.log("getarray xx2 = " + getarray2);

    arrayToInput();    

}

function arrayToInput(){
    document.getElementById('inputa').value = getarray1[0];
    document.getElementById('inputb').value = "";
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
    if (document.getElementById('inputb').value ===  getarray2[x]){
        console.log("It looks ok... ");
        document.getElementById("resultadoP").innerHTML = "V";
        document.getElementById("resultadoP").style.color = "green";

    }  else {
        console.log("wrong... ");
        getarray11.push(getarray1[x]);
        getarray22.push(getarray2[x]);
        console.log("getarray11 = " + getarray11);
        console.log("getarray22 = " + getarray22);
        document.getElementById("resultadoP").innerHTML = "X"
        document.getElementById("resultadoP").style.color = "red";
    }
    if (x === (getarray1.length - 1)){
        console.log("OK Fim");
        document.getElementById('inputa').value="Fim";
        document.getElementById('inputb').value="Fim";
        document.getElementById("inputa").disabled = true;
        document.getElementById("inputb").disabled = true;
        document.getElementById("conferirErrosBtn").disabled = false;

        document.getElementById("iniciarTestBtn").disabled = true;
        document.getElementById("iniciarTestNoRandoBtn").disabled = true;
    } else {
        x = x + 1;
        document.getElementById('inputb').value="";
        document.getElementById('inputb').focus();  
        document.getElementById('inputa').value=getarray1[x]; 
    }            
}        
}

function conferirErros(){
    getarray1 = [];
    getarray2 = [];  // deletando os arrays para eles podem ser reusados.
    var tabelaabody = document.getElementsByName('tabelaabody')[0];
    for (var i = 0; i < getarray11.length; i++)
    {  
       
       var portV = getarray11[i];
       var englV = getarray22[i];
       console.log("portV " + portV);
       console.log("portV " + englV);  
       
       // vamos inserir o array na tabela
       var newRow = tabelaabody.insertRow(i);
        
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
        
            cell1.innerHTML = portV;
            cell2.innerHTML = englV;
    
    }  
    
    document.getElementById("inputa").disabled = false;
    document.getElementById("inputb").disabled = false;
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
    getarray11 = []; 
    getarray22 = []; 
    
    
    for (i = 0; i < getarrayZero1.length; i++){
        //getarray1.push(getarrayBis1[i]);
        //getarray2.push(getarrayBis2[i]); 
        getarray1.push(getarrayZero1[i]);
        getarray2.push(getarrayZero2[i]);      
    } 
    console.log("getarrrrraybis = " + getarrayBis1);
    console.log("getarrrrraybis = " + getarray1);
    x = 0;
    var tabelaabody = document.getElementsByName('tabelaabody')[0];
    
    for(i = 0; i < getarrayZero1.length; i++){
    
        
    
        var portV = getarray1[i]
        var englV = getarray2[i]
    
        var newRow = tabelaabody.insertRow(i);
    
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
    
        cell1.innerHTML = portV;
        cell2.innerHTML = englV;
    
    }
    
        getarray1 = [];
        getarray2 = [];
        getarray11 = []; 
        getarray22 = []; 
    
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
    
        for (var i = 1; i < table.rows.length; i++)
        {      
            getarray1.push(table.rows[i].cells[0].innerHTML);
            getarray2.push(table.rows[i].cells[1].innerHTML);                       
        }  
        console.log("getarray xx1 = " + getarray1);
        console.log("getarray xx2 = " + getarray2);
    
        if (contagemDeRodadas === 0){
            for (var i = 1; i < table.rows.length; i++)
            {      
                getarrayBis1.push(table.rows[i].cells[0].innerHTML);
                getarrayBis2.push(table.rows[i].cells[1].innerHTML);                       
            }      
        }     
    
        if (contagemDeRodadasZero === true){
            for (var i = 1; i < table.rows.length; i++)
            {    
            getarrayZero1.push(table.rows[i].cells[0].innerHTML); 
            getarrayZero2.push(table.rows[i].cells[1].innerHTML); 
            }
        }
        
        
        
        for (g = 0; g < (getarray1.length*15); g++) {
            var chooseRow =  Math.floor(Math.random() * (getarray1.length));
                    arrayrandom1.push(getarray1[chooseRow]); // new
                    arrayrandom2.push(getarray2[chooseRow]);
        }    
    
        console.log(arrayrandom1);
        console.log(arrayrandom2);
    
        getarray1 = [];
        getarray2 = [];
    
    for (f = 0; f < arrayrandom1.length; f++)
                {
                    var equalsto = false;
                    areadeTransferencia1 = arrayrandom1[f];
                    areadeTransferencia2 = arrayrandom2[f];
                    
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
    
                                    getarray1.push(areadeTransferencia1);
                                    getarray2.push(areadeTransferencia2);
                                    
                                    arrayLimpo1 = arrayLimpo1 + cleanarray1[e];                              
                                    arraylimpo2 = arraylimpo2 + cleanarray2[e];   
                                    
                                    console.log("cleanarray 2110 = " + cleanarray1); 
                                    console.log("getarray1 2110 = " + getarray1);                             
                                }
                } 
    
                faseTest = true;
                arrayrandom1 = [];
                arrayrandom2 = [];
                cleanarray1 = [];
                cleanarray2 = [];
                
                
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
var cleanarray1 =[];
var cleanarray2 =[];
var areadeTransferencia1;
var areadeTransferencia2;

var arrayLimpo1 = "";
var arraylimpo2 = "";

var equalsto = false;

var shaped = 0;

var difTabArray;

//------------------------------
var tablex = document.getElementById("tabelaa"),rIndex;

var listen = new Audio();

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

function activeSpeaker2(){
    for(var i = 1; i < tablex.rows.length; i++){

        tablex.rows[i].onclick = function()
            {
                console.log("merde");
                rIndex = this.rowIndex;
                console.log("rIndex " + rIndex);
    
                document.getElementById("inputa").value = this.cells[0].innerHTML;
                document.getElementById("inputb").value = this.cells[1].innerHTML;

                let speek = document.getElementById("inputb").value;
               
               
                switch (speek){
                    case "I want to work":
                        console.log("speek case = 1" + document.getElementById("inputb").value);
                        listen.src = "audiciao/iwanttowork.mp3";
                        speek = "";
                        break;
                    case "You are not sleeping":
                        console.log("speek case = 2");
                        listen.src = "audiciao/you.mp3";
                        speek = "";
                        break;    
                    case "He likes me":
                        console.log("speek case = 1");
                        listen.src = "audiciao/he.mp3";
                        speek = "";
                        break;
                    case "She doesn't love me":
                        console.log("speek case = 2");
                        listen.src = "audiciao/she.mp3";
                        speek = "";
                        break;    
                    case "It doesn't work":
                        console.log("speek case = 1");
                        listen.src = "audiciao/it.mp3";
                        speek = "";
                        break;
                    case "We are OK":
                        console.log("speek case = 2");
                        listen.src = "audiciao/we.mp3";
                        speek = "";
                        break;  
                    case "You are wrong":
                        console.log("speek case = 2");
                        listen.src = "audiciao/youx.mp3";
                        speek = "";
                        break;    
                    case "They called me":
                        console.log("speek case = 1");
                        listen.src = "audiciao/they.mp3";
                        speek = "";
                        break;
                    case "They wish you the best":
                        console.log("speek case = 2");
                        listen.src = "audiciao/theyF.mp3";
                        speek = "";
                        break;                                          
                } 
            }
    } 
}







    
