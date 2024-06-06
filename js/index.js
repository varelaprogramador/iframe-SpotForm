const linkForm = document.getElementById("link-form");


const renderStatus=(status)=>{
    const areaStatus=document.getElementById("area-status");
    areaStatus.innerHTML="";

    let p=document.createElement('p');
        let span=document.createElement('span');
        
        p.textContent="Verificação Link status:";

    
       span.classList.add('status');

       span.id=`status-${status}`;

       areaStatus.appendChild(p);
       areaStatus.appendChild(span);
       console.log(status)

    

}
renderStatus();

function verificaLink(){

    const form=document.getElementById("form-inpts");

    if(linkForm.value.startsWith('https://www.spotform.com.br/form/')){
        
        renderStatus("good");

        if(!document.getElementById("btn-convert")){

        let buttonConvert=document.createElement('a');
        buttonConvert.classList.add('btn-next');
        buttonConvert.id="btn-convert";

        buttonConvert.textContent="Criar minha janela";

        buttonConvert.href="./preview.html";
        buttonConvert.setAttribute('onclick','resetInput()')



        form.appendChild(buttonConvert);

        }

        
    }else{
        if(document.getElementById("btn-convert")){
            document.getElementById("btn-convert").remove();
        }
        
        
        renderStatus("bad");
    }
    
    

}
function resetInput(){
    sessionStorage.setItem("dados",linkForm.value);
    
    console.log('resetou')
    linkForm.value="";

}

function voltar(){
    
    window.history.back();
}