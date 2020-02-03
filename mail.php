<?php

if($_POST["submit"]) {
    $recipient="benbackman54@gmail.com";
    $subject="Email from portfolio";
    $name=$_POST["name"];
    $Email=$_POST["Email"];
    $message=$_POST["message"];

    $mailBody="Name: $name\nEmail: $Email\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $name <$Email>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>