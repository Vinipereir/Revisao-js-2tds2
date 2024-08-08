let metaLivros = 6;

let livroLidos = ["correr", "Jogos de herança", "pai rico & pai pobre", "A seleção do penta"];

console.log(" livros lidos ");
for (let i = 0; i < livroLidos.length; i++) {
    console.log(`- ${livroLidos[i]}`);
}

if (livroLidos.length >= metaLivros) {
    console.log(" Você atingiu sua meta de leitura!");
} else {
    console.log(`Você está progredindo! Faltam ${metaLivros - livroLidos.length} livros para atingir sua meta.`);
}