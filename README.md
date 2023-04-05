# hackaton-G8
hackaton group for Coding-BN

Team member: 
1) Qawi Zulkipli -Backend
2) Mimi Saiful - frontend
3) Dzulfaridz Ziziumiza - front-end
4) Khaliq Samad - frontend
5) Daniel Chua

---------------------------------------------------------

//NavBar


</html>
<html>
  <head>
    <style>
      /* Style the navbar */
      .navbar {
        overflow: hidden;
        background-color: #333;
        font-family: Arial, Helvetica, sans-serif;
      }

      /* Navbar links */
      .navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      /* Navbar search */
      .navbar form {
        float: right;
        margin-top: 10px;
        margin-right: 16px;
      }

      .navbar input[type=text] {
        padding: 6px;
        border: none;
        border-radius: 4px;
        margin-right: 10px;
      }

      .navbar button {
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .navbar button:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>

    <div class="navbar">
      <a href="#">Home</a>
      <a href="#">Graph</a>
      <a href="#">Input</a>
      <a href="#">Comparison</a>
      <a href="#">About Us</a>
      

      <form>
        <input type="text" placeholder="Search...">
        <button type="submit">Go</button>
      </form>
    </div>

  </body>
</html>

------------------------------------------------
//Carousel


<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        /* default stylings */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
  
        /* provides background color to body */
        body {
            background-color:black;
        }
  
        /* ----- container stylings: 
        -> centers the whole content of the page
        -> defines width and height for container ----- */
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: auto;
            width: 800px;
            height: 500px;
        }
        /* ----- end of container stylings ----- */
  
        /* provides padding to main heading */
        .main-heading {
            color:#308d46;
            padding: 2rem 0 2rem 0;
        }
  
        .content {
            position: relative;
        }
  
        /* ----- carousel content stylings ----- */
        /* places the carousel content on center of the carousel */
        .carousel-content {
            position: absolute;
            /*to center the content horizontally and vertically*/
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); 
            text-align: center;
            z-index: 50;
        }
        .carousel-heading {
            font-size: 3rem;
            color: #308d46;
            margin-bottom: 1rem;
        }
        /*----- end of carousel content stylings ----- */
  
        /* ----- slideshow stylings ----- */
        .slideshow {
            height: 70%;
            overflow: hidden; /* to hide slides in x-direction */
            position: relative;
        }
        /* wrapper which wraps all the slideshow images stylings */
        .slideshow-wrapper {
            display: flex;
            /* We give it width as 400% because we are making a 
               4 image carousel. If you want to make for example, 
               5 images carousel, then give width as 500%. */
            width: 400%;
            height: 100%;
            position: relative;
            /* you can change the animation settings from below */
            animation: slideshow 20s infinite;
         }
        /* define width and height for images*/
        .slide {
            width: 100%;
            height: 100%;
        }
        .slide-img {
            width: 100%;
            height: 100%;
            object-fit: cover; 
        }
        /* @keyframes are used to provide animations
           We make these settings for 4 image carousel.
           Make modification according to your needs. */
        @keyframes slideshow {
            0%  { left: 0; }
            10% { left: 0; }
            15% { left: -100%; }
            25% { left: -100%; }
            30% { left: -200%; }
            40% { left: -200%; }
            45% { left: -300%; }
            55% { left: -300%; }
            60% { left: -200%; }
            70% { left: -200%; }
            75% { left: -100%; }
            85% { left: -100%; }
            90% { left: 0%; }
        }
        /* ----- end of slideshow stylings ----- */
  
        /* ----- carousel control buttons stylings ----- */
        .slide-btn {
            background-color: #bbb;
            border-radius: 50%;
            border: .2rem solid green;
            width: 1.2rem;
            height: 1.2rem;
            outline: none;
            cursor: pointer;
            /* stylings for positioning the buttons at
               the bottom of the carousel */
            position: absolute;
            bottom: 3%;
            left: 50%;
            transform: translateX(-50%);
            z-index: 70;
        }
        /* As we provide position as absolute, 
        the buttons places one over the other. 
        So, we have to place them individually
        at their correct positions. */
        .slide-btn-1 {
            left: 45%;
        }
        .slide-btn-2 {
            left: 50%;
        }
        .slide-btn-3 {
            left: 55%;
        }
        .slide-btn-4 {
            left: 60%;
        }
        /* When we focus on the particular button, 
        the animation stops to that particular image 
        to which the button is associated. */
        .slide-btn-1:focus~.slideshow-wrapper {
            animation: none;
            left: 0;
        }
        .slide-btn-2:focus~.slideshow-wrapper {
            animation: none;
            left: -100%;
        }
        .slide-btn-3:focus~.slideshow-wrapper {
            animation: none;
            left: -200%;
        }
        .slide-btn-4:focus~.slideshow-wrapper {
            animation: none;
            left: -300%;
        }
        /* when we focus on the button, the background color changes */
        .slide-btn:focus {
            background-color: #308d46;
        }
        /* ----- end of carousel control buttons stylings ----- */
    </style>
    </head>
<body>
   
   
    <div class="container">
        <h1 class="main-heading">Finance App</h1>
        <div class="content">
            <!-- The content which is placed at the center of the carousel -->
            <div class="carousel-content">
                <!-- <h1 class="carousel-heading">
                    $$$
                </h1>
                <h3>Ca$h</h3> -->
            </div>
            <div class="slideshow">
                <!-- carousel control buttons -->
                <button class="slide-btn slide-btn-1"></button>
                <button class="slide-btn slide-btn-2"></button>
                <button class="slide-btn slide-btn-3"></button>
                <button class="slide-btn slide-btn-4"></button>
                <!-- carousel wrapper which contains all images -->
                <div class="slideshow-wrapper">
                    <div class="slide">
                        <img class="slide-img"
                            src=
"https://th.bing.com/th/id/R.0c4c38d8c192fd1cda158fea1bb9f176?rik=HFBEqsMtal59mQ&pid=ImgRaw&r=0" alt="image 1">
                    </div>
                    <div class="slide">
                        <img class="slide-img"
                            src=
"https://th.bing.com/th/id/R.f00b1fdce66a677a444f678b53dbef7e?rik=dv1NLUmMCsET4g&pid=ImgRaw&r=0" alt="image 2">
                    </div>
                    <div class="slide">
                        <img class="slide-img" src=
"https://th.bing.com/th/id/R.639b2c4816f44634f873df6bdb3e8e3b?rik=PQHdjXtE8Y789Q&riu=http%3a%2f%2fcarleton.ca%2ffinancialservices%2fwp-content%2fuploads%2ffs-banner.jpg&ehk=C8drAsOlHIsbe7UmchyJHRgeE3bVZfTlY0a8GYSrBVQ%3d&risl=&pid=ImgRaw&r=0" alt="image 3">
                    </div>
                    <div class="slide">
                        <img class="slide-img" src=
"https://www.surrey.ac.uk/sites/default/files/styles/banner_image_1500x470/public/2018-02/economics-and-finance-banner-image.jpg?itok=Fq_kxmXu" alt="image 4">
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>


-----------------------------------------------
//comparison page

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/comparison.css">
</head>

<body>
    <div class="navbar">
        <a href="#" class="href">Home</a>
        <a href="#" class="href">Graph</a>
        <a href="#" class="href">Input</a>
        <a href="#" class="href">Comparison</a>
        <a href="#" class="href">About us</a>
        <form action=""><input type="text" placeholder="Search..."><button type="submit" class="submit">Go</button>
        </form>
    </div>

    <!-- <h2 class="page-header">Comparison</h2> -->

    <div class="wrapper">
        <div class="searchitem">
            <form action="" class="form">
                <input type="text" class="searchinput" placeholder="Search" autocomplete="off" onkeyup="search()">
                <button class="submit" type="submit" placehodler="Search">Search</button>
            </form>
        </div>

        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
        </div>
    </div> 
</body>

</html>

//comparison.css

@import url('https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-family: 'Caladea' serif;
}

/* navbar */
.navbar {
    overflow: hidden;
    background-color: #1f2833;
    font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
    color: #45a29e;
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: smaller;
}

.navbar form {
    float: right;
    margin-top: 10px;
    margin-right: 16px;
}

.navbar input[type=text] {
    padding: 6px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
}

.navbar button {
    background-color: #45a29e;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.navbar button:hover {
    background-color: #45a049;
}

/* background */
body {
    background: linear-gradient(0deg, rgba(11, 12, 16, 0.95), rgba(11, 12, 16, 0.95)), url(../images/background.jpeg);
    justify-content: left;
    position:relative;
}

/* search/filter bar */

.searchitem {
    display: flex;
    position: absolute;
    transform: translate(-12.9%, -90%);
    
}

.form {
    display: flex;
    padding: 40px;
    gap: 20px;
    margin-left: 100 auto;
}

.searchinput {
    font-size: small;
    height: 30px;
}

button.submit {
    font-size: 15px;
    padding: 4px;
}

/* table */

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: 85%;
    background-color: fff;
    min-height: 300px;
    margin: 0 auto;
    border: 1px solid #ccc;
    position: absolute;
    transform: translate(9%, 30%);
}

table {
    width: 100%;
    border: 1px solid #ccc;
    border-collapse: collapse;

}

thead {
    background-color: #f5f5f5;
    color: aqua;

}

td, th {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
    color: #45a29e;

}

---------------------------------
UPDATED--
----

//LOGINPAGE
////HTML
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="../css/Loginpage.css" class="stylesheet">
</head>

<body>
	<!-- <h3 class="title">App Name</h3> -->
	<div class="container">
		<div class="main">
			<input type="checkbox" id="chk" aria-hidden="true">

			<div class="login">
				<div class="errormessage" id="errormessage"></div>
				<form class="form" id="loginform">
					<label for="chk" aria-hidden="true" id="login">Login</label>
					<input class="input" type="text" name="username" placeholder="Username" id="username" required="">
					<input class="input" type="password" name="pswd" placeholder="Password" id="password" required="">
					<button id="btn">Log in</button>
				</form>
			</div>

			<div class="register">
				<form class="form" id="regform">
					<label for="chk" aria-hidden="true" id="register">Register</label>
					<input class="input" type="text" name="txt" placeholder="Username" required="" id="un">
					<input class="input" type="email" name="email" placeholder="Email" required="" id="email">
					<input class="input" type="password" name="pswd" placeholder="Password" required="" id="pw">
					<button>Register</button>
				</form>
			</div>
		</div>
	</div>
	<script src="../javascript/Loginpage.js"></script>
</body>
</html>

////CSS
@import url('https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    font-size: 20px
}

body {
    background: linear-gradient(0deg, rgba(11, 12, 16, 0.95), rgba(11, 12, 16, 0.95)), url(../images/background.jpeg); 
}

 /* .div {
    width: 100%;
    text-align: center;
}

.title {
    display: inline-flex;
    color: #66fcf1;
    font-weight: bold;

}  */

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

}

.main {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #1f2833;
    max-height: 480px;
    overflow: hidden;
    width: 400px;
    border-radius: 12px;
    box-shadow: 7px 7px 10px 3px #45a29e;
    
}

.form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 3.65px;
    justify-content: center;
}

#chk {
    display: none;
}

.errormessage{
    color: red;
    font-size:10px;
    display: flex;
    justify-content: center;
    transform: translateY(1500%);
}
.login {
    position: relative;
    width: 100%;
    height: 100%;
}

.login label {
    margin: 24% 0 5%;
}

label {
    font-size: 2rem;
    justify-content: center;
    display: flex;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
    font-family: 'Caladea', serif;
}

#login {
    color: #66fcf1;
}

#register {
    color: #1f2833;
}

.input {
    width: 95%;
    height: 30px;
    padding: 10px;
    background-color: #e0dede;
    border: none;
    outline: none;
    border-radius: 3px;
    font-size: 14px;
}

.register {
    background: #66fcf1;
    border-radius: 20% / 5%;
    transform: translateY(5%);
    transition:.8s ease-in-out;
}

.register label {
    color: #66fcf1;
    transform: scale(.6); 
}

#chk:checked ~ .register {
    transform: translateY(-60%);
}

#chk:checked ~ .register label{
    transform:scale(1);
    margin: 10% 0 5%;
}

#chk:checked ~ .login label {
    transform: scale(.6);
    margin: 5% 0 5%;
}

.form button {
    width: 85%;
    height: 40px;
    margin: 12px auto 10%;
    color:#fff;
    background: #45a29e;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: .2s ease-in;
    font-size: 15px;
}

.form button:hover {
    background-color: rgb(75,175,178);
}

////JS
const form = document.getElementById('loginform');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errormessage = document.getElementById('errormessage');

console.log(usernameInput);
console.log(passwordInput);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
        // alert('Please enter a username and password');
        errormessage.textContent = 'Please enter a username and password';
        return;
    };

    // login(username, password);
    if (username === 'user' && password === 'user') {
        window.location.href = '../pages/homepage.html';
    } else {
        // alert('Invalid Credentials');
        errormessage.textContent = 'Invalid Credentials';
        setTimeout(() => {
            errormessage.style.display = 'none';
        }, 2000);
        usernameInput.value='';
        passwordInput.value='';
    };
});

const regform = document.getElementById('regform');
const unInput = document.getElementById('un');
const pwInput = document.getElementById('pw');
const emailInput = document.getElementById('email');

regform.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = unInput.value;
    const password = pwInput.value;
    const email = emailInput.value;

    if (!username || !password || !email) {
        alert('Please enter a username, password and email');
        return;
    };

    if (username === 'user' && password === 'user' && email === 'user@gmail.com') {
        window.location.href = '../pages/homepage.html';
    } else {
        alert('Invalid Credentials');
    };
});

------------------------------------------------------
//HOMEPAGE

////HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/homepage.css" class="stylesheet">
</head>

<body>
    <!-- navbar -->
    <div class="navbar">
        <a href="./homepage.html" class="href">Home</a>
        <a href="./graphpage.html" class="href">Graph</a>
        <a href="./inputpage.html" class="href">Input</a>
        <a href="./comparisonpage.html" class="href">Comparison</a>
        <a href="#" class="href">About us</a>
        <form action=""><input type="text" placeholder="Search..."><button type="submit" class="submit">Go</button>
        </form>
    </div>

    <!-- carousel -->
    <div class="container">
        <h1 class="main-heading main-heading--shadow" data-text="Finance App">Finance App</h1>
        <div class="content">
            <!-- The content which is placed at the center of the carousel -->
            <div class="carousel-content">
                <!-- <h1 class="carousel-heading">
                    $$$
                </h1>
                <h3>Ca$h</h3> -->
            </div>
            <div class="slideshow">
                <!-- carousel control buttons -->
                <button class="slide-btn slide-btn-1"></button>
                <button class="slide-btn slide-btn-2"></button>
                <button class="slide-btn slide-btn-3"></button>
                <button class="slide-btn slide-btn-4"></button>
                <!-- carousel wrapper which contains all images -->
                <div class="slideshow-wrapper">
                    <div class="slide">
                        <img class="slide-img"
                            src="https://th.bing.com/th/id/R.0c4c38d8c192fd1cda158fea1bb9f176?rik=HFBEqsMtal59mQ&pid=ImgRaw&r=0"
                            alt="image 1">
                    </div>
                    <div class="slide">
                        <img class="slide-img"
                            src="https://th.bing.com/th/id/R.f00b1fdce66a677a444f678b53dbef7e?rik=dv1NLUmMCsET4g&pid=ImgRaw&r=0"
                            alt="image 2">
                    </div>
                    <div class="slide">
                        <img class="slide-img"
                            src="https://th.bing.com/th/id/R.639b2c4816f44634f873df6bdb3e8e3b?rik=PQHdjXtE8Y789Q&riu=http%3a%2f%2fcarleton.ca%2ffinancialservices%2fwp-content%2fuploads%2ffs-banner.jpg&ehk=C8drAsOlHIsbe7UmchyJHRgeE3bVZfTlY0a8GYSrBVQ%3d&risl=&pid=ImgRaw&r=0"
                            alt="image 3">
                    </div>
                    <div class="slide">
                        <img class="slide-img"
                            src="https://www.surrey.ac.uk/sites/default/files/styles/banner_image_1500x470/public/2018-02/economics-and-finance-banner-image.jpg?itok=Fq_kxmXu"
                            alt="image 4">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- content -->
    <div class="containers">
        <div class="card">
            <div class="card-content">
                <h1>Welcome!</h1>
                <p>
                    We are very happy that you're willing to check out our service!<br>
                    The following are steps you could follow to use our features!
                </p>
                <br>
                <hr>
                <br>
                <h2>Firstly,</h2>
                <h4>Upload your photo into the App in the Input Page</h4>
                <h2>Secondly,</h2>
                <h4>Wait for the photo to be converted</h4>
                <h2>Thirdly,</h2>
                <h4>Once done, look in the Graph Page</h4>
                <h2>Lastly,</h2>
                <h4>The Graph will show your spending behaviour</h4>

                <h5 class="card-footer">And you can start analysing and budgeting!</h5>
            </div>
        </div>
    </div>
</body>

</html>

////CSS
@import url('https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-family: 'Caladea' serif;
}

body {
    background: linear-gradient(0deg, rgba(11, 12, 16, 0.98), rgba(11, 12, 16, 0.98)), url(../images/background.jpeg);
}

/* navbar */
.navbar {
    overflow: hidden;
    background-color: #1f2833;
    font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
    color: #45a29e;
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: smaller;
}

.navbar form {
    float: right;
    margin-top: 10px;
    margin-right: 16px;
}

.navbar input[type=text] {
    padding: 6px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
}

.navbar button {
    background-color: #45a29e;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.navbar button:hover {
    background-color: #45a049;
}


/* default stylings */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* provides background color to body */
/* body {
    background-color: black;
} */

/* ----- container stylings: 
        -> centers the whole content of the page
        -> defines width and height for container ----- */
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 800px;
    height: 500px;
}

/* ----- end of container stylings ----- */

/* provides padding to main heading */
.main-heading {
    color: #66fcf1;
    padding: 2rem 0 2rem 0;
    text-transform: uppercase;
    font-weight: bolder;
    position:relative;
}

.main-heading--shadow::before {
    color: #1f2833;
    content:attr(data-text);
    margin-top: 0.875rem;
    opacity: 0.7;
    position: absolute;
    transform: perspective(200px) rotateX(40deg) scale(0.83);
    z-index: -1;
}

.content {
    position: relative;
}

/* ----- carousel content stylings ----- */
/* places the carousel content on center of the carousel */
.carousel-content {
    position: absolute;
    /*to center the content horizontally and vertically*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 50;
}

.carousel-heading {
    font-size: 3rem;
    color: #308d46;
    margin-bottom: 1rem;
}

/*----- end of carousel content stylings ----- */

/* ----- slideshow stylings ----- */
.slideshow {
    height: 70%;
    overflow: hidden;
    /* to hide slides in x-direction */
    position: relative;
}

/* wrapper which wraps all the slideshow images stylings */
.slideshow-wrapper {
    display: flex;
    /* We give it width as 400% because we are making a 
               4 image carousel. If you want to make for example, 
               5 images carousel, then give width as 500%. */
    width: 400%;
    height: 100%;
    position: relative;
    /* you can change the animation settings from below */
    animation: slideshow 20s infinite;
}

/* define width and height for images*/
.slide {
    width: 100%;
    height: 100%;
}

.slide-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* @keyframes are used to provide animations
           We make these settings for 4 image carousel.
           Make modification according to your needs. */
@keyframes slideshow {
    0% {
        left: 0;
    }

    10% {
        left: 0;
    }

    15% {
        left: -100%;
    }

    25% {
        left: -100%;
    }

    30% {
        left: -200%;
    }

    40% {
        left: -200%;
    }

    45% {
        left: -300%;
    }

    55% {
        left: -300%;
    }

    60% {
        left: -200%;
    }

    70% {
        left: -200%;
    }

    75% {
        left: -100%;
    }

    85% {
        left: -100%;
    }

    90% {
        left: 0%;
    }
}

/* ----- end of slideshow stylings ----- */

/* ----- carousel control buttons stylings ----- */
.slide-btn {
    background-color: #bbb;
    border-radius: 50%;
    border: .2rem solid green;
    width: 1.2rem;
    height: 1.2rem;
    outline: none;
    cursor: pointer;
    /* stylings for positioning the buttons at
               the bottom of the carousel */
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 70;
}

/* As we provide position as absolute, 
        the buttons places one over the other. 
        So, we have to place them individually
        at their correct positions. */
.slide-btn-1 {
    left: 45%;
}

.slide-btn-2 {
    left: 50%;
}

.slide-btn-3 {
    left: 55%;
}

.slide-btn-4 {
    left: 60%;
}

/* When we focus on the particular button, 
        the animation stops to that particular image 
        to which the button is associated. */
.slide-btn-1:focus~.slideshow-wrapper {
    animation: none;
    left: 0;
}

.slide-btn-2:focus~.slideshow-wrapper {
    animation: none;
    left: -100%;
}

.slide-btn-3:focus~.slideshow-wrapper {
    animation: none;
    left: -200%;
}

.slide-btn-4:focus~.slideshow-wrapper {
    animation: none;
    left: -300%;
}

/* when we focus on the button, the background color changes */
.slide-btn:focus {
    background-color: #308d46;
}

/* ----- end of carousel control buttons stylings ----- */

/* content */
.containers {
    display: flex;
    justify-self: center;
    justify-content: center;
    margin-bottom: 50px;
}
.card {
    width: 80%;
    min-height: 254px;
    border-radius: 30px;
    background: #0b0c10;
    box-shadow: 15px 15px 30px rgba(91, 239, 215, 0.2),
        -15px -15px 30px rgba(102, 252, 241, 0.3);
}

.card-content {
    padding: 50px;
    justify-content: center;
    align-content: center;
}

h1 {
    font-size: 2.2rem;
    display: flex;
    justify-content: center;
    color: #66fcf2;
    font-family: 'Caladea', serif;
    font-style: italic;
    margin: 10px;
}

p {
    font-size: 0.7rem;
    color: #45a29e;
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
}

h2{
    font-size: 1.1rem;
    color: #45a29e;
    text-align: center;
}

h4{
    font-size: 0.8rem;
    color: #c5c6c7;
    text-align: center;
    margin-bottom: 30px;
    font-family: 'Times New Roman', Times, serif;
}

.card-footer {
    color: #66fcf2;
    font-size: 0.7rem;
    text-align: center;
    font-weight: lighter;
}

----------------------------------------------
//GRAPHPAGE

////HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/graphpage.css">
</head>
<body>
    <div class="navbar">
        <a href="./homepage.html" class="href">Home</a>
        <a href="./graphpage.html" class="href">Graph</a>
        <a href="./inputpage.html" class="href">Input</a>
        <a href="./comparisonpage.html" class="href">Comparison</a>
        <a href="#" class="href">About us</a>
        <form action=""><input type="text" placeholder="Search..."><button type="submit" class="submit">Go</button>
        </form>
    </div>
    <div class="row">
        <div class="col-7">
            <div class="graph">
                <!-- something goes here -->
            </div>
        </div>
        <div class="col-5">
            <div class="summary">
                <!-- something also goes here -->
            </div>
        </div>
    </div>
</body>
</html>

////CSS
@import url('https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-family: 'Caladea' serif;
}

/* navbar */
.navbar {
    overflow: hidden;
    background-color: #1f2833;
    font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
    color: #45a29e;
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: smaller;
}

.navbar form {
    float: right;
    margin-top: 10px;
    margin-right: 16px;
}

.navbar input[type=text] {
    padding: 6px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
}

.navbar button {
    background-color: #45a29e;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.navbar button:hover {
    background-color: #45a049;
}


/* body */

body {
    background: linear-gradient(0deg, rgba(11, 12, 16, 0.95), rgba(11, 12, 16, 0.95)), url(../images/background.jpeg); 
}

.col-7 {
    width: 50%;
    display: flex;
    float: left;
    position: relative;
}

.graph {
    position: absolute;
    display: flex;
    float: left;
    border: #0b0c10 solid;
    border-radius: 10px;
    width: 100%;
    height: 50vh;
    transform: translate(5%, 20%);
    margin: 28px;
    background-color: #0b0c10;
    box-shadow: 15px 15px 30px rgba(91, 239, 215, 0.1),
    -10px -10px 20px rgba(102, 252, 241, 0.1);
}

.col-5 {
    width: 40%;
    display: flex;
    float: right;
    position: relative;
}

.summary {
    display: flex;
    float: right;
    position: absolute;
    width: 80%;
    border: #0b0c10 solid;
    height: 50vh;
    border-radius: 10px;
    margin: 28px;
    transform: translateY(20%);
    color: #c5c6c7;
    background-color: #0b0c10;
    box-shadow: 15px 15px 30px rgba(91, 239, 215, 0.1),
    -10px -10px 20px rgba(102, 252, 241, 0.1);
}

---------------------------------------------------
//COMPARISONPAGE

////HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/comparison.css">
</head>

<body>
    <div class="navbar">
        <a href="./homepage.html" class="href">Home</a>
        <a href="./graphpage.html" class="href">Graph</a>
        <a href="./inputpage.html" class="href">Input</a>
        <a href="./comparisonpage.html" class="href">Comparison</a>
        <a href="#" class="href">About us</a>
        <form action=""><input type="text" placeholder="Search..."><button type="submit" class="submit">Go</button>
        </form>
    </div>

    <!-- <h2 class="page-header">Comparison</h2> -->

    <div class="wrapper">
        <div class="searchitem">
            <form action="" class="form">
                <input type="text" class="searchinput" placeholder="Search" autocomplete="off" onkeyup="search()">
                <button class="submit" type="submit" placehodler="Search">Search</button>
            </form>
        </div>

        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
        </div>
    </div> 
</body>

</html>

////CSS
@import url('https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-family: 'Caladea' serif;
}

/* navbar */
.navbar {
    overflow: hidden;
    background-color: #1f2833;
    font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
    color: #45a29e;
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: smaller;
}

.navbar form {
    float: right;
    margin-top: 10px;
    margin-right: 16px;
}

.navbar input[type=text] {
    padding: 6px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
}

.navbar button {
    background-color: #45a29e;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.navbar button:hover {
    background-color: #45a049;
}

/* background */
body {
    background: linear-gradient(0deg, rgba(11, 12, 16, 0.95), rgba(11, 12, 16, 0.95)), url(../images/background.jpeg);
}

/* search/filter bar */

.searchitem {
    display: flex;
    position: absolute;
    transform: translate(-12.9%, -90%);
    
}

.form {
    display: flex;
    padding: 40px;
    gap: 20px;
    margin-left: 100 auto;
}

.searchinput {
    font-size: small;
    height: 30px;
}

button.submit {
    font-size: 15px;
    padding: 4px;
}

/* table */

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: 85%;
    background-color: #0b0c10;
    min-height: 300px;
    margin: 0 auto;
    border: 1px solid #1f2833;
    position: absolute;
    transform: translate(9%, 30%);
    box-shadow: 15px 15px 30px rgba(91, 239, 215, 0.2),
    -10px -10px 20px rgba(102, 252, 241, 0.3);
}

table {
    width: 100%;
    border: 1px solid #ccc;
    border-collapse: collapse;

}

thead {
    background-color: #f5f5f5;
    color: aqua;

}

td, th {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
    color: #45a29e;

}

--------------------------------------------------
