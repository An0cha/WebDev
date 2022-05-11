/*this is menu responsive */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

(function() {
  scrollTo();
})();

function scrollTo() {
  const links = document.querySelectorAll('.scroll');
  links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
  const checkIfDone = setInterval(function() {
      const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
          targetAnchor.tabIndex = '-1';
          targetAnchor.focus();
          window.history.pushState('', '', targetID);
          clearInterval(checkIfDone);
      }
  }, 100);
}
/*Show more less */
function moreLessFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

/* customer element */

class MyNav extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <div class="topnav" id="myTopnav">
        <a class="active" href="index.html">Start</a>
        <a href="blogs.html">Blogs</a>
        <a href="cli.html">CLI for fun</a>
        <a href="about.html">Who Am I</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
              `
  }
}

customElements.define('my-nav', MyNav)

class MyFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <footer class="grow" >
                  <a href="https://www.linkedin.com/in/anocha-yudhthonglang-29b5a848/" target="_blank"><img src="./images/linkedin_icon.png" width="40px"></a>
                  <a href="https://www.facebook.com/arno.kung.5/" target="_blank"><img src="./images/fb_icon.png" alt="see mo on faceBook" width="40px"></a>
                  <a href="https://github.com/An0cha" target="_blank"><img src="./images/GitHub-Mark-Light-64px.png" alt="GitHub Profile" width="37px"></a>
                  <div class="right"><a href="index.html" style="text-align: right;"><img src="./images/arrowUp.png" width="25px"></a></div>
              </footer>  
              `
  }
}

customElements.define('my-footer', MyFooter)
