function validacao(){
    let nome = document.getElementById("i_nome");
    let email = document.getElementById("i_email");
    let con_Email = document.getElementById("i_confEmail");
    let data = document.getElementById("i_data");

    estilo_input(nome, "#f45656", "#808080");
    estilo_input(email, "#f45656", "#808080");
    estilo_input(con_Email, "#f45656", "#808080");
    estilo_input(data, "#f45656", "#808080");

}


function estilo_input(input, cor_1, cor_2){
    
    var alert = document.getElementById("f_alert");

    if(!input.checkValidity()){
        alert.style.display = "block"
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        return input.style.border = `1px solid ${cor_2}`;
    }

}