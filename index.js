// Code your solutions in this file

const myArr = [];
function writeCards(name){
    
    for(let i = 0; i<name.length;i++){
        const message = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
        
        myArr.push(message);

    }
    return myArr;
}
function countDown(number){
    while(number >= 0 ){
        console.log(number);
        number--;
    }

}