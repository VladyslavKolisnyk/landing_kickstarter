var e,t=document.querySelectorAll(".technology__article--slider"),n=document.getElementById("technology"),o=0,r=document.querySelector(".features__slide-aktiv"),l=0;function c(){e=document.querySelector(".features__slider").offsetWidth,n.style.width=e*t.length+"px",t.forEach(function(t){t.style.width=e+"px",t.style.height="auto",i()})}function i(){n.style.transform="translate(-"+o*e+"px)"}window.addEventListener("resize",c),c(),document.querySelector(".features__technology-slide-next").addEventListener("click",function(){l=++o+1,3===o&&(l=1),r.innerHTML="0"+l,o>=t.length&&(o=0),i()}),document.querySelector(".features__technology-slide-prev").addEventListener("click",function(){l=--o+1,-1===o&&(l=3),r.innerHTML="0"+l,o<0&&(o=t.length-1),i()});
//# sourceMappingURL=index.61ac4d02.js.map