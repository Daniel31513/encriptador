function encriptar(){

    let mensagee=document.getElementById("encr").value;

    let codificado=mensagee.replace(/a/g,"enter")
        codificado=mensagee.replace(/e/g,"imes")
        codificado=mensagee.replace(/i/g,"ai")
        codificado=mensagee.replace(/o/g,"ober")
        codificado=mensagee.replace(/u/g,"ufat")

    
}

function desencriptar(){
    let mensajed=document.getElementById("desencr").value;

    let decodificado=mensajed.replace(/enter/g,"a")
        decodificado=mensajed.replace(/imes/g,"e")
        decodificado=mensajed.replace(/ai/g,"i")
        decodificado=mensajed.replace(/ober/g,"o")
        decodificado=mensajed.replace(/ufat/g,"u");
    
}