let string="aman";


function reverse(string){

let bag="";
for(let i=string.length;i>=0;i--){

bag+=string[i];

}
return bag;
}

let reverse=reverse(string);

if(string==reversed){

console.log("Palindrome");

}else{
console.log("Not a palindrome");


}