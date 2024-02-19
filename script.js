const menu = document.querySelector(".fa-solid.fa-bars");

menu.onclick = () => {
  console.log(document.querySelector(".menu"));
  document.querySelector(".header .menu").classList.toggle("active");
};