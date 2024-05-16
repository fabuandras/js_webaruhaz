import { autokLISTA } from "./adat.js";
import { megjelenit, kartyakLetrehoz } from "./fuggvenyek.js";
import { rendez, szures, szures2, torol } from "./adatKezelo.js";
import { sorBeszur } from "./urlapKezelo.js";
    /*
    jelenisuk meg az adatainkat egy tablazatban az adatk divben
    az urlap div-ben legyen egy urlap, amivel ilyen adatokat tudunk a tablazatba beletenni
    a tablazat fejlecere kattintva rendezzuk a tablazatot nev szerint
    tudjunk torolni a tablazatbol egy sort
    legyen szuromezo, ami segitsegevel nev szerint tudjuk szurni az adatokat 
    
    Fuggvenyek:

    1. tablazatLetrehoz(lista) -> txt
        lista alapján készít html tablazat kodot, visszaadja az elkeszult html szoveget. minden sor mellett egy torles gombbal
    2. megjelenit(txt)
        megjeliniti a parameterben kapott szoveget egy adott html elemben
    3. rendez(lista) -> rendezettLista
        megrendezi a listat adott parameter szerint, a megrendezett listat ujra megjeleniti, megrendezett listat visszaadja
        akkor fut le amikor rakattintunk a tablazat fejlecere
    4. szures(lista, keresoSzoveg) -> szurtLista
        akkor fog lefutni, ha a szuro mezoben valtozas tortenik (keyup) - a listaban a nev mezoben keres egyezeseket es szur ez alapjan
        filter
    5. sorBeszur(lista) -> ujLista
        ha a submit gombra kattintunk akkor fut le
        urlap adatkat atalakitjuk objektumma es hozzaadjuk a listahoz (push)
    6. torol(lista, index)
        torli a lista adott sorat
        minden sor mellett lesz egy torol gomb, amivel megkapjuk az adott sor indexet es meghivodik a torol fuggveny
    */
   
    let rIrany = 1;
    init(autokLISTA);
    szuresNevSzerint();
    szuresArSzerint();
    torolesemeny()
    sorBeszur(autokLISTA)

    export function init(lista){
        var txt = kartyakLetrehoz(lista);
        megjelenit(txt);
        rendezesEsemeny();
        torolesemeny()
    }

    function szuresNevSzerint(){
        const szuroElem = $("#sznev");
        szuroElem.on("keyup", function(){
            let szoveg = szuroElem.val();
            init(szures(autokLISTA, szoveg));
        });
    }

    function szuresArSzerint(){
        const szuroElem = $("#szar");
        szuroElem.on("keyup", function(){
            let ar = parseFloat(szuroElem.val());
            if (!isNaN(ar)) {
                init(szures2(autokLISTA, ar));
            }
        });
    }
    

    /* szorgalmi: egyéb mezőkre szűrés */


    function rendezesEsemeny(){

        /* ha rákattintunk a táblázat fejlécében lévő név mezőre */
        const nevMezoElem = $(".adatok table th").eq(0);
        nevMezoElem.on("click", function(){
            const lista = rendez(autokLISTA, "nev", rIrany);
            console.log(lista);
            init(lista);
            rIrany*=-1;
        })
    }

    function torolesemeny() {
        const torolELEM = $(".torol")
        torolELEM.on("click", function (event) {
            let index = event.target.id;
            // ez váltotta ki az eseményt
            const LISTA= torol(autokLISTA,index)
            init(LISTA)
        })
    }

/* szorgalmi: tudjunk rendezni a tobbi mezore is */