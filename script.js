function toggleBio(id) {
    const bio = document.getElementById(id);
    if (bio.style.display === "block") {
      bio.style.display = "none";
    } else {
      // Hide all bios first
      const bios = document.querySelectorAll('.bio');
      bios.forEach(b => b.style.display = "none");
      // Show selected
      bio.style.display = "block";
    }
  }
  