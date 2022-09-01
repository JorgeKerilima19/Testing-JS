//Create a function that types on the document the length of the user's input
//1
function StringLength(){
let answer=prompt("Write down what you want to evaluate: ");
if (typeof(answer)==="string"){
    answer=answer.trim();
    count=0;
    for (let width=0; width< answer.length;width++){
        count+=1;
    }
    document.write(`The string "${answer}" has ${count} characters<br/>`)
    
}
}
//2
const arrowFunction=(counter="")=>(!counter)? document.write("Invalid output <br/>"):document.write(`The input "${counter}" has ${counter.length} characters<br/>`);
/*calling functions
document.write("<b>Fist method...<br/></b>");
StringLength();
document.write("<b>The second method...<br/></b>");
document.write("\n");
arrowFunction();
arrowFunction("Neh");*/


//Create a function that returns sliced parts of their input

function Slicing(){
    word= prompt("Give me your word: ")
    slices= prompt("How many characters do you want to see: ")
    if (parseInt(slices)){
        slicedWord=word.slice(0,slices)
        document.write(`Your word ${word} has been sliced ${slices} time</br> The result is ${slicedWord}`)
    }else{
        alert("The slices should be a integer number")
        document.write("Error")
    }
}
/*calling function
Slicing()*/