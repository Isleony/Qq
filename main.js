$(document).ready(function () {
    $('header button').click(function () {
        $('form').slidedown();
    })

    $('botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefult();
        const endereçoImagemNova = $('endereço-imagem-nova').val();
        const novoItem = $('<li> style="display: none" </li>');
        $(`< img scr="$(endereçoImagemNova)" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link" > 
        < a href="${endereçoImagemNova}" target="_blank" title="Ver imagemem tamanho real"
            Ver imagem em tamanho real  
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço-imagem-nova').val('')
    })
})

