<!--
?php
    $email = $_REQUEST['email'];
    // tytuł wiadomości
    $subject = $_REQUEST['subject'];
    // treść wiadomości
    $content = $_REQUEST['content'];
    // nagłówki wiadomości oddzielone stałą PHP_EOL
    $headers = "From: <njulia12@tlen.pl>".PHP_EOL."Reply-To:
    <njulia12@tlen.pl>".PHP_EOL."Content-type: text/plain; charset=utf-8";
    // adres e-mail adresata - odbiorcy wiadomości
    $admin_email = "njulia12@tlen.pl";
    // wysyłanie maila za pomocą funkcji mail()
    if(mail($email, $subject, $content, $headers)) {
        echo '<p>E-mail został wysłany.</p>';
    }
    else echo '<p>Nie udało się wysłać wiadomości.</p>';
?>
-->

<!--Potrzeba HOSTINGU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1-->

<!--
?php
    //Jeżeli zmienna 'email' została wypełniona, wysyłamy wiadomość
    if(isset($_REQUEST['email']))
    {
        //Informacje o emailu, na który będzie wysyłana wiadomość
        $admin_email = "njulia12@tlen.pl";
        $email = $_REQUEST['email'];
        $subject = $_REQUEST['subject'];
        $content = $_REQUEST['content'];
        //Wysyłamy email
        mail($admin_email, "$subject", $content, "From: ". $email);
        //Komunikat potwierdzający
        echo "Dziękuję za kontakt!";
    }
?>
-->