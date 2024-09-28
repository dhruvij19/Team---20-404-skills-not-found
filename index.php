<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> </title>

    <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">

    <!-- custom css file link  -->
    <link rel="stylesheet" href="style.css">

</head>

<style>
    .feedback_btn {
        display: inline-block;
        margin-top: 1rem;
        border-radius: 5rem;
        background: #333;
        color: #fff;
        padding: .9rem 3.5rem;
        cursor: pointer;
        font-size: 1.7rem;
    }

    .feedback_btn:hover {
        background: white;
        border: 2px solid black;
        color: black;
    }
</style>
<body>

    <!-- header section starts  -->

    <header>

        <a href="#" class="logo"><i class="fa-solid fa-paw"></i>paw.com</a>

        <div id="menu-bar" class="fas fa-bars "></div>

        <nav class="navibar">
            <a href="#home">home</a>
            <a href="about.html">About</a>

            <a href="gallery.html">Gallery</a>
            <a href="PetMe\index.html">PetMe</a>
            <a href="donation.html">Donation</a>
            <a href="pet_shop/index.php">Pet Needs</a>
            <a href="helter-shelter-main\helter-shelter-main\index.html">Community</a>
            <a href="help\help.html">Instant Help</a>
            <a href="logout.php">Logout</a>
        </nav>

    </header>

    <!-- header section ends -->

    <!-- home section starts  -->

    <section class="home" id="home">

        <div class="content">
            <h3>Help A Pet!</h3>
            <p>Only 10% Of The Animals Find A Permanent Home. Each Year Approximately 2.7 million Animals are killed, Just Because They Aren't Able To Find A Permanent Home. We At XYZ plan to make a difference by finding shelters and </p>

        </div>

        <div class="image">
            <img src="img/photo-1610349406712-d1c71803c936.avif" alt="">
        </div>

    </section>

    <!-- home section ends -->

    <!-- speciality section starts  -->

    <section class="speciality" id="speciality">

        <h1 class="heading"> our <span>aim</span> </h1>

        <div class="box-container">

            <div class="box">
                <img class="image" src="img\photo-1596383924439-4d410af270f4.avif" alt="">
                <div class="content">
                    <img src="images/s-1.png" alt="">
                    <h3>Find a Shelter</h3>
                    <p>"Find sanctuary for furry friends in need with our comprehensive shelter locator. Discover nearby havens where paws find peace and love awaits."</p>
                </div>
            </div>
            <div class="box">
                <img class="image" src="img\photo-1601758261049-55d060e1159a.avif" alt="">
                <div class="content">
                    <img src="images/s-2.png" alt="">
                    <h3>Adoption</h3>
                    <p>"Embark on a journey of compassion and companionship by exploring our curated selection of adoptable pets. Find your perfect match and give a deserving soul a forever home filled with love and pawful joy."</p>
                </div>
            </div>

            <div class="box">
                <img class="image" src="img\photo-1651886362020-3b45c74966ab.avif" alt="">
                <div class="content">
                    <img src="images/s-4.png" alt="">
                    <h3>Instant Help</h3>
                    <p>
"Facing a furry crisis? Don't fret! Our dedicated support team is here 24/7 to lend a helping paw. Whether it's lost pets, emergency care, or behavioral advice, count on us for swift assistance and peace of mind."</p>
                </div>
            </div>


        </div>

    </section>

    <!-- speciality section ends -->



    <div class="container">
        <div class="content">
            <div class="left-side">
                <div class="address details">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="topic">Address</div>
                    <div class="text-one">Kandivali east</div>
                    <div class="text-two">Thakur village</div>
                </div>
                <div class="phone details">
                    <i class="fas fa-phone-alt"></i>
                    <div class="topic">Phone</div>
                    <div class="text-one">+0098 9893 5647</div>
                    <div class="text-two">+0096 3434 5678</div>
                </div>
                <div class="email details">
                    <i class="fas fa-envelope"></i>
                    <div class="topic">Email</div>
                    <div class="text-one">pawpeace@gmail.com</div>
                    <div class="text-two">info.pawpeace@gmail.com</div>
                </div>
            </div>
            <div class="right-side">
                <div class="topic-text">Send us a message</div>

                <p>If you have any work from me or any types of quries, you can send me message
                    from here.</p>
                    <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="e8f57f14-4938-46de-8cd2-7bcea6db8204">
                        <div class="input-box">
                            <input id = "name" type="text" name="name" placeholder="Enter your name" required>
                        </div>
                        <div class="input-box">
                            <input id = "email" type="text" name="email" placeholder="Enter your email" required>
                        </div>
                        <div class="input-box message-box">
                            <textarea id = "msg" name="msg" placeholder="Enter your message"></textarea>
                        </div>
                        
                        <input class = "feedback_btn" type="submit"  value="Send Now"> <input class = "feedback_btn" type="reset"  value="Reset">
                        </div>
                </form>
            </div>
        </div>
    </div>

    



<!-- scroll top button  -->
<a href="#home" class="fas fa-angle-up" id="scroll-top"></a>

<!-- loader  -->
<div class="loader-container">
    <img src="images/loader.gif" alt="">
</div>



<!-- custom js file link  -->
<script src="script.js">
     
</script>


</body>

</html>