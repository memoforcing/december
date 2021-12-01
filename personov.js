function onLoadingSetFocus(){
    document.getElementById('inputa').focus(); 
    document.getElementById("iniciarTestBtn").disabled = true;
    document.getElementById("iniciarTestNoRandoBtn").disabled = true;
}

function setFocusResposta()
{
    if(event.keyCode === 13){
        document.getElementById("inputb").focus();        
    }
}

//--------------------------------------------------
var podeUsarkeycode13 = true;
var faseTestb = false;
var x = 0;
function btnAddRow()
{
    
    if(event.keyCode === 13){
        if (podeUsarkeycode13){
            document.getElementById("iniciarTestBtn").disabled = false;
            document.getElementById("iniciarTestNoRandoBtn").disabled = false;
        if(faseTestb){  //apertando Enter na caixa de texto após iniciar o teste....
            iniciarFaseTestOrdenado();
        } else {
            var portV = document.getElementById('inputa').value;
            var englV = document.getElementById('inputb').value;    
        
            /* var table = document.getElementsByTagName('table')[0]; */
            var tabelaabody = document.getElementsByName('tabelaabody')[0];
            
            console.log("table = " + tabelaabody);
        
            var newRow = tabelaabody.insertRow(x);
        
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
        
            cell1.innerHTML = portV;
            cell2.innerHTML = englV;
        
            x = x + 1;    
            console.log("x --> " + x);

            /*-----------------------*/
            document.getElementById('inputa').value="";
            document.getElementById('inputb').value="";
            document.getElementById('inputa').focus();

            // document.getElementById('respttxt').innerHTML = "";
        }
    }
}
}

//----------------------------------------------------------------

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




function iniciarTest(){    

    disableBtnsIniciarTest();

    podeUsarkeycode13 = true;
    
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

    faseTest = true;

    arrayToInput();    

}

function disableBtnsIniciarTest(){
    document.getElementById("iniciarTestBtn").disabled = true;
    document.getElementById("iniciarTestNoRandoBtn").disabled = true;
    document.getElementById("conferirErrosBtn").disabled = true;
    document.getElementById("recomecarDoZeroBtn").disabled = true;
    document.getElementById("inverterColunasBtn").disabled = true;

    document.getElementById("getRowBtn").disabled = true;
    document.getElementById("editRowBtn").disabled = true;
    document.getElementById("insertRowBtn").disabled = true;
    document.getElementById("deleteTableRowBtn").disabled = true;
    
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
document.getElementById("inputb").focus(); 
if(event.keyCode === 13){
    faseTestOrdenado();
}    
}

var rodadas = 1
function faseTestOrdenado(){
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
rodadas += 1


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



/*-------------------------------------------------------------------------------*/

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

/*-------------------------------------------------------------------------------*/




/*--------------------------------------------------------------------------------*/





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

function clearTudo(){
    var yesno = confirm("Você vai perder a totalidade dos dados! Confirma?");
    if (yesno == true) {
            window.location.reload();
        } /*else {
            document.getElementById("inputa").focus();
        }  */  
}

//---------------------------------------------------


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
//---------------------------------------------------
var tablex = document.getElementById("tabelaa"),rIndex;
function getRow(){

console.log("merde");
for(var i = 1; i < tablex.rows.length; i++){

    tablex.rows[i].onclick = function()
        {
            console.log("merde");
            rIndex = this.rowIndex;
            console.log("rIndex " + rIndex);

            document.getElementById("inputa").value = this.cells[0].innerHTML;
            document.getElementById("inputb").value = this.cells[1].innerHTML;
        }
} 
}

function editRow(){
    
    tablex.rows[rIndex].cells[0].innerHTML = document.getElementById("inputa").value;
    tablex.rows[rIndex].cells[1].innerHTML = document.getElementById("inputb").value;
    
   console.log(rIndex)
}

//---------------------------------------------
function insertRow()
{
    var index,
        table = document.getElementById("tabelaa");
    
    for (var i = 1; i < table.rows.length; i++ )
        { 
            table.rows[i].onclick = function()
            {
                index = this.rowIndex; 
                var row = table.insertRow(index);

                                       
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1); 
                
                cell1.innerHTML = "";
                cell2.innerHTML = "";
                
                console.log("index = " + index);
                
            };    
        } 
    
}

//---------------------------------------------










