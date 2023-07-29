const output = document.getElementById('output');
const cpbtn = document.getElementById('cpbtn');
const generator = document.getElementById('generator');
const passNumber = document.getElementById('number');
const captialLetter = document.getElementById('captialletter');
const smallLetter = document.getElementById('smallletter');
const symbol = document.getElementById('symbol');
const generateBtn = document.getElementById('generate');
const frm = document.querySelector('.frm');
cpbtn.addEventListener('click',async()=>{
    const pass = output.value;
    if(pass){
    await navigator.clipboard.writeText(pass);
    alert('passwrd copied');}
    else{
        alert('password is not generate')
    }


})
function passwordGenValue(min,max){

    const limitValue = max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limitValue)+min);

}
function numberPassValue(){
   return passwordGenValue(48,57);

}
function captPassValue(){
    return passwordGenValue(65,90);
}
function smallPassValue(){
    return passwordGenValue(97,122);
}
function symPassValue(){
    const symvalue = '~!@#$%^&*(){}:?><';
    return symvalue[Math.floor(Math.random()*symvalue.length)];
    
}

const fullFunArray = [{
    valuee : passNumber,
    fun : numberPassValue
 },{
    valuee : captialLetter,
    fun : captPassValue
 },{
    valuee : smallLetter,
    fun : smallPassValue
 },
{
    valuee : symbol,
    fun : symPassValue
}];

frm.addEventListener('submit',(e)=>{
 e.preventDefault();
 
 const genCount = generator.value;
 let generatoredPass = "";
 
const funArray = fullFunArray.filter(({valuee})=>valuee.checked);
for(i=0;i<genCount;i++){
const getLength = Math.floor(Math.random()*funArray.length);
    const conPass = funArray[getLength].fun();
     generatoredPass += conPass;
 }
 output.value = generatoredPass ;
});




