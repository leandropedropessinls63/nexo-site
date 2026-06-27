
const CONFIG = {
  whatsappNumber: "5527000000000", // Edite para o número oficial da Nexo. Ex.: 5527999999999
  email: "contato@nexosst.com.br"
};

function whatsappUrl(message){
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("[data-menu-btn]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if(menuBtn && mobileMenu){
    menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
    mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.classList.remove("open")));
  }

  document.querySelectorAll("[data-whatsapp]").forEach(el => {
    const type = el.getAttribute("data-whatsapp");
    let msg = "Olá, gostaria de informações sobre os serviços da Nexo Ocupacional.";
    if(type === "proposta") msg = "Olá, gostaria de solicitar uma proposta da Nexo Ocupacional para minha empresa.";
    if(type === "parceria") msg = "Olá, gostaria de conversar sobre uma possível parceria com a Nexo Ocupacional.";
    el.setAttribute("href", whatsappUrl(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  const form = document.querySelector("[data-proposal-form]");
  if(form){
    const success = document.querySelector("[data-form-success]");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const lines = [
        "Olá, gostaria de solicitar uma proposta da Nexo Ocupacional.",
        "",
        `Nome: ${data.get("nome") || ""}`,
        `Empresa: ${data.get("empresa") || ""}`,
        `Telefone: ${data.get("telefone") || ""}`,
        `E-mail: ${data.get("email") || ""}`,
        `Funcionários: ${data.get("funcionarios") || ""}`,
        `Serviço: ${data.get("servico") || ""}`,
        `Mensagem: ${data.get("mensagem") || ""}`
      ];
      if(success) success.style.display = "block";
      window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener");
      form.reset();
    });
  }

  const toTop = document.querySelector("[data-to-top]");
  if(toTop){
    window.addEventListener("scroll", () => {
      if(window.scrollY > 600) toTop.classList.add("show");
      else toTop.classList.remove("show");
    });
    toTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
  }

  const year = document.querySelector("[data-year]");
  if(year) year.textContent = new Date().getFullYear();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
