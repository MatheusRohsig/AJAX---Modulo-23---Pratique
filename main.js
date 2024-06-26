document.addEventListener('DOMContentLoaded', function() {
    const nome = document.querySelector('#nome');
    const usuario = document.querySelector('#usuario');
    const repositorio = document.querySelector('#repositorio');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const link = document.querySelector('#link');
    const fotoPerfil = document.querySelector('#foto-perfil')


    fetch('https://api.github.com/users/MatheusRohsig')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        nome.innerText = json.name;
        usuario.innerText = json.login;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        repositorio.innerText = json.public_repos;
        link.href = json.html_url;
        fotoPerfil.src = json.avatar_url;
    })

})