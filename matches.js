// write js code here corresponding to matches.html
var matchData=JSON.parse(localStorage.getItem("schedule"))
displayData(matchData)

var fevMatch=JSON.parse(localStorage.getItem("favourites"))||[]
function displayData(Data){
    Data.forEach(function(el){
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
        td6.innerText="Add as Favourites"
        td6.style.color="green"
        td6.style.cursor="pointer"
         td6.addEventListener("click",function(){
             favouritesMatch(el)
         })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function  favouritesMatch(el){
      fevMatch.push(el)
      localStorage.setItem("favourites",JSON.stringify(fevMatch))
}