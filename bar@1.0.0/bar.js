// Create topbar HTML
const topbarHtml = `
<div id="brickmmo-topbar">
  <a href="https://brickmmo.com" class="brickmmo"><img src="https://cdn.brickmmo.com/images@1.0.0/brickmmo-logo-coloured-horizontal.png" /></a>
  <a href="https://console.brickmmo.com" class="console"><img src="https://cdn.brickmmo.com/images@1.0.0/brickmmo-icon-console-grey.png" /></a>
  <a href="#" class="hamburger"><img src="https://cdn.brickmmo.com/images@1.0.0/brickmmo-icon-apps-grey.png" /></a>
</div>
<style>
  #brickmmo-topbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 10px;
    z-index: 9999;
    box-sizing: border-box;
    border-bottom: 1px solid #848484;
  }
  #brickmmo-topbar a {
    display: block;
    position: absolute;
    height: 40px;
  }
  #brickmmo-topbar a:link,
  #brickmmo-topbar a:active,
  #brickmmo-topbar a:visited,
  #brickmmo-topbar a:hover {
    color: #ff5b00 !important;
    text-decoration: none !important;
    cursor: pointer;
  }
  #brickmmo-topbar a.brickmmo {
    left: 20px;
  }
  #brickmmo-topbar a.console {
    right: 70px;
  }
  #brickmmo-topbar a.hamburger {
    right: 20px;
  }
  #brickmmo-topbar img {
    height: 40px;
  }
  body {
    margin-top: 60px !important;
  }

  h1:first-of-type {
  margin-top: 10px !important;
}
</style>
`;

// Insert topbar at the top of the body
document.body.insertAdjacentHTML('afterbegin', topbarHtml);

// Adjust 100vh elements
document.querySelectorAll('*').forEach(el => {
  const style = window.getComputedStyle(el);
  if (style.height === window.innerHeight + 'px' || style.height === '100vh') {
    el.style.height = `calc(100vh - 60px)`;
  }
});