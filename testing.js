function StringLength(){
let answer=prompt("Write down what you want to evaluate: ");
if (typeof(answer)==="string"){
    answer=answer.trim();
    count=0;
    for (let width=0; width< answer.length;width++){
        count+=1;
    }
    document.write(`The string "${answer}" has ${count} characters`)
    
}
}
const arrowFunction=(counter="")=>(!counter)? console.log("Invalid output"):console.log("Your input has been processed");

StringLength();
arrowFunction();
arrowFunction("La Madre");