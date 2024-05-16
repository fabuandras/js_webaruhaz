export function rendez(lista, kulcs, rIrany) {
    const rlista = lista.sort(function(e1,e2) {
        /* a sort negatív vagy pozitív számot kell, hogy visszaadjon*/
        return e1[kulcs]<e2[kulcs]?-1*rIrany:1*rIrany;
    });
    return rlista;
}
/* szorgalmi: ékezetes karakterek átalakítása és utána rendezés replaceAll */

export function szures(lista, keresoSzoveg) {
    const szurtLista = lista.filter(function(auto){
        return auto.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
    });
    return szurtLista;
}

export function szures2(lista, keresoAr) {
    const szurtLista = lista.filter(function(auto){
        return auto.ar === keresoAr;
    });
    return szurtLista;
}


export function torol(lista, index) {
    lista.splice(index,1)
    return lista
}