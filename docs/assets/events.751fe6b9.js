import"./tailwind.517bfc7a.js";const a=document.querySelectorAll("[data-modal-target]"),l=document.querySelectorAll("[data-close-button]"),o=document.getElementById("overlay");a.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(e.dataset.modalTarget);s(t)})});o.addEventListener("click",()=>{document.querySelector(".modal.active").forEach(t=>{c(t)})});l.forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".modal");c(t)})});function s(e){e!=null&&(e.classList.add("active"),o.classList.add("active"))}function c(e){e!=null&&(e.classList.remove("active"),o.classList.remove("active"))}
