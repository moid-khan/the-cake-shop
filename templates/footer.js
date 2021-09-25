var footerHTML = `<footer>
<div class="container">
  <div class="row">
    <div class="col-md-3 col-sm-12">
      <img src="images/logo.png" alt="footer-logo">
      <p class="footer-info">
        Welcome to The Cake Shop, Best cake shop in the country. We are a family owned and operated by Cake
        Manufacturers.
      </p>
      <div class="icons">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-instagram-square"></i>
        <i class="fab fa-linkedin"></i>
      </div>
    </div>
    
    <div class="col-md-2 col-sm-12">
      <h5>Menu</h5>
      <ul>
        <li><a href="birthday-cake.html" >Birthday Cake</a></li>
        <li><a href="chocolate-cake.html" >Chocolate Cake</a></li>
        <li><a href="sprincle-cake.html" >Sprincle Cake</a></li>
        <li><a href="vanilla-cake.html" >Vanilla Cake</a></li>
        <li><a href="chocolate-mint.html" >Chocolate Mint</a></li>
        <li><a href="chocolate-pastry.html" >Chocolate Pastry</a></li>
      </ul>
    </div>

    <div class="col-md-2 col-sm-12">
      <h5>Cake Shop</h5>
      <ul>
        <li><a href="contact.html" >Contact Us</a></li>
        <li><a href="about.html" >About Us</a></li>
        <li><a href="store.html" >Store</a></li>
        <li><a href="sitemap.html">Site map</a></li>
      </ul>
    </div>

    <div class="col-md-2 col-sm-12">
      <h5>Services</h5>
      <ul>
        <li><a href="store.html" >Home Delivery</a></li>
        <li><a href="store.html" >Free Delivery</a></li>
        <li><a href="store.html" >Event</a></li>
        <li><a href="store.html" >Birthday</a></li>
        <li><a href="store.html" >Resturant</a></li>
      </ul>
    </div>
    <div class="col-md-3 col-sm-12">
      <h5>Contact</h5>
      <ul>
        <li>
          <i class="fas fa-map-marker-alt"></i>
          <p>
            Model Colony 75100, Malir, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Karachi
          </p>
        </li>
        <li>
          <i class="fas fa-phone-alt"></i>
          <p>
            +987 654 32135
          </p>
        </li>
        <li>
          <i class="fas fa-envelope"></i>
          <p>
            info@thecakeshop.com
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div class="row">
    <hr>
    <p class="footer-copy-text">&copy;Copyright The Cake Shop. All Rights Reserved</p>
  </div>
</div>
</footer>`


var footerElement = document.getElementById("footer")

footerElement.innerHTML = footerHTML