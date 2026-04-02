
const form = document.getElementById("meu-form");
const mensagem = document.getElementById("mensagem-sucesso");

form.addEventListener("submit", function(event){
    event.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if(response.ok){
            mensagem.style.display = "block";
            form.reset();
        }else{
            alert("Erro ao enviar.");
        }
    });
});
