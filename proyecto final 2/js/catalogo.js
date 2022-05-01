//PROPIEDADES
let proCat = {
    but: document.querySelector(".catalogo").querySelector(".lista"),
    mos: document.querySelector(".catalogo").querySelector(".inventario")
}
//METODOS
let metCat = {
    catal: proCat.but.addEventListener("click", (e) =>{
        if (e.target.matches(".b")) {
            let cat = `.${e.target.textContent.toLowerCase()}`;
            for (const i in proCat.mos.querySelectorAll(".e")) {
                if (proCat.mos.querySelectorAll(".e").hasOwnProperty.call(proCat.mos.querySelectorAll(".e"), i)) {
                    const element = proCat.mos.querySelectorAll(".e")[i];
                    element.style.display = "none";
                }
            }
            proCat.mos.querySelector(cat).style.display = "flex"
        }
    })
}