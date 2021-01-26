let numbertext=document.querySelector("h2")
console.log(numbertext.textContent)

let increase=document.querySelector("#increase")
let decrease=document.querySelector("#decrease")
let reset=document.querySelector("#reset")
numbertext.style.color="grey"
console.log(decrease)
increase.addEventListener("click",function(event){
    if(numbertext.textContent=="Number"){
        numbertext.textContent=1;
    }
    else{
        numbertext.textContent++;   
    }
    if(numbertext.textContent>0)
    {
        numbertext.style.color="green"
    }
    else if(numbertext.textContent==0){
        numbertext.style.color="grey"
        }
})

decrease.addEventListener("click",function(event){
    if(numbertext.textContent=="Number"){
        numbertext.textContent=-1;
    }
    else{
        numbertext.textContent--;
    }
    if(numbertext.textContent<0)
    {
        numbertext.style.color="red"
    }
    else if(numbertext.textContent==0){
    numbertext.style.color="grey"
    }
})
