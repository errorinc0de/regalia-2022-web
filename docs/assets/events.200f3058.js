import{n as c,l}from"./logo_rcciit.a894b914.js";import{render as d}from"https://unpkg.com/lit-html?module";d(c(l,"bg-background","/"),document.body);const n=document.querySelectorAll("[data-modal-target]"),s=document.querySelectorAll("[data-close-button]"),o=document.getElementById("overlay");n.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(e.dataset.modalTarget);r(t)})});o.addEventListener("click",()=>{document.querySelector(".modal.active").forEach(t=>{a(t)})});s.forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".modal");a(t)})});function r(e){e!=null&&(e.classList.add("active"),o.classList.add("active"))}function a(e){e!=null&&(e.classList.remove("active"),o.classList.remove("active"))}document.querySelectorAll("[data-wip]").forEach(e=>e.classList.add("hidden"));
