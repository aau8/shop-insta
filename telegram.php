<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$token = "1353767677:AAHafLB2ZPdCbrusj_h2p8SYXjaXFydBmd8"; // http://joxi.ru/v295MB7tzM6g72 - при создании бота в BotFather дается токен
$chat_id = "-447371515"; /* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates, где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее. http://joxi.ru/p27DqBgcWqBVXA - где потом взять chat_id */
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Заявка успешно отправлена";
} else {
  echo "Error";
}
?>