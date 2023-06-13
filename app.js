document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      
    });
  
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(function(dropdown) {
      const trigger = dropdown.querySelector('a');
      const menu = dropdown.querySelector('.dropdown-menu');
  
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        dropdowns.forEach(function(dropdown) {
          dropdown.classList.remove('active');
          
        });
        dropdown.classList.add('active');
      });
  
      document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('active');
        }
      });
    });
  });