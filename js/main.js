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
  e.preventDefault;
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
  var shareIcon = $('.share-icon');
  var share = $('.share');
  var shareBg = $('.share-bg');
  var shareCard = $('.share-card');
  var shareCancel = $('.share__cancel');
  var body = $('body');

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
  // конец перехода по ссылке 
  // модальное окно share
  shareIcon.click(function () {
    share.toggleClass('share-active')
    shareBg.toggleClass('share-bg-active')
    shareCard.toggleClass('share-card-active')
    body.toggleClass('body-active')
  });
  shareCancel.click(function () {
    share.toggleClass('share-active')
    shareBg.toggleClass('share-bg-active')
    shareCard.toggleClass('share-card-active')
    body.toggleClass('body-active')
  });
  var url = document.location.href;
  var shareMessages = $('.share__messages');
  var successCopy = $('.success-copy');

  new Clipboard('.chare__ms-copy', {text: function(){ return url;}});
  
  function shareClose() {
    share.removeClass('share-active')
    shareBg.removeClass('share-bg-active')
    shareCard.removeClass('share-card-active')
    body.removeClass('body-active')
    shareMessages.removeClass('share__messages-active');
    successCopy.removeClass('success-copy-active');
  }
  $('.chare__ms-copy').click(function(){
    shareMessages.toggleClass('share__messages-active');
    successCopy.toggleClass('success-copy-active');
    setTimeout(function(){shareClose();}, 1500);
  });
  // конец модального окна share 
  })
});