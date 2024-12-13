document.getElementsByClassName('share').addEventListener('click', async () => {
    const url = window.location.href.split('#')[0];
  
    // Check if the Web Share API is available
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: url,
        });
        console.log('Page shared successfully');
      } catch (error) {
        console.error('Error sharing the page:', error);
      }
    } else {
      // Fallback for devices that don't support the Web Share API
      try {
        await navigator.clipboard.writeText(url);
        //alert('URL copied to clipboard!');
      } catch (error) {
        console.error('Failed to copy URL:', error);
        //alert('Failed to copy the URL. Please try again.');
      }
    }
  });

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
  