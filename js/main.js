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
  var personality = $('#personality');
  var work = $('#work');
  var close = $('.close');
  var card = $('.card');
  var cardProblem = $('.card-problem');
  var problemFamily = $('#problem-family');
  var problemPersonality = $('#problem-personality');
  var problemWork = $('#problem-work');

  family.click(function () {
    card.toggleClass('card-active')
    problemFamily.toggleClass('card-problem-active')
  });
  personality.click(function () {
    card.toggleClass('card-active')
    problemPersonality.toggleClass('card-problem-active')
  });
  work.click(function () {
    card.toggleClass('card-active')
    problemWork.toggleClass('card-problem-active')
  });
  close.click(function () {
    card.toggleClass('card-active')
    cardProblem.removeClass('card-problem-active')
  });
  // при переходе по ссылке c id карточки с проблемой открывается модальное окно
  if (window.location.hash == "#problem-family") {
    card.toggleClass('card-active')
    problemFamily.toggleClass('card-problem-active')
  }
  if (window.location.hash == "#problem-personality") {
    card.toggleClass('card-active')
    problemPersonality.toggleClass('card-problem-active')
  }
  if (window.location.hash == "#problem-work") {
    card.toggleClass('card-active')
    problemWork.toggleClass('card-problem-active')
  }
})
});