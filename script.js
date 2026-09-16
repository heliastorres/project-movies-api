    const campoBusca = document.getElementById('campoBusca');
    const botaoBuscar = document.getElementById('botaoBuscar');
    const resultado = document.getElementById('resultado');

    const apiKey = "e64e1e1c";

botaoBuscar.addEventListener('click', function() {
    const nomeFilme = campoBusca.value;

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${nomeFilme}`)
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(dados) {
            mostrarResultado(dados);
        });
});

function mostrarResultado(dados) {
    if (dados.Response === "False") {
        resultado.innerHTML = `<p>Filme não encontrado.</p>`;
        return;
    }

    resultado.innerHTML = `
        <h2>${dados.Title} (${dados.Year})</h2>
        <img src="${dados.Poster}" alt="Poster do filme">
        <p><strong>Gênero:</strong> ${dados.Genre}</p>
        <p><strong>Diretor:</strong> ${dados.Director}</p>
        <p><strong>Sinopse:</strong> ${dados.Plot}</p>
    `;
}