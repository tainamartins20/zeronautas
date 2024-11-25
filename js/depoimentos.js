$(document).ready(function() {

    const depoimentos = $('.depoimento'); 
    const dots = $('.dot');
    const depoimentosContainer = $('.depoimentos')
    const totalDepoimentos = depoimentos.length;

    dots.eq(0).addClass('active');

    //Quando uma bolinha for clicada
    dots.click(function() {
        const index = $(this).data('index'); //Obter o índice da bolinha clicada


        //Atualiza a posição do slider
        const offset = -index * 100; //Move para a posição do elemento desejado
        depoimentosContainer.css('transform', `translateX(${offset}%)`);

        //Atualiza o estado ativo das bolinhas
        dots.removeClass('active');
        $(this).addClass('active')
    });
});