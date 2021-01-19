function toggelMenu() {
    var x = document.getElementById("myNav");
    var z=document.getElementsByClassName("menu-icon")[0];
    
    if (x.style.display === "block") {
      x.style.display = "none";
      z.classList.add("fa-bars");
      z.classList.remove("fa-window-close");
      
    } else {
      x.style.display = "block";
      z.classList.remove("fa-bars");
      z.classList.add("fa-window-close");
      
    }
  }


  
  

function openDiv()
  {
    document.getElementsByClassName("OpenableDiv")[0].style.display="block";
  }


  function closeDiv()
  {
    document.getElementsByClassName("OpenableDiv")[0].style.display="none";
  }
