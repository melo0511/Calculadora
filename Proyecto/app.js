const main = document.getElementById("main")
const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")

const signo = document.getElementById("signo")

const respuesta = document.getElementById("respuesta")

main.addEventListener("keyup", (()=>{

  let n1=Number(number1.value);
  let n2=Number(number2.value);
  const signos=["+","*", "/", "%"]
  // if (signo.value ==="+" ||signo.value === "-" ||signo.value === "X" ||signo.value === "/" ){ }
  // number1.map(element.signos){
  //   if
  // }

  

  if (signo.value === "+"){
    
    let operation = n1+n2
    respuesta.textContent = operation

  } else if(signo.value==="-"){

    let operation = n1-n2
    respuesta.textContent = operation

  } else if(signo.value==="*" || signo.value==="x" || signo.value==="X"){

    let operation = n1*n2
    respuesta.textContent = operation

  } else if(signo.value==="/"){

    let operation = n1/n2
    respuesta.textContent = operation

  } else if(signo.value==="%"){

    let operation = n1%n2
    respuesta.textContent = operation

  } else if(signo.value === Number){
    signo.value= ""

  }else (respuesta.textContent = "Ingrese Un Signo Valido")

}))
