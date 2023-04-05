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
"https://th.bing.com/th/id/R.f00b1fdce66a677a444f678b53dbef7e?rik=dv1NLUmMCsET4g&pid=ImgRaw&r=0">
                    </div>
                    <div class="slide">
                        <img class="slide-img" src=
"https://th.bing.com/th/id/R.639b2c4816f44634f873df6bdb3e8e3b?rik=PQHdjXtE8Y789Q&riu=http%3a%2f%2fcarleton.ca%2ffinancialservices%2fwp-content%2fuploads%2ffs-banner.jpg&ehk=C8drAsOlHIsbe7UmchyJHRgeE3bVZfTlY0a8GYSrBVQ%3d&risl=&pid=ImgRaw&r=0">
                    </div>
                    <div class="slide">
                        <img class="slide-img" src=
"https://www.surrey.ac.uk/sites/default/files/styles/banner_image_1500x470/public/2018-02/economics-and-finance-banner-image.jpg?itok=Fq_kxmXu">
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
