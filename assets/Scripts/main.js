window.onscroll = () => {
  if (window.scrollY > 150) {
    document.querySelector("nav.navbar").classList.remove("no-background");
    document.querySelector("nav.navbar").classList.add("background");
  } else {
    document.querySelector("nav.navbar").classList.remove("background");
    document.querySelector("nav.navbar").classList.add("no-background");
  }
};
