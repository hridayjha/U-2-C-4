// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit",matchTable)
function matchTable(){
    event.preventDefault()
    var matchRow=JSON.parse(localStorage.getItem("schedule"))||[]

    var matchRowObj={
        matchNumber:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        vanue:masaiForm.venue.value

    }
    matchRow.push(matchRowObj)
    localStorage.setItem("schedule",JSON.stringify(matchRow))
}