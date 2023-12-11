const count =document.getElementById("counter");

const dec = ()=>{
    let value = parseInt(count.innerText);
    value = value -1;
    count.innerText = value
}
const Inc = ()=>{
    let value = parseInt(count.innerText);
    value = value + 1;
    count.innerText = value
}