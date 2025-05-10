const links = [
  { url: "https://github.com/bruno1215", icon: "bi-github" },
  { url: "https://www.linkedin.com/in/bruno-silva-455441145", icon: "bi-linkedin" },
  { url: "https://www.instagram.com/bsc.1512/", icon: "bi-instagram" },
  { url: "https://www.facebook.com/bruno.silvaa1995/", icon: "bi-facebook" },
  { url: "https://wa.me/5581986277331", icon: "bi-whatsapp" },
  { url: "https://t.me/BrunoSilva2", icon: "bi-telegram" },
  { url: "http://lattes.cnpq.br/1990389217375899", icon: "bi-person-badge" }
];

const list = document.getElementById("links-list");

links.forEach(link => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link.url;
  a.target = "_blank";
  a.innerHTML = `<i class="bi ${link.icon}"></i>`;
  li.appendChild(a);
  list.appendChild(li);
});