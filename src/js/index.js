// 1. Pega o botão "Aplicar filtros"
const botaoFiltrar = document.querySelector('.btn-filtrar');

// 2. Quando o botão for clicado, executa o filtro
botaoFiltrar.addEventListener('click', () => {
    // Pega o valor selecionado no filtro de categoria
    const categoriaSelecionada = document.querySelector('#categoria').value.toLowerCase();

    // Pega o valor digitado no filtro de preço
    const precoMaximo = parseFloat(document.querySelector('#preco').value);

    // Pega todas as cartas na tela
    const livros = document.querySelectorAll('.livro');
 
    // 3. Para cada carta, verifica se ela deve aparecer ou não
    livros.forEach((livro) => {
        const categoriaLivros = livro.dataset.categoria.toLowerCase();
        const precoLivro = parseFloat(livro.dataset.preco);
 
        let mostrar = true;

        // Se tiver filtro de categoria e a carta for diferente, esconde
        if (categoriaSelecionada && categoriaSelecionada !== categoriaLivros) {
            mostrar = false;
        }

        // Se tiver filtro de preço e a carta for mais cara, esconde
        if (!isNaN(precoMaximo) && precoLivro > precoMaximo) {
            mostrar = false;
        }

        // Mostra ou esconde a carta conforme os filtros
        if (mostrar) {
            livro.classList.add('mostrar');
            livro.classList.remove('esconder');
        } else {
            livro.classList.remove('mostrar');
            livro.classList.add('esconder');
        }
    });
});