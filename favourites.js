// write js code here corresponding to favourites.html

var fevRowData=JSON.parse(localStorage.getItem("favourites"))

displayData(fevRowData)
fevRow=JSON.parse(localStorage.getItem("DeleteFevRow"))||[]

function displayData(Data){
    
    Data.forEach(function(el,index){
        var tr=document.createElement("tr");

        var td1=document.createElement("td")
        td1.innerText=el.matchNumber
        var td2=document.createElement("td")
        td2.innerText=el.teamA
        var td3=document.createElement("td")
        td3.innerText=el.teamB
        var td4=document.createElement("td")
        td4.innerText=el.date
        var td5=document.createElement("td")
        td5.innerText=el.vanue 
        var td6=document.createElement("td")
        td6.innerText="Delete"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            deleteRow(index)
        })
        
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function deleteRow(index){
    // fevRow.push(el)
   fevRowData.splice(index,10)
   localStorage.setItem("DeleteFevRow",JSON.stringify(fevRowData))
   console.log(event.target.parentNode.innerHTML="")
  
   var updetedData=JSON.parse(localStorage.getItem("DeleteFevRow"))
   
   displayData(updetedData)
   
}