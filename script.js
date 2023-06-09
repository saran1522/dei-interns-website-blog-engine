function myFunc() {
  const navbar = document.getElementById("navbar")
  const btn = document.getElementById('iconBtn')
  const icon = document.getElementById('icon')
  if (navbar.className == "navbar")
  {
    navbar.className += " responsive"
    btn.className += " res"
    btn.innerHTML=`<i class="fas fa-times"></i>`
  } 
    
  else{
     navbar.className = "navbar";
     btn.className="icon"
     btn.innerHTML=`<i class="fa fa-bars"></i>`
  }
}