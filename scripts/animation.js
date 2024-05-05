// Scrollup
function scrollToTop() {
    const heroSection = document.getElementById('hero');
    const heroOffsetTop = heroSection.offsetTop;

    window.scrollTo({
        top: heroOffsetTop,
        behavior: 'smooth'
    });
}

// Hide Scrollup Button
window.onscroll = function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Sidebar
function openSidebar() {
    document.getElementById("sidebar").style.width = "350px";
  }

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("open-btn").style.marginRight = "0";
    document.querySelector(".content").style.marginRight = "0";
  }
