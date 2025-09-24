document.addEventListener('DOMContentLoaded', () => {

    const produtos = {
      lanchessimples: [
        { nome: "Misto Quente", descricao: "Presunto, queijo, alface, tomate, milho, batata, maionese", preco: 18 },
        { nome: "Americano", descricao: "Presunto, queijo, ovo, alface, tomate, maionese", preco: 21 },
        { nome: "Misto Bacon", descricao: "Presunto, queijo, bacon, alface, tomate, milho, batata, maionese", preco: 23 }
      ],
      lancheshamburguer: [
        { nome: "X-Burguer", descricao: "Hambúrguer, queijo, tomate, catupiry", preco: 16 },
        { nome: "X-Salada", descricao: "Hambúrguer, presunto, queijo, alface, tomate, catupiry", preco: 21 },
        { nome: "X-Egg", descricao: "Hambúrguer, presunto, queijo, ovo, tomate, catupiry", preco: 22 },
        { nome: "X-Bacon", descricao: "Hambúrguer, presunto, queijo, bacon, tomate, catupiry", preco: 25 },
        { nome: "X-Tudo", descricao: "Hambúrguer, presunto, queijo, bacon, ovo, alface, tomate, catupiry", preco: 30 },
        { nome: "X-Tudo Duplo", descricao: "2 Hambúrgueres, presunto, queijo, 2 ovos, bacon, alface, tomate, catupiry", preco: 40 }
      ],
      lanchescachorro: [
        { nome: "Tradicional", descricao: "Molho, salsicha, alface, tomate, milho, batata, catchup, maionese", preco: 15 },
        { nome: "Especial", descricao: "Molho, salsicha, alface, tomate, milho, batata, presunto e queijo", preco: 20 },
        { nome: "Tudo", descricao: "Molho, salsicha, alface, tomate, milho, batata, presunto, queijo, bacon, hambúrguer", preco: 30 }
      ],
      lanchesfrango: [
        { nome: "X-Frango Salada", descricao: "Frango, presunto, queijo, alface, tomate, catupiry", preco: 30 },
        { nome: "X-Frango Bacon", descricao: "Frango, presunto, queijo, bacon, tomate, catupiry", preco: 35 },
        { nome: "X-Frango Tudo", descricao: "Frango, presunto, queijo, alface, tomate, bacon, ovo e catupiry", preco: 40 }
      ],
      lanchesfile: [
        { nome: "X-Filé", descricao: "Filé, queijo, alface, tomate, catupiry", preco: 35 },
        { nome: "Bauru", descricao: "Filé, queijo, alface, tomate, bacon, catupiry", preco: 40 },
        { nome: "X-Filé Tudo", descricao: "Filé, presunto, queijo, alface, tomate, bacon, ovo, catupiry", preco: 45 }
      ],
      adicionais: [
        { nome: "Hambúrguer", preco: 5 }, { nome: "Bacon", preco: 6 }, { nome: "Queijo/Presunto", preco: 6 }, { nome: "Cheddar/Catupiry", preco: 5 }, { nome: "Salsicha", preco: 3 }, { nome: "Ovo", preco: 3 }, { nome: "Milho", preco: 3 }, { nome: "Batata Palha", preco: 3 }
      ],
      porcoes: [
        { nome: "Batata Frita (Meia)", preco: 20 }, { nome: "Batata Frita (Inteira)", preco: 30 }, { nome: "Batata Queijo e Bacon (Meia)", preco: 40 }, { nome: "Batata Queijo e Bacon (Inteira)", preco: 52 }, { nome: "Batata Completa (Meia)", preco: 52 }, { nome: "Batata Completa (Inteira)", preco: 58 }, { nome: "Frango à Passarinho (Meia)", preco: 50 }, { nome: "Frango à Passarinho (Inteira)", preco: 58 }, { nome: "Frango à Passarinho Queijo e Bacon (Meia)", preco: 58 }, { nome: "Frango à Passarinho Queijo e Bacon (Inteira)", preco: 65 }, { nome: "Calabresa Acebolada (Meia)", preco: 30 }, { nome: "Calabresa Acebolada (Inteira)", preco: 50 }, { nome: "Filé na Chapa (Meia)", preco: 55 }, { nome: "Filé na Chapa (Inteira)", preco: 90 }, { nome: "Filé de Frango na Chapa (Meia)", preco: 35 }, { nome: "Filé de Frango na Chapa (Inteira)", preco: 60 }
      ],
      bebidas: [
        { nome: "Refrigerante lata 350ml", preco: 6 }, { nome: "Suco pequeno 330ml", preco: 7 }, { nome: "Suco grande 900ml", preco: 15 }, { nome: "Coca Cola 2L", preco: 15 }, { nome: "Refrigerante sabores 2L", preco: 14 }, { nome: "Jaboti 2L", preco: 8 }, { nome: "Água sem gás", preco: 4 }, { nome: "Água com gás", preco: 5 }, { nome: "H2O 500ml", preco: 7 }, { nome: "H2O 1,5L", preco: 15 }, { nome: "Cerveja lata 350ml", preco: 6 }
      ]
    };

    // --- ELEMENTOS DA DOM ---
    const mainContent = document.querySelector('main');
    const listaCarrinho = document.getElementById('lista-carrinho');
    const valorTotal = document.getElementById('valor-total');
    const quantidadeCarrinho = document.getElementById('quantidade-carrinho');
    const valorTotalPopupValor = document.getElementById('valor-total-popup-valor');
    const popupCarrinho = document.getElementById('popup-carrinho');
    const btnFinalizar = document.getElementById('btn-finalizar');
    const btnFechar = document.getElementById('btn-fechar');
    const btnEnviar = document.getElementById('btn-enviar');

    // --- ELEMENTOS DO NOVO POPUP ---
    const popupAdicionais = document.getElementById('popup-adicionais');
    const tituloAdicionais = document.getElementById('adicionais-titulo');
    const btnConcluirItem = document.getElementById('btn-concluir-item');
    const listaAdicionaisContainer = document.getElementById('lista-adicionais');
    const adicionaisContainer = document.getElementById('adicionais-container');
    const observacaoContainer = document.getElementById('observacao-container');
    const textoObservacao = document.getElementById('texto-observacao');
    const radiosAdicional = document.querySelectorAll('input[name="quer-adicional"]');
    const radiosObservacao = document.querySelectorAll('input[name="quer-observacao"]');

    let carrinho = [];
    let produtoSelecionado = null;
    let botaoAdicionarClicado = null;

    // --- FUNÇÕES DE LÓGICA DO CARRINHO ---
    function adicionarProduto(nome, preco, adicionais = [], observacao = "", botao) {
        let descricaoAdd = adicionais.length > 0 ? ` (c/ ${adicionais.map(a => a.nome).join(", ")})` : "";
        let obsAdd = observacao.trim() !== "" ? ` (Obs: ${observacao.trim()})` : "";
        let nomeFinal = nome + descricaoAdd + obsAdd;
        
        let precoFinal = preco + adicionais.reduce((total, adicional) => total + adicional.preco, 0);

        const existente = carrinho.find(item => item.nome === nomeFinal);
        if (existente) {
            existente.quantidade++;
        } else {
            carrinho.push({ nome: nomeFinal, preco: precoFinal, quantidade: 1 });
        }
        
        atualizarCarrinho();
        feedbackBotao(botao);
    }
    
    function feedbackBotao(botao) {
        if(!botao) return;
        
        botao.classList.add('added');
        botao.innerText = 'Adicionado ✓';
        botao.disabled = true;

        setTimeout(() => {
            botao.classList.remove('added');
            botao.innerText = 'Adicionar';
            botao.disabled = false;
        }, 1500);
    }

    function calcularTotal() {
        return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
    }

    function atualizarCarrinho() {
        const total = calcularTotal();
        const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);

        valorTotal.innerText = total.toFixed(2).replace('.', ',');
        valorTotalPopupValor.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
        quantidadeCarrinho.innerText = totalItens;
    }

    // --- FUNÇÕES DE MANIPULAÇÃO DA TELA (UI) ---
    function criarProduto(produto, container, isLanche = false) {
        const div = document.createElement('div');
        div.classList.add('produtos');

        div.innerHTML = `
          <div class="topo-produto">
            <div>
              <h4>${produto.nome}</h4>
              ${produto.descricao ? `<p class="descricao">${produto.descricao}</p>` : ""}
            </div>
            <div class="preco-controle">
              <h6>R$ ${produto.preco.toFixed(2).replace('.', ',')}</h6>
              <button class="btn-add">Adicionar</button>
            </div>
          </div>
        `;

        container.appendChild(div);

        const addBtn = div.querySelector(".btn-add");
        addBtn.addEventListener("click", (e) => {
            if (isLanche) {
                produtoSelecionado = produto;
                botaoAdicionarClicado = e.target;
                tituloAdicionais.innerText = `Opções para ${produto.nome}`;
                
                // Resetar e popular popup de opções
                resetarPopupOpcoes();
                produtos.adicionais.forEach(add => criarAdicional(add, listaAdicionaisContainer));
                popupAdicionais.classList.add('show');
            } else {
                adicionarProduto(produto.nome, produto.preco, [], "", e.target);
            }
        });
    }
    
    function resetarPopupOpcoes() {
        document.getElementById('adicional-nao').checked = true;
        document.getElementById('obs-nao').checked = true;
        adicionaisContainer.classList.add('hidden');
        observacaoContainer.classList.add('hidden');
        textoObservacao.value = "";
        listaAdicionaisContainer.innerHTML = "";
    }

    function criarAdicional(produto, container) {
        const div = document.createElement('div');
        div.classList.add('produtos');
        div.innerHTML = `
          <div class="topo-produto">
            <h4>${produto.nome}</h4>
            <div class="preco-controle">
              <h6>R$ ${produto.preco.toFixed(2).replace('.', ',')}</h6>
              <input type="checkbox" value="${produto.nome}" data-preco="${produto.preco}">
            </div>
          </div>
        `;
        container.appendChild(div);
    }

    function mostrarCarrinho() {
        listaCarrinho.innerHTML = '';

        if (carrinho.length === 0) {
            listaCarrinho.innerHTML = `<p class="carrinho-vazio">Seu carrinho está vazio.</p>`;
        } else {
            carrinho.forEach((item, index) => {
                const div = document.createElement('div');
                div.classList.add('item-carrinho');
                div.innerHTML = `
                  <div class="item-info">
                    <span>${item.quantidade}x ${item.nome}</span>
                    <span class="preco-item">R$ ${item.preco.toFixed(2).replace('.',',')}</span>
                  </div>
                  <div class="controle-quantidade">
                    <button data-index="${index}" class="diminuir">-</button>
                    <span>${item.quantidade}</span>
                    <button data-index="${index}" class="aumentar">+</button>
                  </div>
                `;
                listaCarrinho.appendChild(div);
            });

            const btnEsvaziarDinamico = document.createElement('button');
            btnEsvaziarDinamico.className = 'btn-esvaziar-estilo';
            btnEsvaziarDinamico.textContent = 'Esvaziar Carrinho';
            btnEsvaziarDinamico.onclick = () => {
                if (confirm("Tem certeza que deseja remover todos os itens do carrinho?")) {
                    carrinho = [];
                    atualizarCarrinho();
                    mostrarCarrinho();
                }
            };
            listaCarrinho.appendChild(btnEsvaziarDinamico);
        }
        document.body.classList.add('popup-aberto');
        popupCarrinho.classList.add('show');
    }

    function alterarQuantidade(index, delta) {
        carrinho[index].quantidade += delta;
        if (carrinho[index].quantidade <= 0) {
            carrinho.splice(index, 1);
        }
        mostrarCarrinho();
        atualizarCarrinho();
    }
    
    listaCarrinho.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        if (index === undefined) return;
        
        if (e.target.classList.contains('aumentar')) {
            alterarQuantidade(index, 1);
        } else if (e.target.classList.contains('diminuir')) {
            alterarQuantidade(index, -1);
        }
    });

    // --- LÓGICA DO FORMULÁRIO DINÂMICO ---
    const tipoPedidoRadios = document.querySelectorAll('input[name="tipo-pedido"]');
    const camposEntregaContainer = document.getElementById('campos-entrega-container');
    const formaPagamentoRadios = document.querySelectorAll('input[name="forma-pagamento"]');
    const campoTrocoContainer = document.getElementById('campo-troco-container');

    tipoPedidoRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            camposEntregaContainer.style.display = event.target.value === 'entrega' ? 'flex' : 'none';
        });
    });

    formaPagamentoRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            campoTrocoContainer.style.display = event.target.value === 'dinheiro' ? 'flex' : 'none';
        });
    });

    // --- MENU DE NAVEGAÇÃO INTELIGENTE ---
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section.tipos');

    mainContent.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (mainContent.scrollTop >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // --- EVENT LISTENERS GERAIS ---
    btnFinalizar.addEventListener('click', mostrarCarrinho);
    btnFechar.addEventListener('click', () => {
        document.body.classList.remove('popup-aberto');
        popupCarrinho.classList.remove('show');
    });

    // --- LÓGICA DO NOVO POPUP DE OPÇÕES ---
    radiosAdicional.forEach(radio => {
        radio.addEventListener('change', (e) => {
            adicionaisContainer.classList.toggle('hidden', e.target.value !== 'sim');
        });
    });

    radiosObservacao.forEach(radio => {
        radio.addEventListener('change', (e) => {
            observacaoContainer.classList.toggle('hidden', e.target.value !== 'sim');
        });
    });

    btnConcluirItem.addEventListener('click', () => {
        let adicionaisSelecionados = [];
        if (document.getElementById('adicional-sim').checked) {
            const checks = document.querySelectorAll('#lista-adicionais input[type=checkbox]:checked');
            checks.forEach(c => adicionaisSelecionados.push({ nome: c.value, preco: parseFloat(c.dataset.preco) }));
        }

        let observacao = "";
        if (document.getElementById('obs-sim').checked) {
            observacao = textoObservacao.value;
        }

        adicionarProduto(produtoSelecionado.nome, produtoSelecionado.preco, adicionaisSelecionados, observacao, botaoAdicionarClicado);
        popupAdicionais.classList.remove('show');
    });

    // ENVIO DO PEDIDO
    btnEnviar.addEventListener('click', () => {
        const nomeCliente = document.getElementById('nome-cliente').value.trim();
        const tipoPedidoRadio = document.querySelector('input[name="tipo-pedido"]:checked');

        if (carrinho.length === 0) { alert("Seu carrinho está vazio!"); return; }
        if (!nomeCliente) { alert("Por favor, preencha seu nome."); return; }
        if (!tipoPedidoRadio) { alert("Por favor, selecione o tipo de pedido (Entrega ou Retirada)."); return; }

        const tipoPedido = tipoPedidoRadio.value;
        const itensPedido = carrinho.map(p => `- ${p.quantidade}x ${p.nome}`).join('\n');
        const totalPedido = `R$ ${calcularTotal().toFixed(2).replace('.', ',')}`;
        
        let mensagem = `*NOVO PEDIDO - PANGOLA*\n\n*Cliente:* ${nomeCliente}\n`;

        if (tipoPedido === 'entrega') {
            const endereco = document.getElementById('endereco-cliente').value.trim();
            const formaPagamentoRadio = document.querySelector('input[name="forma-pagamento"]:checked');
            
            if (!endereco) { alert("Por favor, preencha seu endereço para entrega."); return; }
            if (!formaPagamentoRadio) { alert("Por favor, selecione a forma de pagamento."); return; }
            
            const formaPagamento = formaPagamentoRadio.value;
            let infoPagamento = `*Pagamento:* ${formaPagamento === 'dinheiro' ? 'Dinheiro' : 'Cartão'}\n`;

            if (formaPagamento === 'dinheiro') {
                const trocoPara = parseFloat(document.getElementById('troco-pedido').value);
                if (trocoPara && trocoPara >= calcularTotal()) {
                    const troco = trocoPara - calcularTotal();
                    infoPagamento += `*Levar troco para R$ ${trocoPara.toFixed(2).replace('.', ',')}* (Troco: R$ ${troco.toFixed(2).replace('.', ',')})\n`;
                } else if (trocoPara && trocoPara < calcularTotal()) {
                    alert("O valor para troco não pode ser menor que o total do pedido.");
                    return;
                }
            }
            
            mensagem += `*Tipo de Pedido:* ENTREGA\n*Endereço:* ${endereco}\n\n*Itens do Pedido:*\n${itensPedido}\n\n*Total: ${totalPedido}*\n${infoPagamento}`;

        } else { // Retirada
            mensagem += `*Tipo de Pedido:* RETIRADA NO LOCAL\n\n*Itens do Pedido:*\n${itensPedido}\n\n*Total: ${totalPedido}*\n`;
        }
        
        const originalButtonHTML = btnEnviar.innerHTML;
        btnEnviar.innerHTML = 'Enviando...';
        btnEnviar.disabled = true;

        setTimeout(() => {
            const url = `https://wa.me/5516988472113?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
            
            carrinho = [];
            atualizarCarrinho();
            
            document.body.classList.remove('popup-aberto');
            popupCarrinho.classList.remove('show');
            btnEnviar.innerHTML = originalButtonHTML;
            btnEnviar.disabled = false;
        }, 500);
    });

    // INICIALIZAR LISTAS DE PRODUTOS
    Object.keys(produtos).forEach(categoria => {
        const container = document.getElementById(`lista-${categoria}`);
        if (container) {
            const isLanche = categoria.startsWith("lanches");
            produtos[categoria].forEach(produto => criarProduto(produto, container, isLanche));
        }
    });

});