function validar(){
    user = document.getElementById("user");
    pwd = document.getElementById("pwd");

    if(!user.value) 
    alertWifi(`Usuário em branco. Informe um usuário!`,  false, 0, "../img/brilho2.gif", 30);
    else if 
    (!pwd.value) alertWifi(`Senha em branco. Informe uma senha!` , false, 0, "../img/brilho2.gif", 30);
    else {
        processLogin(user.value,pwd.value);
    }
   
}

function processLogin(user,pwd){
    file = "json/users.json";

    fetch(file)
    .then(response => response.json())
    .then(content => checkUserLogin(content,user,pwd))
    .catch(err => alert(`Problemas na leitura do JSON!`));
}
function checkUserLogin(content,user,pwd){
    var achouUser = false;
    for (var i=0; i<content.usuarios.length; i++){
        if ((content.usuarios[i].user == user) && (content.usuarios[i].pwd == pwd)){
            achouUser = true;
            break;
        }
    }
    if(achouUser) 
    window.location.href = "jogadores.html"
    else alertWifi ("Usuário inexistente,tente fazer o cadastro!",false, 0, "../img/brilho2.gif", 30);
    
}