const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");
menuToggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");});
nav?.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuToggle?.setAttribute("aria-expanded","false");}));
document.querySelectorAll(".filter").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(item=>item.classList.remove("active"));button.classList.add("active");const filter=button.dataset.filter;document.querySelectorAll(".project-card").forEach(card=>{card.hidden=filter!=="all"&&card.dataset.category!==filter;});}));
document.getElementById("year").textContent=new Date().getFullYear();