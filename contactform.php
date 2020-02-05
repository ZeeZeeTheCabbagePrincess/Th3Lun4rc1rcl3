<?php

if (isset($_POST['submit'])) {
    $mailFrom = $_POST['email'];

    $mailTo = "fakersonf3@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = $name." would like to join the newsletter."

    mail($mailTo, "Subscribe", $txt, $headers);
    header("Location: index.php?mailsend");
}