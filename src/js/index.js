/* passo 1 : pegar o botao de aplicar filtros do HTML e mandar pro JS */
const botaoFiltrar = (document.querySelector('.btn-filtrar'));

/* passso 2: escutar o clique do botao de aplicar filtros */
botaoFiltrar.addEventListener('click', function(){
    console.log('clicou no botão filtrar');

    /* passo 3: pegar os valores dos campos de categoria e preço */
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;

    /* passo 4: para cada carta, verificar se ela deve ter mostrada ou escondida baseado nos filtros que a pessoa digitou */
    const cartas = document.querySelectorAll('.carta');
    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;
        let mostrarCarta = true;
        console.log('a categoriaSelecionada foi:' , categoriaSelecionada)

        const temFiltroDeCategoria = categoriaSelecionada !== '';

            const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

            if(temFiltroDeCategoria &&
            cartaNaoBateComFiltroDeCategoria) {
                mostrarCarta = false;
            }

            const temFiltroDePreco = precoMaximoSelecionado !== '';
            const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat
            (precoMaximoSelecionado)

            if(precoMaximoSelecionado !== '' && parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado)){
                mostrarCarta = false;
            }

            if(mostrarCarta) {
                carta.classList.add("mostrar");
                 carta.classList.remove("esconder");
            }else {
                carta.classList.remove("mostrar");
                carta.classList.add("esconder");
            }
    });
});