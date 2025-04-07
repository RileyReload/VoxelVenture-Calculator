
    var Vi2 = document.getElementById("Vi2");
    var Un1 = document.getElementById("Un1");
    var Ez = document.getElementById("Ez");
    var Vk = document.getElementById("Vk");
    var Ek = document.getElementById("Ek");
    var Pt = document.getElementById("Pt");
    var Dk = document.getElementById("Dk");
    var output = document.getElementById("out");

    var Chlorophyte = 0;
    var Sand = 0;
    var Tanzanite = 0;
    var Azurite = 0;
    var Violium = 0;
    var Desoleium = 0;
    var Adurite = 0;
    var Luxium = 0;
    var Vermite = 0;
    var Luminte = 0;
    var Unobtanium = 0;
    var Rhodium = 0;
    var Chrysoberyl = 0;
    var Nebulyium = 0;
    var Dystopium = 0;
    var Compressium = 0;
    var Utopium = 0;
    var Quantizite = 0;
    var Cryptium = 0;
    var Infernum = 0;
    var Jetchium = 0;
    var Tafil = 0;
    var Zetsite = 0;
    var Cautite = 0;
    var Cursedfire = 0;
    var Plasmyx = 0;
    var Impervium = 0;
    var Singularium = 0;
    var Bismuth = 0;

    //Shift1
    var Runyx = 0;
    var Ufrium = 0;
    var Obladite = 0;
    var Cursedcurrent = 0;
    var Corruptium = 0;
    var Attrite = 0;
    var Hyperbolt = 0;
    var Absurdium = 0;
    var Smouldersite = 0;
    var Spicyte = 0;
    var Cinderplate = 0;
    var Aftermite = 0;
    var Quarkian = 0;
    var Antiquarkian = 0;
    var Gluonyke = 0;
    var Univine = 0;
    var SolidNitrogen = 0;
    var Frystwyst = 0;
    var Flickerfreeze = 0;
    var Frostflake = 0;
    var Granulite = 0;
    var Incyclite = 0;

    //Shift 2
    var Decaynix = 0;
    var Ghouleum = 0;
    var Sanguicaedis = 0;
    var Phantasmire = 0;
    var Enfanissin = 0;

    //Ruinus
    var Bilaterite = 0;
    var Sciniate = 0;
    var Stalagstone = 0;
    var Tangeriate = 0;
    var Fractastone = 0;
    var Hexaflexium = 0;
    var Radium = 0;
    var Rochestar = 0;
    var Creedite = 0;
    var Fluorite = 0;
    var Lightskyze = 0;
    var Nightskyze = 0;
    var Stasistiss = 0;



    //button switcher
    $("div.multitools").css("display", "none");
    $("div.compounds").css("display", "block");
    $("#multitoolsBtn").click(function(){
        $("div.compounds").css("display", "none");
        $("div.multitools").css("display", "block");
        $("div.listBtn").css("display", "none");
    })
    $("#compoundsBtn").click(function(){
        $("div.multitools").css("display", "none");
        $("div.compounds").css("display", "block");
        $("div.listBtn").css("display", "block");
    })

    //main button
    $("#btn1").click(function(){
        reset();
        //Vi++
        if(isNaN(1*Vi2.value)) hyperviolium(0);
        else hyperviolium(Vi2.value);

        //Un+
        if(isNaN(1*Un1.value)) superunobtanium(0);
        else if(1*Un1.value % 2 == 0) superunobtanium(Un1.value/2);
        else superunobtanium((parseInt(Un1.value)+1)/2)

        //Ez
        if(isNaN(1*Ez.value)) endozivite(0);
        else endozivite(Ez.value);

        //Vk
        if(isNaN(1*Vk.value)) vulkavium(0);
        else vulkavium(Vk.value);

        //Ek
        if(isNaN(1*Ek.value)) elementak(0);
        else elementak(Ek.value);

        //Pt
        if(isNaN(1*Pt.value)) poltergeire(0);
        else poltergeire(Pt.value);

        //Dk
        if(isNaN(1*Dk.value)) duskyze(0);
        else duskyze(Dk.value);

        //$("div.compounds").css("display", "none");
        output.innerHTML = makeList();
    })



export function poltergeire(x){
    binarel(2*x);
    ectoplasmyx(3*x);
    Enfanissin += 4*x;
    Phantasmire += 5*x;
    Sanguicaedis += 6*x;

}

export function elementak(x){
    endozivite(1*x);
    hyperviolium(4*x);
    quantalyx(6*x);
    enchantedJetchium(6*x);
    spiritian(1*x);
    superunobtanium(2*x);
    vulkavium(1*x)
}

export function spiritian(x){
    Chlorophyte += 3*x;
    Chrysoberyl += 1*x;
    Granulite += 4*x;
    Incyclite += 4*x;
    Tanzanite += 1*x;
    Vermite += 1*x;
}

export function vulkavium(x){
    Absurdium += 1*x;
    burnbrite(4*x);
    neonite(3*x);
    destAlbinite(5*x);
}

export function endozivite(x){
    Absurdium += 1*x;
    frigidine(4*x);
    neonite(3*x);
    destUklic(5*x);
}

export function duskyze(x){
    Creedite += 1*x;
    Fluorite += 2*x;
    Lightskyze += 6*x;
    Nightskyze += 6*x;
    pulsane(x);
    Sand += 12*x;
    Stasistiss += 12*x;
}

export function superunobtanium(x){
    Adurite += 2*x;
    Cryptium += 4*x;
    Impervium += 4*x;
    strainyx(6*x);
    Spicyte += 2*x;
    Unobtanium += 2*x;
}

export function hyperviolium(x){
    Compressium += 1*x;
    Hyperbolt += 7*x;
    Singularium += 1*x;
    superviolium(x);
    transcendium(x);
}

export function enchantedJetchium(x){
    equilibrian(4*x);
    Infernum += 1*x;
    Jetchium += 2*x;
    Tafil += 4*x;
}

export function destUklic(x){
    Frostflake += 1*x;
    SolidNitrogen += 5*x;
    uklic(2*x);
}

export function destAlbinite(x){
    Aftermite += 1*x;
    albinite(2*x);
    Smouldersite += 5*x;
}

export function quantalyx(x){
    Antiquarkian += 4*x;
    Quantizite += 4*x;
    Gluonyke += 1*x;
    Quantizite += 6*x;
}

export function frigidine(x){
    Flickerfreeze += 2*x;
    Frystwyst += 5*x;
    Nebulyium += 6*x;
    Rhodium += 4*x;
}

export function burnbrite(x){
    Cinderplate += 4*x;
    Desoleium += 5*x;
    Cursedfire += 3*x;
    Infernum += 2*x;
}

export function neonite(x){
    Luminte += 4*x;
    Luxium += 5*x;
    Univine += 1*x;
}

export function transcendium(x){
     albinite(3*x);
     uklic(2*x);
     Bismuth += 1*x;
}

export function pulsane(x){
    Fractastone += 3*x;
    Hexaflexium += 4*x;
    Radium += 5*x;
    Rochestar += 1*x;
}

export function binarel(x){
    Bilaterite += 1*x;
    Sciniate += 3*x;
    Stalagstone += 2*x;
    Tangeriate += 3*x;
}

export function ectoplasmyx(x){
    Decaynix += 5*x;
    Ghouleum += 3*x;
    Plasmyx += 2*x;
}

export function albinite(x){
     Runyx += 1*x;
     Ufrium += 1*x;
     Obladite += 1*x;
}

export function uklic(x){
     Cursedcurrent += 1*x;
     Corruptium += 1*x;
     Attrite += 1*x;
}

export function strainyx(x){
    Cautite += 3*x;
    Zetsite += 2*x;
}

export function superviolium(x){
     Azurite += 1*x;
     Violium += 1*x;
}

export function equilibrian(x){
    Dystopium += 1*x;
    Utopium += 1*x;
}

export function reset(){
    Sand = 0;
    Azurite = 0;
    Violium = 0;
    Adurite = 0;
    Unobtanium = 0;
    Compressium = 0;
    Cryptium = 0;
    Zetsite = 0;
    Cautite = 0;
    Impervium = 0;
    Singularium = 0;
    Bismuth = 0;
    Runyx = 0;
    Ufrium = 0;
    Obladite = 0;
    Cursedcurrent = 0;
    Corruptium = 0;
    Attrite = 0;
    Hyperbolt = 0;
    Spicyte = 0;
    Fractastone = 0;
    Hexaflexium = 0;
    Radium = 0;
    Rochestar = 0;
    Creedite = 0;
    Fluorite = 0;
    Lightskyze = 0;
    Nightskyze = 0;
    Stasistiss = 0;
    Absurdium = 0;
    Rhodium = 0;
    Nebulyium = 0;
    Frystwyst = 0;
    Flickerfreeze = 0;
    Luxium = 0;
    Luminte = 0;
    Univine = 0;
    SolidNitrogen = 0;
    Frostflake = 0;
    Smouldersite = 0;
    Aftermite = 0;
    Desoleium = 0;
    Infernum = 0;
    Cursedfire = 0;
    Cinderplate = 0;
    Chlorophyte = 0;
    Tanzanite = 0;
    Vermite = 0;
    Chrysoberyl = 0;
    Granulite = 0;
    Incyclite = 0;
    Quantizite = 0;
    Quarkian = 0;
    Antiquarkian = 0;
    Gluonyke = 0;
    Dystopium = 0;
    Utopium = 0;
    Jetchium = 0;
    Tafil = 0;
    Sanguicaedis = 0;
    Phantasmire = 0;
    Enfanissin = 0;
    Bilaterite = 0;
    Sciniate = 0;
    Stalagstone = 0;
    Tangeriate = 0;
    Plasmyx = 0;
    Decaynix = 0;
    Ghouleum = 0;

}

export function makeList(){
    var out = "<br>Shift 0:<br>";

    if(Chlorophyte > 0) out += "<br>Chlorophyte x" + Chlorophyte;
    if(Sand > 0) out += "<br>Sand x" + Sand;
    if(Tanzanite > 0) out += "<br>Tanzanite x" + Tanzanite;
    if(Azurite > 0) out += "<br>Azurite x" + Azurite;
    if(Violium > 0) out += "<br>Violium x" + Violium;
    if(Desoleium > 0) out += "<br>Desoleium x" + Desoleium;
    if(Adurite > 0) out += "<br>Adurite x" + Adurite;
    if(Luxium > 0) out += "<br>Luxium x" + Luxium;
    if(Vermite > 0) out += "<br>Vermite x" + Vermite;
    if(Luminte > 0) out += "<br>Luminte x" + Luminte;
    if(Unobtanium > 0) out += "<br>Unobtanium x" + Unobtanium;
    if(Rhodium > 0) out += "<br>Rhodium x" + Rhodium;
    if(Chrysoberyl > 0) out += "<br>Chrysoberyl x" + Chrysoberyl;
    if(Nebulyium > 0) out += "<br>Nebulyium x" + Nebulyium;
    if(Dystopium > 0) out += "<br>Dystopium x" + Dystopium;
    if(Compressium > 0) out += "<br>Compressium x" + Compressium;
    if(Quantizite > 0) out += "<br>Quantizite x" + Quantizite;
    if(Utopium > 0) out += "<br>Utopium x" + Utopium;
    if(Cryptium > 0) out += "<br>Cryptium x" + Cryptium;
    if(Infernum > 0) out += "<br>Infernum x" + Infernum;
    if(Jetchium > 0) out += "<br>Jetchium x" + Jetchium;
    if(Tafil > 0) out += "<br>Tafil x" + Tafil;
    if(Zetsite > 0) out += "<br>Zetsite x" + Zetsite;
    if(Cautite > 0) out += "<br>Cautite x" + Cautite;
    if(Cursedfire > 0) out += "<br>Cursedfire x" + Cursedfire;
    if(Plasmyx > 0) out += "<br>Plasmyx x" + Plasmyx;
    if(Impervium > 0) out += "<br>Impervium x" + Impervium;
    if(Singularium > 0) out += "<br>Singularium x" + Singularium;
    if(Bismuth > 0) out += "<br>Bismuth x" + Bismuth;

    out += "<br><br>Shift 1:<br>"

    //Shift 1
    if(Runyx > 0) out += "<br>Runyx x" + Runyx;
    if(Ufrium > 0) out += "<br>Ufrium x" + Ufrium;
    if(Obladite > 0) out += "<br>Obladite x" + Obladite;
    if(Cursedcurrent > 0) out += "<br>Cursedcurrent x" + Cursedcurrent;
    if(Corruptium > 0) out += "<br>Corruptium x" + Corruptium;
    if(Attrite > 0) out += "<br>Attrite x" + Attrite;
    if(Hyperbolt > 0) out += "<br>Hyperbolt x" + Hyperbolt; 
    if(Absurdium > 0) out += "<br>Absurdium x" + Absurdium;
    if(Smouldersite > 0) out += "<br>Smouldersite x" + Smouldersite;
    if(Spicyte > 0) out += "<br>Spicyte x" + Spicyte;
    if(Cinderplate > 0) out += "<br>Cinderplate x" + Cinderplate;
    if(Aftermite > 0) out += "<br>Aftermite x" + Aftermite;
    if(Quarkian > 0) out += "<br>Quarkian x" + Quarkian;
    if(Antiquarkian > 0) out += "<br>Antiquarkian x" + Antiquarkian;
    if(Gluonyke > 0) out += "<br>Gluonyke x" + Gluonyke;
    if(Univine > 0) out += "<br>Univine x" + Univine;
    if(SolidNitrogen > 0) out += "<br>Solid Nitrogen x" + SolidNitrogen;
    if(Frystwyst > 0) out += "<br>Frystwyst x" + Frystwyst;
    if(Flickerfreeze > 0) out += "<br>Flickerfreeze x" + Flickerfreeze;
    if(Frostflake > 0) out += "<br>Frostflake x" + Frostflake;
    if(Granulite > 0) out += "<br>Granulite x" + Granulite;
    if(Incyclite > 0) out += "<br>Incyclite x" + Incyclite;

    out += "<br><br>Shift 2:<br>"

    //Shift 2
    if(Decaynix > 0) out += "<br>Decaynix x" + Decaynix;
    if(Ghouleum > 0) out += "<br>Ghouleum x" + Ghouleum;
    if(Sanguicaedis > 0) out += "<br>Sanguicaedis x" + Sanguicaedis;
    if(Phantasmire > 0) out += "<br>Phantasmire x" + Phantasmire;
    if(Enfanissin > 0) out += "<br>Enfanissin x" + Enfanissin;

    out += "<br><br>Ruinus:<br>"

    //Ruinus
    if(Bilaterite > 0) out += "<br>Bilaterite x" + Bilaterite;
    if(Sciniate > 0) out += "<br>Sciniate x" + Sciniate;
    if(Stalagstone > 0) out += "<br>Stalagstone x" + Stalagstone;
    if(Tangeriate > 0) out += "<br>Tangeriate x" + Tangeriate;
    if(Fractastone > 0) out += "<br>Fractastone x" + Fractastone;
    if(Hexaflexium > 0) out += "<br>Hexaflexium x" + Hexaflexium;
    if(Radium > 0) out += "<br>Radium x" + Radium;
    if(Rochestar > 0) out += "<br>Rochestar x" + Rochestar;
    if(Creedite > 0) out += "<br>Creedite x" + Creedite;
    if(Fluorite > 0) out += "<br>Fluorite x" + Fluorite;
    if(Lightskyze > 0) out += "<br>Lightskyze x" + Lightskyze;
    if(Nightskyze > 0) out += "<br>Nightskyze x" + Nightskyze;
    if(Stasistiss > 0) out += "<br>Stasistiss x" + Stasistiss;

    out += "<br><br>Depletia:<br>"
    
    //Depletia

    return out;
 }
