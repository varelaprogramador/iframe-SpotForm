//Utilize esse comando para setar o valor na primeira
const link = sessionStorage.getItem("dados");







const renderPreview = () => {
    const undTamanho = document.getElementById("und-tamanho").value;
    const undAltura = document.getElementById("und-altura").value;
    const undRadius = document.getElementById("und-radius").value;


    const valueTamanho = document.getElementById("number-tamanho").value + undTamanho;
    const valueAltura = document.getElementById("number-altura").value + undAltura;
    const valueRadius = document.getElementById("number-radius").value + undRadius;
    
    const aritmetric= undAltura;
    aritmetric== "%" ? document.getElementById('preview').style.height="500px": document.getElementById('preview').style.height="";


    const areaPreview = document.getElementById("preview");
    const code = "<iframe src=" + link + " width=" + valueTamanho + " height=" + valueAltura + " style='border-radius:"+valueRadius+"' ></iframe>";
    console.log(code);
    areaPreview.innerHTML = code;
    const linkCopy = document.getElementById("link-copy");

    linkCopy.value = code;
}
renderPreview();

document.getElementById("und-tamanho").addEventListener('change', renderPreview);
document.getElementById("und-altura").addEventListener('change', renderPreview);
document.getElementById("und-radius").addEventListener('change', renderPreview);
function voltar() {


    window.history.back();
}


function setValue(valor, input) {
    const und= "und-"+input.id.slice(7,14);

    console.log(und)
    const aritmetric= document.getElementById(und).value;
    
    if ((aritmetric=="%" && valor >= 1 && valor <= 100) || (aritmetric=="px" && valor >= 1 && valor <= 1080)) {
        
        
        input.style.border = "0px";
        input.style.borderRadius = ""
        input.placeholder = "";
        input.style.color = "black";
        renderPreview();
    }else
    {
        input.style.border = "1px solid red";
        input.style.borderRadius = "5px"
        input.placeholder = "Valor Inválido";
        input.style.color = "red";
        console.log(input)


    }

}




function copiar() {

    const copyText = document.getElementById("link-copy");
    const buttonCopy = document.getElementById("btn-copy");



    copyText.select();
    copyText.setSelectionRange(0, 99999);


    navigator.clipboard.writeText(copyText.value);
    buttonCopy.textContent = "Link Copiado!!";

}