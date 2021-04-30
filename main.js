var pnames = [" Chicken Tandoori Pizza ",
              " Veg Supreme Pizza ",
              " Paneer Tikka Pizza ",
              " Deluxe Veggie Pizza ",
              " Veg Extravaganza Pizza "];

var number = ["1. ","2. ","3. ","4. ","5. "];
var pod = [];
var topi = [];

function getmenu(){
    document.getElementById("f").innerHTML=(number[0] + pnames[0])
    document.getElementById("s").innerHTML=(number[1] + pnames[1])
    document.getElementById("t").innerHTML=(number[2] + pnames[2])
    document.getElementById("fo").innerHTML=(number[3] + pnames[3])
    document.getElementById("fi").innerHTML=(number[4] + pnames[4])

    document.getElementById("get_menu").style.display = "none";
    document.getElementById("od").style.display = "block";
}
function cp() {
    pod.push("Chicken Tandoori Pizza")
    console.log(pod);
}
function vsp() {
    pod.push("Veg Supreme Pizza")
    console.log(pod);
}
function ptp() {
    pod.push("Paneer Tikka Pizza")
    console.log(pod);
}
function dvp() {
    pod.push("Deluxe Veggie Pizza")
    console.log(pod);
}
function vep() {
    pod.push("Veg Extravaganza Pizza")
    console.log(pod);
}

function add() {
    var topp = document.getElementById("add_item").value;
    topi.push(topp);
}
function finish() {
    document.getElementById("topa").innerHTML=topi;
    document.getElementById("piz").innerHTML=pod;
}