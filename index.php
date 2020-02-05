<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="res/main.css"/>
    <link rel="stylesheet" href="res/form.css"/>
    <link href="https://fonts.googleapis.com/css?family=ABeeZee&display=swap" rel="stylesheet">
    <script type="text/javascript" src="res/navbar.js"></script>
</head>
<body onload="createNavbar('Home')">
    <div id="navDiv"></div>
    <h1>Hello World</h1>
    <div name="formDiv">
        <form class="contact-form" action="contactform.php" method="post">
            <p>Join the Newsletter</p>
            <input type="email" name="email" placeholder="Your Email"> <p></p>
            <button type="submit" name="submit">Join Newsletter</button>
        </form>
    </div>
</body>