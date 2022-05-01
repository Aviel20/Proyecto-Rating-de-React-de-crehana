//PROPIEDADES
let proBar = {
    bot: document.querySelector(".bar"),
    cal: document.querySelector(".bar-menu")
}
//METODOS
let metBar = {
    active: proBar.bot.addEventListener("click", (e) =>{
        if (e.target.matches(".bar *")) {
            if (e.target.matches(".bar *") && proBar.cal.style.display == "flex") {
                proBar.cal.style.display ="none";
                return
            }
            proBar.cal.style.display ="flex";
        }
    }),
    desac: proBar.cal.addEventListener("click", (e) =>{
        if (e.target.matches(".bar-menu .nave-bar *")) {
            proBar.cal.style.display ="none";
        }
    }),
    desac2:window.addEventListener("resize", ()=>{
        if(screen.width > 860){
            proBar.cal.style.display ="none";
        }
    })
}