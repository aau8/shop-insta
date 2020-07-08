$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
	$('#accordion .accordion-link').on('click', f_acc);
  function f_acc(){
  //скрываем все кроме того, что должны открыть
    $('#accordion .acc-content').not($(this).next()).slideUp(500);
  // открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);
  }
$('.accordion-link').on('click', function(e) {
  // e.preventDefault;
  $('.accordion-link-img').toggleClass('accordion-link-img__active');
});

$(function() {
  var family = $('#family');
  var problem = $('.card-problem-bg')
  var close = $('.close')
  var card = $('.card')
  var cardProblem = $('.card-problem')

  family.click(function () {
    problem.toggleClass('card-problem-bg-active')
    card.toggleClass('card-active')
    cardProblem.toggleClass('card-problem-active')
  })
  close.click(function () {
    problem.toggleClass('card-problem-bg-active')
    card.toggleClass('card-active')
    cardProblem.toggleClass('card-problem-active')

  })
})
});