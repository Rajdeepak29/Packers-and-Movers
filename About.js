window.addEventListener("load", start, false);

  function start() {
    document.getElementById("picture").addEventListener("mouseover", over, false);
    document.getElementById("picture").addEventListener("mouseout", out, false);

    document.getElementById("picture1").addEventListener("mouseover", over1, false);
    document.getElementById("picture1").addEventListener("mouseout", out1, false);
    
  }

  function over() {
    document.getElementById("picture").setAttribute("src", "No-mess-relocation-with-Packers-and-movers-Nashik.png");
  }

  function out() {
    document.getElementById("picture").setAttribute("src", "YP-1.jpg");
  }

  

  function over1() {
    document.getElementById("picture1").setAttribute("src", "Rent_2_Wheeler_to_delivery_courier_cc856ba097.jpg");
  }
  
  function out1() {
    document.getElementById("picture1").setAttribute("src", "images.jpeg");
  }

 