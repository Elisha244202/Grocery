const menu = document.querySelector(".fa-solid.fa-bars");

menu.onclick = () => {
  document.querySelector(".header .menu").classList.toggle("active");
  document.querySelector(".header .search").classList.remove("active");
};

const search = document.querySelector(".fa-solid.fa-search");

search.onclick = () => {
  document.querySelector(".header .search").classList.toggle("active");
  document.querySelector(".header .menu").classList.remove("active");
};
