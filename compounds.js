$(".extraComp").css("display", "none")
    var Vi2 = document.getElementById("Vi2");
    var Un1 = document.getElementById("Un1");
    var Ez = document.getElementById("Ez");
    var Vk = document.getElementById("Vk");
    var Ek = document.getElementById("Ek");
    var Pt = document.getElementById("Pt");
    var Sc = document.getElementById("Sc");
    var Ty = document.getElementById("Ty");
    var Un2 = document.getElementById("Un2");
    //var Pk = document.getElementById("Pk");
    var Pm = document.getElementById("Pm");
    var Mt = document.getElementById("Mt");
    var Vn = document.getElementById("Vn");
    var Dk = document.getElementById("Dk");

    var Ts = document.getElementById("Ts")
    var DUk = document.getElementById("DUk")
    var DAl = document.getElementById("DAl")
    var Gx = document.getElementById("Gx")
    var Ch = document.getElementById("Ch")
    var Wv = document.getElementById("Wv")
    var Nz = document.getElementById("Nz")
    var Dv = document.getElementById("Dv")
    var Ap = document.getElementById("Ap")
    var Cx = document.getElementById("Cx")
    var CVx = document.getElementById("CVx")
    var TVx = document.getElementById("TVx")

    var output = document.getElementById("out");
    var extraCompText = document.getElementById("toggleExtraCompBtn")
    var Depths = false;
    var ExtraComp = false;

    var Chlorophyte = 0;
    var Sand = 0;
    var Carbon = 0;
    var Chromium = 0;
    var Tanzanite = 0;
    var PalladiumOre = 0;
    var Azurite = 0;
    var Nepium = 0;
    var Violium = 0;
    var Phosphorus = 0;
    var Osmium = 0;
    var Desoleium = 0;
    var Painite = 0;
    var FireCrystal = 0;
    var Photonyke = 0;
    var Adurite = 0;
    var Luxium = 0;
    var Cragnium = 0;
    var Vermite = 0;
    var Viridian = 0;
    var Luminte = 0;
    var Unobtanium = 0;
    var Amperium = 0;
    var Rhodium = 0;
    var MercuryOre = 0;
    var Chrysoberyl = 0;
    var Ferozium = 0;
    var Nebulyium = 0;
    var Spectrian = 0;
    var TimeCrystal = 0;
    var Galaxite = 0;
    var Dystopium = 0;
    var Pyrotheium = 0;
    var Blazium = 0;
    var Flamanine = 0;
    var Everstone = 0;
    var Combustium = 0;
    var Technetium = 0;
    var Abysmium = 0;
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
    var Xasium = 0;
    var Impervium = 0;
    var Atomite = 0;
    var Singularium = 0;
    var Bismuth = 0;

    //Shift1
    var ZincOre = 0;
    var Runyx = 0;
    var Ufrium = 0;
    var Obladite = 0;
    var RiftRemnant = 0;
    var Xepil = 0;
    var Cursedcurrent = 0;
    var Corruptium = 0;
    var Attrite = 0;
    var Feldspar = 0;
    var Tourmaline = 0;
    var Niobium = 0;
    var Hyperbolt = 0;
    var Necrix = 0;
    var Regalin = 0;
    var Manyullyn = 0;
    var Cubea = 0;
    var Diversium = 0;
    var Absurdium = 0;
    var Smouldersite = 0;
    var Infrarize = 0;
    var Spicyte = 0;
    var Cinderplate = 0;
    var Aftermite = 0;
    var Implodium = 0;
    var Funkylite = 0;
    var Quarkian = 0;
    var Antiquarkian = 0;
    var Gluonyke = 0;
    var Quasine = 0;
    var Univine = 0;
    var Cryotheium = 0;
    var SolidNitrogen = 0;
    var Frystwyst = 0;
    var Flickerfreeze = 0;
    var LiquidHelium = 0;
    var Blizzeride = 0;
    var Frostflake = 0;
    var Granulite = 0;
    var Incyclite = 0;

    //Shift 2
    var VoxianCluster = 0;
    var Ichryde = 0;
    var CalciumOre = 0;
    var HafniumOre = 0;
    var Decaynix = 0;
    var Ghouleum = 0;
    var Sanguicaedis = 0;
    var Hieroglyte = 0;
    var Monolite = 0;
    var Monoflame = 0;
    var Tissuryal = 0;
    var Disruptoil = 0;
    var Axnit = 0;
    var Iocryx = 0;
    var Anarquize = 0;
    var Phantasmire = 0;
    var Enfanissin = 0;
    var Poindextire = 0;
    var Apognosive = 0;
    var Kragtonyke = 0;
    var Obliviore = 0;

    //Paradise
    var IridiumOre = 0;
    var Heliodor = 0;
    var Norrt = 0;
    var Athenum = 0;
    var Cyalminum = 0;
    var Mythapollyon = 0;
    var Temporian = 0;
    var Deltodyx = 0;
    var Destilliur = 0;
    var Hallowze = 0;
    var Miraculite = 0;
    var Zenthineum = 0;
    var Aerotheium = 0;
    var Petrotheium = 0;
    var Conjurian = 0;
    var Novaline = 0;
    var Wonderbrick = 0;
    var Tetrabeam = 0;
    var Tetramyle = 0;
    var Divinivine = 0;
    var Kappron = 0;
    var Gravitral = 0;
    var Etherglow = 0;
    var Journoule = 0;

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

    // toggle extra compounds
    $("#toggleExtraCompBtn").click(function(){
        
        if(ExtraComp){ ExtraComp = false;
            extraCompText.innerHTML = "Show extra compounds";
        }
        else{ ExtraComp = true;
            extraCompText.innerHTML = "Hide extra compounds";
        }
        if(ExtraComp){
            $(".extraComp").css("display", "")
        }
        else{
            $(".extraComp").css("display", "none")
        }
    })

    //toggle depths
    $("#depths").click(function(){
        if(Depths){ Depths = false;}
        else{ Depths = true;}
        if(Depths){
            output.innerHTML = makeListDepth();
        }
        else{
            output.innerHTML = makeList();
        }
    })

    //main button
    $("#btn1").click(function(){
        reset();

        //Main Compounds

        //Vi++
        if(!isNaN(1*Vi2.value)) hyperviolium(Vi2.value);

        //Un+
        if(!isNaN(1*Un1.value)){
        if(1*Un1.value % 2 == 0) superunobtanium(Un1.value/2);
        else superunobtanium((parseInt(Un1.value)+1)/2)
        }

        //Ez
        if(!isNaN(1*Ez.value)) endozivite(Ez.value);

        //Vk
        if(!isNaN(1*Vk.value)) vulkavium(Vk.value);

        //Ek
        if(!isNaN(1*Ek.value)) elementak(Ek.value);

        //Pt
        if(!isNaN(1*Pt.value)) poltergeire(Pt.value);

        //Sc
        if(!isNaN(1*Sc.value)) staticacyne(Sc.value);

        //Ty
        if(!isNaN(1*Ty.value)) tyrantizum(Ty.value);

        //Un++
        if(!isNaN(1*Un2.value)) hyperunobtainium(Un2.value);

        //Dk
        if(!isNaN(1*Dk.value)) duskyze(Dk.value);

        //Pk
        //aaaaaaaaa

        //Pm
        if(!isNaN(1*Pm.value)) primatter(Pm.value);

        //Mt
        if(!isNaN(1*Mt.value)) metarnityle(Mt.value);

        //Vn
        if(!isNaN(1*Vn.value)){
        if(1*Vn.value % 2 == 0) venturium(Vn.value/2);
        else venturium((parseInt(Vn.value)+1)/2);
        }  

        //Extra Compounds

        //Ts
        if(!isNaN(1*Ts.value)) transcendium(Ts.value);

        //DUk
        if(!isNaN(1*DUk.value)) destUklic(DUk.value);

        //DAl
        if(!isNaN(1*DAl.value)) destAlbinite(DAl.value);

        //Gx
        if(!isNaN(1*Gx.value)) grawbix(Gx.value);

        //Ch
        if(!isNaN(1*Ch.value)) chromar(Ch.value);

        //Wv
        if(!isNaN(1*Wv.value)) wavettap(Wv.value);

        //Nz
        if(!isNaN(1*Nz.value)) nihilize(Nz.value);

        //Dv
        if(!isNaN(1*Dv.value)) apeirodyn(Dv.value);

        //Ap
        if(!isNaN(1*Ap.value)) apeirodyn(Ap.value);

        //Cx
        if(!isNaN(1*Cx.value)) complux(Cx.value);

        //TVx
        if(!isNaN(1*TVx.value)){
        if(1*TVx.value % 2 == 0) trueVoxine(TVx.value/2);
        else trueVoxine((parseInt(TVx.value)+1)/2);
        }

        //CVx
        if(!isNaN(1*CVx.value)){
        if(1*CVx.value % 64 == 0) chargedVoxine(CVx.value/64);
        else chargedVoxine(Math.ceil(CVx.value/64));
        }

        


        if(Depths){
            output.innerHTML = makeListDepth();
        }
        else{
            output.innerHTML = makeList();
        }
    })



export function venturium(x){
    elementak(5*x);
    tyrantizum(3*x);
    hyperunobtainium(5*x);
    metarnityle(3*x);
    trueVoxine(3*x);
    Journoule += 9*x;
}

export function trueVoxine(x){
    if(x % 2 == 0){
        chargedVoxine(x/2);
    }
    else{
        (chargedVoxine((x+1)/2));
    }
    complux(2*x);
    Niobium += 2*x;
    Kappron += 4*x;
    apeirodyn(4*x);
    Nepium += 1*x;
}

export function chargedVoxine(x){
    Etherglow += 64*x;
    Gravitral += 7*x;
    hyperviolium(6*x);
    Quasine += 3*x;
    VoxianCluster += 16*x;
    Wonderbrick += 16*x;
}

export function complux(x){
    Necrix += 14*x;
    blipflip(2*x);
    Divinivine += 9*x;
    infusedXepil(4*x);
    Regalin += 8*x;
    Xasium += 9*x;
}

export function infusedXepil(x){
    RiftRemnant += 20*x;
    Xepil += 2*x;
}

export function blipflip(x){
    Atomite += 5*x;
    Cubea += 6*x;
    Diversium += 3*x;
    Funkylite += 4*x;
}

export function apeirodyn(x){
    Amperium += 7*x;
    Athenum += 7*x;
    Everstone += 32*x;
    Norrt += 48*x;
    refinedMercury(9*x);
}

export function metarnityle(x){
    archaeon(4*x);
    Photonyke += 1*x;
    primatter(1*x);
    Temporian += 7*x;
    wavettap(4*x);
}

export function primatter(x){
    Aerotheium += 18*x;
    Conjurian += 12*x;
    diviscendium(2*x);
    Novaline += 3*x;
    Petrotheium += 18*x;
    enchantedJetchium(4*x);
}

export function diviscendium(x){
    Cyalminum += 5*x;
    driftflare(2*x);
    lavalim(2*x);
    solidHelium(2*x);
}
export function driftflare(x){
    Cryotheium += 2*x;
    Pyrotheium += 2*x;
    TimeCrystal += 4*x;
}
export function lavalim(x){
    Blazium += 2*x;
    FireCrystal += 4*x;
    Flamanine += 3*x;
    Infrarize += 2*x;
}
export function solidHelium(x){
    Blizzeride += 1*x;
    Ferozium += 7*x;
    LiquidHelium += 16*x;
}

export function wavettap(x){
    chromar(4*x);
    Hieroglyte += 5*x;
    grawbix(1*x);
    Tetrabeam += 4*x;
    Tetramyle += 4*x;
}

export function chromar(x){
    Bismuth += 1*x;
    Chromium += 16*x;
    refinedIridium(7*x);
    Spectrian += 3*x;
}

export function grawbix(x){
    refinedPalladium(2*x);
    Cragnium += 7*x;
    Feldspar += 2*x;
    refinedZinc(3*x);
    Tourmaline += 1*x;
    Viridian += 4*x;

}

export function archaeon(x){
    Deltodyx += 5*x;
    Destilliur += 7*x;
    Hallowze += 5*x;
    Miraculite += 3*x;
    Osmium += 16*x;
    Zenthineum += 3*x;
}

export function hyperunobtainium(x){
    Abysmium += 16*x;
    Galaxite += 10*x;
    Heliodor += 10*x;
    Implodium += 6*x;
    Manyullyn += 2*x;
    Mythapollyon += 2*x;
    superunobtanium(3*x);
}

export function tyrantizum(x){
    Kragtonyke += 4*x;
    Obliviore += 3*x;
    Painite += 1*x;
    poltergeire(2*x);
    staticacyne(1*x);
    Technetium += 1*x;
}

export function staticacyne(x){
    Apognosive += 4*x;
    refinedCalcium(18*x);
    refinedHafnium(12*x);
    nihilize(2*x);
    Poindextire += 6*x;

}

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

export function nihilize(x){
    Anarquize += 2*x;
    athil(2*x);
    cygnum(2*x);
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
    transcendium(x);
    superviolium(5*x);
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

export function athil(x){
    Monolite += x;
    Tissuryal += x;
    Axnit += x;
}

export function cygnum(x){
    Monoflame += x;
    Disruptoil += x;
    Iocryx += x;
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
    Violium += 1*x;
    Azurite += 1*x;
}

export function equilibrian(x){
    Dystopium += 1*x;
    Utopium += 1*x;
}

//Refined
export function refinedIridium(x){
    IridiumOre += 1*x;
    Ichryde += 1*x;
}
export function refinedCalcium(x){
    CalciumOre += x;
    Ichryde += x; 
}
export function refinedHafnium(x){
    HafniumOre += x;
    Ichryde += x; 
}
export function refinedPalladium(x){
    PalladiumOre += 1*x;
    Carbon += 1*x;
}
export function refinedZinc(x){
    ZincOre += 1*x;
    Combustium += 1*x;
}
export function refinedMercury(x){
    MercuryOre += 1*x;
    Phosphorus += 1*x;
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
    Apognosive = 0;
    Poindextire = 0;
    HafniumOre = 0;
    CalciumOre = 0;
    Monoflame = 0;
    Monolite = 0;
    Axnit = 0;
    Iocryx = 0;
    Tissuryal = 0;
    Disruptoil = 0;
    Anarquize = 0;
    Ichryde = 0;
    Painite = 0;
    Technetium = 0;
    Kragtonyke = 0;
    Obliviore = 0;
    Mythapollyon = 0;
    Implodium = 0;
    Heliodor = 0;
    Manyullyn = 0;
    Galaxite = 0;
    Abysmium = 0;
    Deltodyx = 0;
    Destilliur = 0;
    Hallowze = 0;
    Miraculite = 0;
    Osmium = 0;
    Zenthineum = 0;
    Photonyke = 0;
    Temporian = 0;
    Hieroglyte = 0;
    Tetrabeam = 0;
    Tetramyle = 0;
    PalladiumOre = 0;
    ZincOre = 0;
    Cragnium = 0;
    Feldspar = 0;
    Viridian = 0;
    Tourmaline = 0;
    Carbon = 0;
    Combustium = 0;
    Chromium = 0;
    Spectrian = 0;
    IridiumOre = 0;
    Journoule = 0;
    Nepium = 0;
    Kappron = 0;
    Niobium = 0;
    Phosphorus = 0;
    MercuryOre = 0;
    Athenum = 0;
    Norrt = 0;
    Everstone = 0;
    Amperium = 0;
    Cubea = 0;
    Funkylite = 0;
    Atomite = 0;
    Diversium = 0;
    Divinivine = 0;
    Xepil = 0;
    RiftRemnant = 0;
    Regalin = 0;
    Xasium = 0;
    Necrix = 0;
    Etherglow = 0;
    VoxianCluster = 0;
    Quasine = 0;
    Gravitral = 0;
    Wonderbrick = 0;
    Novaline = 0;
    Conjurian = 0;
    Aerotheium = 0;
    Petrotheium = 0;
    Cyalminum = 0;
    FireCrystal = 0;
    Blazium = 0;
    Flamanine = 0;
    Infrarize = 0;
    LiquidHelium = 0;
    Blizzeride = 0;
    Ferozium = 0;
    TimeCrystal = 0;
    Pyrotheium = 0;
    Cryotheium = 0;
}

export function makeList(){
    var out = "<br>Shift 0:<br>";

    if(Chlorophyte > 0) out += "<br>Chlorophyte x" + Chlorophyte;
    if(Sand > 0) out += "<br>Sand x" + Sand;
    if(Carbon > 0) out += "<br>Carbon x" + Carbon;
    if(Chromium > 0) out += "<br>Chromium x" + Chromium;
    if(Tanzanite > 0) out += "<br>Tanzanite x" + Tanzanite;
    if(Azurite > 0) out += "<br>Azurite x" + Azurite;
    if(Nepium > 0) out += "<br>Nepium x" + Nepium;
    if(PalladiumOre > 0) out += "<br>Palladium Ore x" + PalladiumOre;
    if(Violium > 0) out += "<br>Violium x" + Violium;
    if(Osmium > 0) out += "<br>Osmium x" + Osmium;
    if(Painite > 0) out += "<br>Painite x" + Painite;
    if(Phosphorus > 0) out += "<br>Phosphorus x" + Phosphorus;
    if(Desoleium > 0) out += "<br>Desoleium x" + Desoleium;
    if(FireCrystal > 0) out += "<br>Fire Crystal x" + FireCrystal;
    if(Photonyke > 0) out += "<br>Photonyke x" + Photonyke;
    if(Luxium > 0) out += "<br>Luxium x" + Luxium;
    if(Adurite > 0) out += "<br>Adurite x" + Adurite;
    if(Cragnium > 0) out += "<br>Cragnium x" + Cragnium;
    if(Vermite > 0) out += "<br>Vermite x" + Vermite;
    if(Viridian > 0) out += "<br>Viridian x" + Viridian;
    if(Luminte > 0) out += "<br>Luminte x" + Luminte;
    if(Unobtanium > 0) out += "<br>Unobtanium x" + Unobtanium;
    if(Amperium > 0) out += "<br>Amperium x" + Amperium;
    if(Rhodium > 0) out += "<br>Rhodium x" + Rhodium;
    if(Chrysoberyl > 0) out += "<br>Chrysoberyl x" + Chrysoberyl;
    if(MercuryOre > 0) out += "<br>Mercury Ore x" + MercuryOre;
    if(Ferozium > 0) out += "<br>Ferozium x" + Ferozium;
    if(Nebulyium > 0) out += "<br>Nebulyium x" + Nebulyium;
    if(Spectrian > 0) out += "<br>Spectrian x" + Spectrian;
    if(TimeCrystal > 0) out += "<br>Time Crystal x" + TimeCrystal;
    if(Galaxite > 0) out += "<br>Galaxite x" + Galaxite;
    if(Dystopium > 0) out += "<br>Dystopium x" + Dystopium;
    if(Flamanine > 0) out += "<br>Flamanine x" + Flamanine;
    if(Blazium > 0) out += "<br>Blazium x" + Blazium;
    if(Pyrotheium > 0) out += "<br>Pyrotheium x" + Pyrotheium;
    if(Everstone > 0) out += "<br>Everstone x" + Everstone;
    if(Technetium > 0) out += "<br>Technetium x" + Technetium;
    if(Abysmium > 0) out += "<br>Abysmium x" + Abysmium;
    if(Compressium > 0) out += "<br>Compressium x" + Compressium;
    if(Utopium > 0) out += "<br>Utopium x" + Utopium;
    if(Cryptium > 0) out += "<br>Cryptium x" + Cryptium;
    if(Infernum > 0) out += "<br>Infernum x" + Infernum;
    if(Quantizite > 0) out += "<br>Quantizite x" + Quantizite;
    if(Jetchium > 0) out += "<br>Jetchium x" + Jetchium;
    if(Tafil > 0) out += "<br>Tafil x" + Tafil;
    if(Zetsite > 0) out += "<br>Zetsite x" + Zetsite;
    if(Plasmyx > 0) out += "<br>Plasmyx x" + Plasmyx;
    if(Xasium > 0) out += "<br>Xasium x" + Xasium;
    if(Cautite > 0) out += "<br>Cautite x" + Cautite;
    if(Cursedfire > 0) out += "<br>Cursedfire x" + Cursedfire;
    if(Combustium > 0) out += "<br>Combustium x" + Combustium;
    if(Impervium > 0) out += "<br>Impervium x" + Impervium;
    if(Bismuth > 0) out += "<br>Bismuth x" + Bismuth;
    if(Singularium > 0) out += "<br>Singularium x" + Singularium;
    if(Atomite > 0) out += "<br>Atomite x" + Atomite;

    out += "<br><br>Shift 1:<br>"

    //Shift 1
    if(ZincOre > 0) out += "<br>Zinc Ore x" + ZincOre;
    if(Attrite > 0) out += "<br>Attrite x" + Attrite;
    if(Xepil > 0) out += "<br>Xepil x" + Xepil;
    if(RiftRemnant > 0) out += "<br>Rift Remnant x" + RiftRemnant;
    if(Feldspar > 0) out += "<br>Feldspar x" + Feldspar;
    if(Corruptium > 0) out += "<br>Corruptium x" + Corruptium;
    if(Tourmaline > 0) out += "<br>Tourmaline x" + Tourmaline;
    if(Cursedcurrent > 0) out += "<br>Cursedcurrent x" + Cursedcurrent;
    if(Niobium > 0) out += "<br>Niobium x" + Niobium;
    if(Runyx > 0) out += "<br>Runyx x" + Runyx;
    if(Ufrium > 0) out += "<br>Ufrium x" + Ufrium;
    if(Obladite > 0) out += "<br>Obladite x" + Obladite;
    if(Hyperbolt > 0) out += "<br>Hyperbolt x" + Hyperbolt;
    if(Necrix > 0) out += "<br>Necrix x" + Necrix;
    if(Regalin > 0) out += "<br>Regalin x" + Regalin;
    if(Manyullyn > 0) out += "<br>Manyullyn x" + Manyullyn;
    if(Cubea > 0) out += "<br>Cubea x" + Cubea;
    if(Diversium > 0) out += "<br>Diversium x" + Diversium;
    if(Smouldersite > 0) out += "<br>Smouldersite x" + Smouldersite;
    if(Infrarize > 0) out += "<br>Infrarize x" + Infrarize;
    if(Cinderplate > 0) out += "<br>Cinderplate x" + Cinderplate;
    if(Spicyte > 0) out += "<br>Spicyte x" + Spicyte;
    if(Aftermite > 0) out += "<br>Aftermite x" + Aftermite;
    if(Implodium > 0) out += "<br>Implodium x" + Implodium;
    if(Absurdium > 0) out += "<br>Absurdium x" + Absurdium;
    if(Funkylite > 0) out += "<br>Funkylite x" + Funkylite;
    if(Gluonyke > 0) out += "<br>Gluonyke x" + Gluonyke;
    if(Univine > 0) out += "<br>Univine x" + Univine;
    if(Quasine > 0) out += "<br>Quasine x" + Quasine;
    if(Quarkian > 0) out += "<br>Quarkian x" + Quarkian;
    if(Antiquarkian > 0) out += "<br>Antiquarkian x" + Antiquarkian;
    if(LiquidHelium> 0) out += "<br>Liquid Helium x" + LiquidHelium;
    if(Cryotheium > 0) out += "<br>Cryotheium x" + Cryotheium;
    if(Frystwyst > 0) out += "<br>Frystwyst x" + Frystwyst;
    if(Frostflake > 0) out += "<br>Frostflake x" + Frostflake;
    if(Blizzeride > 0) out += "<br>Blizzeride x" + Blizzeride;
    if(Granulite > 0) out += "<br>Granulite x" + Granulite;
    if(Flickerfreeze > 0) out += "<br>Flickerfreeze x" + Flickerfreeze;
    if(Incyclite > 0) out += "<br>Incyclite x" + Incyclite;
    if(SolidNitrogen > 0) out += "<br>Solid Nitrogen x" + SolidNitrogen;

    out += "<br><br>Graveyard:<br>"

    //Graveyard
    if(Ichryde > 0) out += "<br>Ichryde x" + Ichryde;
    if(Decaynix > 0) out += "<br>Decaynix x" + Decaynix;
    if(Ghouleum > 0) out += "<br>Ghouleum x" + Ghouleum;
    if(Hieroglyte > 0) out += "<br>Hieroglyte Ore x" + Hieroglyte;
    if(Monoflame > 0) out += "<br>Monoflame x" + Monoflame;
    if(Monolite > 0) out += "<br>Monolite x" + Monolite;
    if(Disruptoil > 0) out += "<br>Disruptoil x" + Disruptoil;
    if(Tissuryal > 0) out += "<br>Tissuryal x" + Tissuryal;
    if(HafniumOre > 0) out += "<br>Hafnium Ore x" + HafniumOre;
    if(Sanguicaedis > 0) out += "<br>Sanguicaedis x" + Sanguicaedis;
    if(Axnit > 0) out += "<br>Axnit x" + Axnit;
    if(Iocryx > 0) out += "<br>Iocryx x" + Iocryx;
    if(Anarquize > 0) out += "<br>Anarquize x" + Anarquize;
    if(Phantasmire > 0) out += "<br>Phantasmire x" + Phantasmire;
    if(Enfanissin > 0) out += "<br>Enfanissin x" + Enfanissin;
    if(Poindextire > 0) out += "<br>Poindextire x" + Poindextire;
    if(Apognosive > 0) out += "<br>Apognosive x" + Apognosive;
    if(Obliviore > 0) out += "<br>Obliviore x" + Obliviore;
    if(Kragtonyke > 0) out += "<br>Kragtonyke x" + Kragtonyke;
    if(CalciumOre > 0) out += "<br>Calcium Ore x" + CalciumOre;

    out += "<br><br>Paradise:<br>"

    //Paradise

    if(Hallowze > 0) out += "<br>Hallowze x" + Hallowze;
    if(Destilliur > 0) out += "<br>Destilliur x" + Destilliur;
    if(Cyalminum > 0) out += "<br>Cyalminum x" + Cyalminum;
    if(Heliodor > 0) out += "<br>Heliodor x" + Heliodor;
    if(Mythapollyon > 0) out += "<br>Mythapollyon x" + Mythapollyon;
    if(Wonderbrick > 0) out += "<br>Wonderbrick x" + Wonderbrick;
    if(Deltodyx > 0) out += "<br>Deltodyx x" + Deltodyx;
    if(Miraculite > 0) out += "<br>Miraculite x" + Miraculite;
    if(Etherglow > 0) out += "<br>Etherglow x" + Etherglow;
    if(Divinivine > 0) out += "<br>Divinivine x" + Divinivine;
    if(Zenthineum > 0) out += "<br>Zenthineum x" + Zenthineum;
    if(Aerotheium > 0) out += "<br>Aerotheium x" + Aerotheium;
    if(Petrotheium > 0) out += "<br>Petrotheium x" + Petrotheium;
    if(Athenum > 0) out += "<br>Athenum x" + Athenum;
    if(Novaline > 0) out += "<br>Novaline x" + Novaline;
    if(Tetrabeam > 0) out += "<br>Tetrabeam x" + Tetrabeam;
    if(Tetramyle > 0) out += "<br>Tetramyle x" + Tetramyle;
    if(Kappron > 0) out += "<br>Kappron x" + Kappron;
    if(Conjurian > 0) out += "<br>Conjurian x" + Conjurian;
    if(Temporian > 0) out += "<br>Temporian x" + Temporian;
    if(Gravitral > 0) out += "<br>Gravitral x" + Gravitral;
    if(Journoule > 0) out += "<br>Journoule x" + Journoule;
    if(Norrt > 0) out += "<br>Norrt x" + Norrt;
    if(IridiumOre > 0) out += "<br>Iridium Ore x" + IridiumOre;
    if(VoxianCluster > 0) out += "<br>Voxian Cluster x" + VoxianCluster;
    
    
    out += "<br><br>Ruinus:<br>"

    //Ruinus
    if(Bilaterite > 0) out += "<br>Bilaterite x" + Bilaterite;
    if(Stalagstone > 0) out += "<br>Stalagstone x" + Stalagstone;
    if(Stasistiss > 0) out += "<br>Stasistiss x" + Stasistiss ;
    if(Sciniate > 0) out += "<br>Sciniate x" + Sciniate;
    if(Tangeriate > 0) out += "<br>Tangeriate x" + Tangeriate;
    if(Fractastone > 0) out += "<br>Fractastone x" + Fractastone;
    if(Hexaflexium > 0) out += "<br>Hexaflexium x" + Hexaflexium;
    if(Radium > 0) out += "<br>Radium x" + Radium;
    if(Rochestar > 0) out += "<br>Rochestar x" + Rochestar;
    if(Creedite > 0) out += "<br>Creedite x" + Creedite;
    if(Lightskyze > 0) out += "<br>Lightskyze x" + Lightskyze;
    if(Nightskyze > 0) out += "<br>Nightskyze x" + Nightskyze;
    if(Fluorite > 0) out += "<br>Fluorite x" + Fluorite;
    
    //out += "<br><br>Depletia:<br>"
    
    //Depletia

    return out;
 }

 export function makeListDepth(){
    var out = "<br>Shift 0:<br>";
    
    if(Chlorophyte > 0) out += "<br>Chlorophyte x" + Chlorophyte  + " Surface";
    if(Sand > 0) out += "<br>Sand x" + Sand  + " Surface";
    if(Carbon > 0) out += "<br>Carbon x" + Carbon  + " (600m)";
    if(Chromium > 0) out += "<br>Chromium x" + Chromium  + " (1000m)";
    if(Tanzanite > 0) out += "<br>Tanzanite x" + Tanzanite  + " (1000m-1400m)";
    if(Azurite > 0) out += "<br>Azurite x" + Azurite  + " (1375m)";
    if(Nepium > 0) out += "<br>Nepium x" + Nepium  + " Nepium (1400m-1900m)";
    if(PalladiumOre > 0) out += "<br>Palladium Ore x" + PalladiumOre  + " (1800m)";
    if(Violium > 0) out += "<br>Violium x" + Violium  + " (1800m)";
    if(Osmium > 0) out += "<br>Osmium x" + Osmium  + " (2000m)";
    if(Painite > 0) out += "<br>Painite x" + Painite  + " (2000m-2500m)";
    if(Phosphorus > 0) out += "<br>Phosphorus x" + Phosphorus  + " (2400m)";
    if(Desoleium > 0) out += "<br>Desoleium x" + Desoleium  + " (2400m)";
    if(FireCrystal > 0) out += "<br>Fire Crystal x" + FireCrystal  + " (2400m)";
    if(Photonyke > 0) out += "<br>Photonyke x" + Photonyke  + " (2500m-3000m)";
    if(Luxium > 0) out += "<br>Luxium x" + Luxium  + " (2600m)";
    if(Adurite > 0) out += "<br>Adurite x" + Adurite  + " (2900m)";
    if(Cragnium > 0) out += "<br>Cragnium x" + Cragnium  + " (3000m)";
    if(Vermite > 0) out += "<br>Vermite x" + Vermite  + " (3000m-3475m)";
    if(Viridian > 0) out += "<br>Viridian x" + Viridian  + " (3470m)";
    if(Luminte > 0) out += "<br>Luminte x" + Luminte  + " (3475m)";
    if(Unobtanium > 0) out += "<br>Unobtanium x" + Unobtanium  + " (3480m-3520m)";
    if(Amperium > 0) out += "<br>Amperium x" + Amperium  + " (3480m-3520m)";
    if(Rhodium > 0) out += "<br>Rhodium x" + Rhodium  + " (3525m)";
    if(Chrysoberyl > 0) out += "<br>Chrysoberyl x" + Chrysoberyl  + " (3525m-4000m)";
    if(MercuryOre > 0) out += "<br>Mercury Ore x" + MercuryOre  + " (3900m)";
    if(Ferozium > 0) out += "<br>Ferozium x" + Ferozium  + " (3900m)";
    if(Nebulyium > 0) out += "<br>Nebulyium x" + Nebulyium  + " (3900m)";
    if(Spectrian > 0) out += "<br>Spectrian x" + Spectrian  + " (3980m)";
    if(TimeCrystal > 0) out += "<br>Time Crystal x" + TimeCrystal  + " (3980m)";
    if(Galaxite > 0) out += "<br>Galaxite x" + Galaxite  + " (3980m)";
    if(Dystopium > 0) out += "<br>Dystopium x" + Dystopium  + " (4000m)";
    if(Flamanine > 0) out += "<br>Flamanine x" + Flamanine  + " (4500m)";
    if(Blazium > 0) out += "<br>Blazium x" + Blazium  + " (4500m)";
    if(Pyrotheium > 0) out += "<br>Pyrotheium x" + Pyrotheium  + " (4500m)";
    if(Everstone > 0) out += "<br>Everstone x" + Everstone  + " (4500m)";
    if(Technetium > 0) out += "<br>Technetium x" + Technetium  + " (4500m-5000m)";
    if(Abysmium > 0) out += "<br>Abysmium x" + Abysmium  + " (5000m)";
    if(Compressium > 0) out += "<br>Compressium x" + Compressium  + " (5000m)";
    if(Utopium > 0) out += "<br>Utopium x" + Utopium  + " (5000m)";
    if(Cryptium > 0) out += "<br>Cryptium x" + Cryptium  + " (5200m)";
    if(Infernum > 0) out += "<br>Infernum x" + Infernum  + " (5450m)";
    if(Quantizite > 0) out += "<br>Quantizite x" + Quantizite  + " (5500m)";
    if(Jetchium > 0) out += "<br>Jetchium x" + Jetchium  + " (5500m)";
    if(Tafil > 0) out += "<br>Tafil x" + Tafil  + " (5500m)";
    if(Zetsite > 0) out += "<br>Zetsite x" + Zetsite  + " (5800m)";
    if(Plasmyx > 0) out += "<br>Plasmyx x" + Plasmyx  + " (5850m)";
    if(Xasium > 0) out += "<br>Xasium x" + Xasium  + " (5885m)";
    if(Cautite > 0) out += "<br>Cautite x" + Cautite  + " (5900m)";
    if(Cursedfire > 0) out += "<br>Cursedfire x" + Cursedfire  + " (5900m)";
    if(Combustium > 0) out += "<br>Combustium x" + Combustium  + " (5900m)";
    if(Impervium > 0) out += "<br>Impervium x" + Impervium  + " (5905m)";
    if(Bismuth > 0) out += "<br>Bismuth x" + Bismuth  + " (5975m)";
    if(Singularium > 0) out += "<br>Singularium x" + Singularium  + " (5975m)";
    if(Atomite > 0) out += "<br>Atomite x" + Atomite  + " (5999m)";

    out += "<br><br>Shift 1:<br>"

    //Shift 1
    if(ZincOre > 0) out += "<br>Zinc Ore x" + ZincOre + " (6150m)";
    if(Attrite > 0) out += "<br>Attrite x" + Attrite + " (6100m)";
    if(Xepil > 0) out += "<br>Xepil x" + Xepil + " (6300m)";
    if(RiftRemnant > 0) out += "<br>Rift Remnant x" + RiftRemnant + " (6375m)";
    if(Feldspar > 0) out += "<br>Feldspar x" + Feldspar + " (6400m)";
    if(Corruptium > 0) out += "<br>Corruptium x" + Corruptium + " (6450m)";
    if(Tourmaline > 0) out += "<br>Tourmaline x" + Tourmaline + " (6600m)";
    if(Cursedcurrent > 0) out += "<br>Cursedcurrent x" + Cursedcurrent + " (6750m)";
    if(Niobium > 0) out += "<br>Niobium x" + Niobium + " (6975m-7000m)";
    if(Runyx > 0) out += "<br>Runyx x" + Runyx + " (7000m)";
    if(Ufrium > 0) out += "<br>Ufrium x" + Ufrium + " (7000m)";
    if(Obladite > 0) out += "<br>Obladite x" + Obladite + " (7000m)";
    if(Hyperbolt > 0) out += "<br>Hyperbolt x" + Hyperbolt + " (7000m)";
    if(Necrix > 0) out += "<br>Necrix x" + Necrix + " (7100m)";
    if(Regalin > 0) out += "<br>Regalin x" + Regalin + " (7250m)";
    if(Manyullyn > 0) out += "<br>Manyullyn x" + Manyullyn + " (7300m)";
    if(Cubea > 0) out += "<br>Cubea x" + Cubea + " (7450m)";
    if(Diversium > 0) out += "<br>Diversium x" + Diversium + " (7475m)";
    if(Smouldersite > 0) out += "<br>Smouldersite x" + Smouldersite + " (7505m + 8195m)";
    if(Infrarize > 0) out += "<br>Infrarize x" + Infrarize + " (7525m)";
    if(Cinderplate > 0) out += "<br>Cinderplate x" + Cinderplate + " (7900m)";
    if(Spicyte > 0) out += "<br>Spicyte x" + Spicyte + " (8100m)";
    if(Aftermite > 0) out += "<br>Aftermite x" + Aftermite + " (8200m)";
    if(Implodium > 0) out += "<br>Implodium x" + Implodium + " (8200m)";
    if(Absurdium > 0) out += "<br>Absurdium x" + Absurdium + " (8200m-8300m)";
    if(Funkylite > 0) out += "<br>Funkylite x" + Funkylite + " (8200m-8300m)";
    if(Gluonyke > 0) out += "<br>Gluonyke x" + Gluonyke + " (8210m + 8290m)";
    if(Univine > 0) out += "<br>Univine x" + Univine + " (8220m + 8280m)";
    if(Quasine > 0) out += "<br>Quasine x" + Quasine + " (8250m)";
    if(Quarkian > 0) out += "<br>Quarkian x" + Quarkian + " (8300m)";
    if(Antiquarkian > 0) out += "<br>Antiquarkian x" + Antiquarkian + " (8300m)";
    if(LiquidHelium> 0) out += "<br>Liquid Helium x" + LiquidHelium + " (8300m-8999m)";
    if(Cryotheium > 0) out += "<br>Cryotheium x" + Cryotheium + " (8300m)";
    if(Frystwyst > 0) out += "<br>Frystwyst x" + Frystwyst + " (8400m)";
    if(Frostflake > 0) out += "<br>Frostflake x" + Frostflake + " (8700m)";
    if(Blizzeride > 0) out += "<br>Blizzeride x" + Blizzeride + " (8750m)";
    if(Granulite > 0) out += "<br>Granulite x" + Granulite + " (8750m-8999m)";
    if(Flickerfreeze > 0) out += "<br>Flickerfreeze x" + Flickerfreeze + " (8900m)";
    if(Incyclite > 0) out += "<br>Incyclite x" + Incyclite + " (8970m-8999m)";
    if(SolidNitrogen > 0) out += "<br>Solid Nitrogen x" + SolidNitrogen + " (8999m)";

    out += "<br><br>Graveyard:<br>"

    //Graveyard
    if(Ichryde > 0) out += "<br>Ichryde x" + Ichryde + " (9001m-9999m)";
    if(Decaynix > 0) out += "<br>Decaynix x" + Decaynix + " (9075m)";
    if(Ghouleum > 0) out += "<br>Ghouleum x" + Ghouleum + " (9100m)";
    if(Hieroglyte > 0) out += "<br>Hieroglyte Ore x" + Hieroglyte + " (9250m)";
    if(Monoflame > 0) out += "<br>Monoflame x" + Monoflame + " (9300m)";
    if(Monolite > 0) out += "<br>Monolite x" + Monolite + " (9300m)";
    if(Disruptoil > 0) out += "<br>Disruptoil x" + Disruptoil + " (9360m)";
    if(Tissuryal > 0) out += "<br>Tissuryal x" + Tissuryal + " (9375m)";
    if(HafniumOre > 0) out += "<br>Hafnium Ore x" + HafniumOre + " (9394m)";
    if(Sanguicaedis > 0) out += "<br>Sanguicaedis x" + Sanguicaedis + " (9400m)";
    if(Axnit > 0) out += "<br>Axnit x" + Axnit + " (9400m)";
    if(Iocryx > 0) out += "<br>Iocryx x" + Iocryx + " (9400m)";
    if(Anarquize > 0) out += "<br>Anarquize x" + Anarquize + " (9400m)";
    if(Phantasmire > 0) out += "<br>Phantasmire x" + Phantasmire + "(9420m) ";
    if(Enfanissin > 0) out += "<br>Enfanissin x" + Enfanissin + " (9420m)";
    if(Poindextire > 0) out += "<br>Poindextire x" + Poindextire + " (9460m)";
    if(Apognosive > 0) out += "<br>Apognosive x" + Apognosive + " (9460m)";
    if(Obliviore > 0) out += "<br>Obliviore x" + Obliviore + " (9475m)";
    if(Kragtonyke > 0) out += "<br>Kragtonyke x" + Kragtonyke + " (9480m)";
    if(CalciumOre > 0) out += "<br>Calcium Ore x" + CalciumOre + " (9495m)";

    out += "<br><br>Paradise:<br>"

    //Paradise
    
    if(Hallowze > 0) out += "<br>Hallowze x" + Hallowze + " (9600m)";
    if(Destilliur > 0) out += "<br>Destilliur x" + Destilliur + " (9600m)";
    if(Cyalminum > 0) out += "<br>Cyalminum x" + Cyalminum + " (9600m)";
    if(Heliodor > 0) out += "<br>Heliodor x" + Heliodor + " (9635m)";
    if(Mythapollyon > 0) out += "<br>Mythapollyon x" + Mythapollyon + " (9700m-9800m)";
    if(Wonderbrick > 0) out += "<br>Wonderbrick x" + Wonderbrick + " (9700m)";
    if(Deltodyx > 0) out += "<br>Deltodyx x" + Deltodyx + " (9760m)";
    if(Miraculite > 0) out += "<br>Miraculite x" + Miraculite + "  (9790m + 9930m)";
    if(Etherglow > 0) out += "<br>Etherglow x" + Etherglow + " (9800m)";
    if(Divinivine > 0) out += "<br>Divinivine x" + Divinivine + " (9825m)";
    if(Zenthineum > 0) out += "<br>Zenthineum x" + Zenthineum + " (9830m)";
    if(Aerotheium > 0) out += "<br>Aerotheium x" + Aerotheium + " (9840m)";
    if(Petrotheium > 0) out += "<br>Petrotheium x" + Petrotheium + " (9900m)";
    if(Athenum > 0) out += "<br>Athenum x" + Athenum + " (9905m)";
    if(Novaline > 0) out += "<br>Novaline x" + Novaline + " (9910m)";
    if(Tetrabeam > 0) out += "<br>Tetrabeam x" + Tetrabeam + " (9920m-9930m)";
    if(Tetramyle > 0) out += "<br>Tetramyle x" + Tetramyle + " (9920m-9930m)";
    if(Kappron > 0) out += "<br>Kappron x" + Kappron + " (9920m + 9980m)";
    if(Conjurian > 0) out += "<br>Conjurian x" + Conjurian + " (9925m)";
    if(Temporian > 0) out += "<br>Temporian x" + Temporian + " (9940m)";
    if(Gravitral > 0) out += "<br>Gravitral x" + Gravitral + " (9960m)";
    if(Journoule > 0) out += "<br>Journoule x" + Journoule + " (9970m-9999m)";
    if(Norrt > 0) out += "<br>Norrt x" + Norrt + " (9999m)";
    if(IridiumOre > 0) out += "<br>Iridium Ore x" + IridiumOre + " (9999m)";
    if(VoxianCluster > 0) out += "<br>Voxian Cluster x" + VoxianCluster + " (9999m)";
    
    
    out += "<br><br>Ruinus:<br>"

    //Ruinus
    if(Bilaterite > 0) out += "<br>Bilaterite x" + Bilaterite + " (120m)";
    if(Stalagstone > 0) out += "<br>Stalagstone x" + Stalagstone + " (200m)";
    if(Stasistiss > 0) out += "<br>Stasistiss x" + Stasistiss + " (225m + 425m)";
    if(Sciniate > 0) out += "<br>Sciniate x" + Sciniate + " (300m)";
    if(Tangeriate > 0) out += "<br>Tangeriate x" + Tangeriate + " (350m)";
    if(Fractastone > 0) out += "<br>Fractastone x" + Fractastone + " (450m)";
    if(Hexaflexium > 0) out += "<br>Hexaflexium x" + Hexaflexium + " (450m)";
    if(Radium > 0) out += "<br>Radium x" + Radium + " (465m)";
    if(Rochestar > 0) out += "<br>Rochestar x" + Rochestar + " (510m)";
    if(Creedite > 0) out += "<br>Creedite x" + Creedite + " (520m)";
    if(Lightskyze > 0) out += "<br>Lightskyze x" + Lightskyze + " (580m)";
    if(Nightskyze > 0) out += "<br>Nightskyze x" + Nightskyze + " (600m)";
    if(Fluorite > 0) out += "<br>Fluorite x" + Fluorite + " (625m)";
    
    //out += "<br><br>Depletia:<br>"
    
    //Depletia

    return out;
 }
