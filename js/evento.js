function clicar(img){
    var modalJanela = document.getElementById("janelaModal");
    var modalImg = document.getElementById("imgModal");
    var modalButton = document.getElementById("fecharMod");

    modalJanela.style.display="block";
    modalImg.src=img;
    modalButton.onclick=function(){
        modalJanela.style.display="none"
    }
}