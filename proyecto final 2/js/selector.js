//PROPIEDADES
let proSel = {
    sel: document.querySelector(".informacion").querySelector(".contenido"),
    a: document.querySelector(".informacion").querySelector(".contenido").querySelectorAll(".a"),
    d:document.querySelector("body")
}
//METODOS
let metSel = {
    selector: proSel.sel.addEventListener("click", (e) => {
        if(e.target.matches(".informacion .contenido .a *") || e.target.matches(".informacion .contenido .a")){// el * es para que tambien sea TRUE aun cuando seleccione un hijo de a 
            for (let i in proSel.a) {
                if (proSel.a.hasOwnProperty.call(proSel.a, i)) {
                    proSel.a[i].style.display = "none";
                    if (proSel.a[i] == e.target.parentElement || proSel.a[i] == e.target) {
                        let cla = `.${proSel.a[i].classList[1]}A`;
                        proSel.sel.querySelector(`${cla}`).style.visibility = "visible";
                        proSel.sel.querySelector(`${cla}`).style.display = "flex";
                        proSel.a[i].style.display = "flex";
                        i++;
                    }
                }
            }
        }
    }),
    desSelec:proSel.d.addEventListener("click", (e) => {
        if (!(proSel.sel == e.target.parentElement.parentElement || proSel.sel == e.target.parentElement || proSel.sel == e.target) || e.target.matches(".fa-solid.fa-xmark")) {
            for (const i in proSel.a) {
                if (proSel.a.hasOwnProperty.call(proSel.a, i)) {
                    let cla = `.${proSel.a[i].classList[1]}A`;
                    proSel.a[i].style.display = "flex";
                    proSel.sel.querySelector(`${cla}`).style.visibility = "hidden";
                    proSel.sel.querySelector(`${cla}`).style.display = "none";
                }
            }
        }
    })
    
}