// 1. Pega o botão "Aplicar filtros"
const botaoFiltrar = document.querySelector('.btn-filtrar');

// 2. Quando o botão for clicado, executa o filtro
botaoFiltrar.addEventListener('click', () => {
    // Pega o valor selecionado no filtro de categoria
    const categoriaSelecionada = document.querySelector('#categoria').value.toLowerCase();

    // Pega o valor digitado no filtro de preço
    const precoMaximo = parseFloat(document.querySelector('#preco').value);

    // Pega todas as cartas na tela
    const cartas = document.querySelectorAll('.carta');

    // 3. Para cada carta, verifica se ela deve aparecer ou não
    cartas.forEach((carta) => {
        const categoriaCarta = carta.dataset.categoria.toLowerCase();
        const precoCarta = parseFloat(carta.dataset.preco);

        let mostrar = true;

        // Se tiver filtro de categoria e a carta for diferente, esconde
        if (categoriaSelecionada && categoriaSelecionada !== categoriaCarta) {
            mostrar = false;
        }

        // Se tiver filtro de preço e a carta for mais cara, esconde
        if (!isNaN(precoMaximo) && precoCarta > precoMaximo) {
            mostrar = false;
        }

        // Mostra ou esconde a carta conforme os filtros
        if (mostrar) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});