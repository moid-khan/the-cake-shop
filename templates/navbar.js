var navbarHTML = `<nav class="navbar navbar-expand-md navbar-light pt-3">
<div class="container">
  <div class="mx-auto order-0">
    <a class="navbar-brand mr-auto" href="index.html">
      <img src="images/logo.png" alt="logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>

  <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="store.html">Store</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Events
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="birthday.html">Birthday Cakes</a>
          <a class="dropdown-item" href="anniversary.html">Anniversary Cakes</a>
          <a class="dropdown-item" href="engagement.html">Engagement Cakes</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact</a>
      </li>
    </ul>
  </div>

  <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="signup.html">
          <i class="far fa-user"></i>
          Register
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="checkout.html">
          <i class="fas fa-shopping-cart"></i>
          Cart
        </a>
      </li>
    </ul>
  </div>
</div>
</nav>`


var navbarElement = document.getElementById("navbar")

navbarElement.innerHTML = navbarHTML