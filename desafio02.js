let minhaString = "Banana"
let nAs = 0


for (let index = 0; index < minhaString.length; index++) {
    const element = minhaString[index];
   
    
    if(element == "a"){
        nAs++
    }
}

console.log(`Existem ${nAs} As na frase ${minhaString}`)