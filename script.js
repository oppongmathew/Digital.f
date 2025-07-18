function toggleSummary(header) {
  const subtopics = header.nextElementSibling;
  subtopics.classList.toggle("hidden");
}

function exportToPDF() {
  const subtopics = document.querySelectorAll('.subtopics');

  // 1. Expand all hidden sections
  subtopics.forEach(section => section.classList.remove('hidden'));

  // 2. Generate the PDF
  const element = document.querySelector('.container');
  const opt = {
    margin:       0.5,
    filename:     'Digital_Forensics_Notes.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    // 3. Optionally collapse them back
    subtopics.forEach(section => section.classList.add('hidden'));
  });
}


// Show/hide back-to-top button
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
