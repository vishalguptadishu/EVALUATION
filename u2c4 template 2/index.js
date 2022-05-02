// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("sabmit",myfun)

var arr= JSON.parse(localStorage.getItem("alldata")) ||[]
function myfun(){
    var nmatch=document.querySelector("#matchNum").Value;
    var salectteama=document.querySelector("#teamA").value;
    var salectteamb=document.querySelector("#teamB").value;
    var evdate=document.querySelector("#date").value;
    var van=document.querySelector("#vanue").value;
    var obj={matchNum:nmatch,teamA:salectteama,teamB:salectteamb,date:evdate,vanue:van}
    arr.push(obj)
    localStorage.setItem("alldata",JSON.stringify(arr))


}