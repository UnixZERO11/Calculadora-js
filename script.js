const buttoes = {
    b1: document.querySelector(".item-1"),
    b2: document.querySelector(".item-2"),
    b3: document.querySelector(".item-3"),
    b4: document.querySelector(".item-4"),
    b5: document.querySelector(".item-5"),
    b6: document.querySelector(".item-6"),
    b7: document.querySelector(".item-7"),
    b8: document.querySelector(".item-8"),
    b9: document.querySelector(".item-9"),
    b0: document.querySelector(".item-0"),
    bsoma: document.querySelector(".soma"),
    bsubtração: document.querySelector(".diminuir"),
    bmulti: document.querySelector(".multi"),
    bdivisão: document.querySelector(".dividir"),
    bresultado: document.querySelector(".resultado"),
    tela: document.querySelector(".tela"),
    limp: document.querySelector(".limp"),
    limp2: document.querySelector(".limp2"),
    raiz: document.querySelector(".raiz"),
    potencia: document.querySelector(".potencia"),
}




var valores = "";

function digitar(b){
   buttoes[b].addEventListener("click", () =>{
       valores += buttoes[b].innerText
       buttoes.tela.innerText = valores;
       
   })
}

function digitarPow(){
   valores += "^"
   buttoes.tela.innerText = valores;
}

function digitarRaiz(){
   valores += "R"
   buttoes.tela.innerText = valores;
}


function operação(){
    let position 
    let novo = ""
    if(valores.includes("+")){
       position = valores.indexOf("+")
       novo = +valores.slice(0, position) + +valores.substring(position + 1)
       buttoes.tela.innerText = novo
       buttoes.tela = null
    }
    else if(valores.includes("-")){
        position = valores.indexOf("-")
        novo = +valores.slice(0, position) - +valores.substring(position + 1)
        buttoes.tela.innerText = novo
        buttoes.tela = null
     }
     else if(valores.includes("*")){
        position = valores.indexOf("*")
        novo = +valores.slice(0, position) * +valores.substring(position + 1)
        buttoes.tela.innerText = novo
        buttoes.tela = null
     }
     else if(valores.includes("/")){
        position = valores.indexOf("/")
        novo = +valores.slice(0, position) / +valores.substring(position + 1)
        buttoes.tela.innerText = novo
        buttoes.tela = null
     }

     else if(valores.includes("^")){
      position = valores.indexOf("^")
      novo = (+valores.slice(0, position)) ** (+valores.substring(position + 1))
      buttoes.tela.innerText = novo
      buttoes.tela = null
      }
      else if(valores.indexOf("R") == 0){
         novo =  (+valores.slice(1)) ** (1/2);
         buttoes.tela.innerText = novo.toFixed(2)
         buttoes.tela = null
         }
   
}

function limpar(){
   valores = "";
   buttoes.tela = document.querySelector(".tela");
   buttoes.tela.innerText = valores;
}

function limpar2(){
   valores = valores.slice(0, valores.length -1)
   buttoes.tela.innerText = valores;
}


digitar("b1")
digitar("b2")
digitar("b3")
digitar("b4")
digitar("b5")
digitar("b6")
digitar("b7")
digitar("b8")
digitar("b9")
digitar("b0")
digitar("bsoma")
digitar("bsubtração")
digitar("bmulti")
digitar("bdivisão")


buttoes.bresultado.addEventListener("click", operação)
buttoes.limp2.addEventListener("click", limpar)
buttoes.potencia.addEventListener("click", digitarPow)
buttoes.raiz.addEventListener("click", digitarRaiz)
buttoes.limp.addEventListener("click", limpar2)
