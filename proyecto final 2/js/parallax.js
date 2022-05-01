//PROPIEDADES
    let proPar = {
        par: document.querySelector(".parallax"),
        rec: null,
        lim: null
    }
//METODOS
let metPar = {
    para: window.addEventListener("scroll", ()=>{
        proPar.rec = window.pageYOffset;
        proPar.lim = proPar.par.offsetTop + proPar.par.offsetHeight;
        if (proPar.rec > proPar.par.offsetTop - window.outerHeight && proPar.rec <= proPar.lim) {
            proPar.par.style.backgroundPositionY = (proPar.rec - proPar.par.offsetTop) / 1.5 + 'px';
        }else{
            proPar.par.style.backgroundPositionY = 0;
        }
    })
}