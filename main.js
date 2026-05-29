onload = () =>{
        document.body.classList.remove("container");
};
function openPopup(){
    document.getElementById("popup").style.display="flex";
    document.getElementById("openBtn").style.display="none";
}

function closePopup(){
    document.getElementById("popup").style.display="none";
    document.getElementById("openBtn").style.display="block";
}

setTimeout(function () {
    document.getElementById("openBtn").style.display = "block";
}, 5000); // 15000 ms = 15s