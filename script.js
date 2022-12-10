
let arr = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
]
arr.map(arrItem => parseInt(arrItem.age) )
arr.forEach(arrItem => {
    if(arrItem.name == "john"){
        arrItem.age = "19";
    }
})

let selectedValue = "";

function myFunction() {
   let selected = document.getElementById("dropdown-button");
   selectedValue = selected.options[selected.selectedIndex].text;
   console.log(selectedValue);
}  

function filter(){
     if(selectedValue === ""){
        alert("please select any profession");
    }
    console.log("insidefilter function" , selectedValue);
    console.log("mydata", arr);
    let result = arr.filter(arrItem => arrItem.profession === selectedValue);
    console.log("result",result);
}

