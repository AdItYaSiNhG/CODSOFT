document.getElementById("mainContent").addEventListener("click", function() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
      window.location.href = "main.html";
    }, 10); 
  });
  