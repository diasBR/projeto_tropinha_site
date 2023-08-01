<?

# alterar a variavel abaixo colocando o seu email

$destinatario = "contato@projetotropinha.org";
$assunto = "Formulario Tropinha";

# $assunto = $_REQUEST['assunto'];
$motivo = $_REQUEST['motivo'];
$motoutros = $_REQUEST['motoutros'];
$nome = $_REQUEST['nome'];
$empresa = $_REQUEST['empresa'];
$endereco = $_REQUEST['endereco'];
$cidade = $_REQUEST['cidade'];
$estado = $_REQUEST['estado'];
$pais = $_REQUEST['pais'];
$cep = $_REQUEST['cep'];
$dddtel = $_REQUEST['dddtel'];
$tel = $_REQUEST['tel'];
$dddcel = $_REQUEST['dddcel'];
$cel = $_REQUEST['cel'];
$email = $_REQUEST['email'];
$mensagem = $_REQUEST['mensagem'];
$como = $_REQUEST['como'];
$outros = $_REQUEST['outros'];

 // monta o e-mail na variavel $body

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - TROPINHA" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Motivo do contato: " . $motivo . "\n";
$body = $body . "Outro motivo: " . $motoutros . "\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Empresa: " . $empresa . "\n";
$body = $body . "Endereco: " . $endereco . "\n";
$body = $body . "Cidade: " . $cidade . "\n";
$body = $body . "Estado: " . $estado . "\n";
$body = $body . "Pais: " . $pais . "\n";
$body = $body . "CEP: " . $cep . "\n";
$body = $body . "DDD: " . $dddtel . "\n";
$body = $body . "Tel: " . $tel . "\n";
$body = $body . "DDD: " . $dddcel . "\n";
$body = $body . "Celular: " . $cel . "\n";
$body = $body . "E-mail: " . $email . "\n";
$body = $body . "Mensagem: " . $mensagem . "\n";
$body = $body . "Como descobriu o site: " . $como . "\n";
$body = $body . "Outros: " . $outros . "\n\n";
$body = $body . "===================================" . "\n";

// envia o email
mail($destinatario, $assunto , $body, "From: $email\r\n");

// redireciona para a página de obrigado
header("location:obrigado.html");


?>