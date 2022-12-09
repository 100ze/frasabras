// helpers
function gi(id) {
    return document.getElementById(id)
}

function c(objeto) {
    console.log(objeto)
}

function mudar_texto_botao(id, texto) {
    const botao = gi(id)
    botao.textContent = texto
}

function retirar_numero(texto) {
    const re = /\D+/
    if (re.test(texto)) {
        return texto.match(re)[0]
    } else {
        return ""
    }
}

// criar um array com todos os botões
const botoes = [
    gi("botao_pppoe"),
    gi("botao_wifi"),
    gi("botao_senha_wifi"),
    gi("botao_senha_acesso"),
    gi("botao_porta")
]

// copiar texto dentro dos botões ao clicar
function copiar_conteudo_para_area_de_transferencia(evento) {
    const texto_botao = evento.target.textContent
    if (texto_botao) {
        navigator.clipboard.writeText(texto_botao)
    } else {
        alert("Campo vazio :/")
    }
}

// adicionar funcionalidade de copiar aos botões
botoes.forEach((elemento) => {
    elemento.addEventListener("click", copiar_conteudo_para_area_de_transferencia)
})

// atualizar o conteúdo dos botões PPPoE e WIFI
function atualizar_botoes_ao_mudar_pppoe(evento) {
    mudar_texto_botao("botao_pppoe", evento.target.value)

    // retirar números e colocar em caixa alta
    let texto_formatado = retirar_numero(evento.target.value)
    if (texto_formatado) {
        // adicionar prefixo e atualizar o texto do botão
        mudar_texto_botao(
            "botao_wifi",
            "FRASANET-" + texto_formatado.toUpperCase()
        )
    }
}
gi("campo_pppoe").addEventListener("input", atualizar_botoes_ao_mudar_pppoe)

// atualizar o conteúdo do botão "senha do WIFI"
function atualizar_botao_senha_wifi(evento) {
    mudar_texto_botao("botao_senha_wifi", evento.target.value)
}
gi("campo_senha_wifi").addEventListener("input", atualizar_botao_senha_wifi)