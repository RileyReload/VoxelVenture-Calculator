var Ap = document.getElementById("Ap");
var CVx = document.getElementById("CVx");
var Ch = document.getElementById("Ch");
var Cx = document.getElementById("Cx");
var DAl = document.getElementById("DAl");
var DUk = document.getElementById("DUk");
var Dv = document.getElementById("Dv");
var Dk = document.getElementById("Dk");
var Ek = document.getElementById("Ek");
var Ez = document.getElementById("Ez");
var Gx = document.getElementById("Gx");
var Un2 = document.getElementById("Un2");
var Vi2 = document.getElementById("Vi2");
var Mt = document.getElementById("Mt");
var Nz = document.getElementById("Nz");
var Pk = document.getElementById("Pk");
var Po = document.getElementById("Po");
var Pt = document.getElementById("Pt");
var Pm = document.getElementById("Pm");
var Sc = document.getElementById("Sc");
var Sp = document.getElementById("Sp");
var Un1 = document.getElementById("Un1");
var Ts = document.getElementById("Ts");
var TVx = document.getElementById("TVx");
var Ty = document.getElementById("Ty");
var Vn = document.getElementById("Vn");
var Vk = document.getElementById("Vk");
var Wv = document.getElementById("Wv");

var output = document.getElementById("out");
var Depths = false;
var Layers = false;

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
var UraniumOre = 0;
var Promethium = 0;
var IronOre = 0;
var CondensedCarbon = 0;
var VanadiumOre = 0;
var ExineOre = 0;
var Toxintine = 0;
var Elusivite = 0;

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
var Igneiss = 0;
var Mysterian = 0;
var Thermodium = 0;

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
var Perishil = 0;
var Omegar = 0;


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
var ExcelsiumOre = 0;
var Polybium = 0;
var Masstrian = 0;
var Mysticine = 0;

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
var Ruinol = 0;
var ZirconiumOre = 0;
var Selenium = 0;
var Prismawisp = 0;
var Moonstone = 0;
var Americium = 0;
var Conducticon = 0;

//Depletia
var DepletedMatter = 0;
var Polonium = 0;
var Volatilian = 0;
var Blearium = 0;
var Drignar = 0;
var Eclipsym = 0;
var Necropolite = 0;
var Envigorite = 0;
var Oppressium = 0;
var Faradine = 0;
var Tensane = 0;
var Onyx = 0;
var Mordite = 0;
var LeadOre = 0;
var CadmiumOre = 0;
var Berkelium = 0;
var Exodium = 0;
var Muonine = 0;
var Scintillon = 0;

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

//toggle depths
$("#depthsBtn").click(function(){
    if(Depths){ Depths = false;}
    else{ Depths = true;}
    output.innerHTML = makeList();
})

//toggle layers
$("#layersBtn").click(function(){
    if(Layers){ Layers = false;}
    else{ Layers = true;}
    output.innerHTML = makeList();
})

//main button
$("#btn1").click(function(){
    reset();

    //Ap
    if(!isNaN(1*Ap.value)) apeirodyn(Ap.value);

    //CVx
    if(!isNaN(1*CVx.value)) chargedVoxine(CVx.value)

    //Ch
    if(!isNaN(1*Ch.value)) chromar(Ch.value);
    
    //Cx
    if(!isNaN(1*Cx.value)) complux(Cx.value);

    //DAl
    if(!isNaN(1*DAl.value)) destAlbinite(DAl.value);

    //DUk
    if(!isNaN(1*DUk.value)) destUklic(DUk.value);

    //Dv
    if(!isNaN(1*Dv.value)) diviscendium(Dv.value);

    //Dk
    if(!isNaN(1*Dk.value)) duskyze(Dk.value);

    //Ek
    if(!isNaN(1*Ek.value)) elementak(Ek.value);

    //Ez
    if(!isNaN(1*Ez.value)) endozivite(Ez.value);

    //Gx
    if(!isNaN(1*Gx.value)) grawbix(Gx.value);

    //Un++
    if(!isNaN(1*Un2.value)) hyperunobtainium(Un2.value);

    //Vi++
    if(!isNaN(1*Vi2.value)) hyperviolium(Vi2.value);
     
    //Mt
    if(!isNaN(1*Mt.value)) metarnityle(Mt.value);

    //Nz
    if(!isNaN(1*Nz.value)) nihilize(Nz.value);

    //Pk
    if(!isNaN(1*Pk.value)) planckspark(Pk.value)

    //Po
    if(!isNaN(1*Po.value)) polloihedrav(Po.value)

    //Pt
    if(!isNaN(1*Pt.value)) poltergeire(Pt.value);
    
    //Pm
    if(!isNaN(1*Pm.value)) primatter(Pm.value);
        
    //Sc
    if(!isNaN(1*Sc.value)) staticacyne(Sc.value);

    //Sp
    if(!isNaN(1*Sp.value)) superbium(Sp.value);

    //Un+
    if(!isNaN(1*Un1.value)){
    if(1*Un1.value % 2 == 0) superunobtanium(Un1.value/2);
    else superunobtanium((parseInt(Un1.value)+1)/2)
    }

    //Ts
    if(!isNaN(1*Ts.value)) transcendium(Ts.value/2)

    //TVx
    if(!isNaN(1*TVx.value)) trueVoxine(TVx.value/2);
    
    //Ty
    if(!isNaN(1*Ty.value)) tyrantizum(Ty.value);

    //Vn
    if(!isNaN(1*Vn.value)) venturium(Vn.value)

    //Vk
    if(!isNaN(1*Vk.value)) vulkavium(Vk.value);

    //Wv
    if(!isNaN(1*Wv.value)) wavettap(Wv.value);
    

    output.innerHTML = makeList();
})



export function superbium(x){
forbiddion(8*x);
Masstrian += 1*x;
Mysterian += 2*x;
Mysticine += 1*x;
Omegar += 16*x;
Thermodium += 2*x;
}
export function forbiddion(x){
Elusivite += 1*x;
refinedExcelsium(16*x);
Igneiss += 24*x;
Perishil += 18*x;
Polybium += 1*x;
Toxintine += 8*x;
}
export function venturium(x){
if(x%2 == 0){
let y = x/2;
elementak(5*y);
tyrantizum(3*y);
hyperunobtainium(5*y);
metarnityle(3*y);
trueVoxine(3*y);
Journoule += 9*y;
}
else{
let y = (Math.floor(x/2))+1;
elementak(5*y);
tyrantizum(3*y);
hyperunobtainium(5*y);
metarnityle(3*y);
trueVoxine(3*y);
Journoule += 9*y;
}
}
export function trueVoxine(x){
if(x%2 == 0){
let y = x/2;
chargedVoxine(32*y)
complux(2*y);
Niobium += 2*y;
Kappron += 4*y;
apeirodyn(4*y);
Nepium += 1*y;
}
else{
let y = (Math.floor(x/2))+1;
chargedVoxine(32*y)
complux(2*y);
Niobium += 2*y;
Kappron += 4*y;
apeirodyn(4*y);
Nepium += 1*y;
}
}
export function chargedVoxine(x){
if(x%64 == 0){
let y = x/64;
Etherglow += 64*y;
Gravitral += 7*y;
hyperviolium(6*y);
Quasine += 3*y;
VoxianCluster += 16*y;
Wonderbrick += 16*y;
}
else{
let y = (Math.floor(x/64))+1;
Etherglow += 64*y;
Gravitral += 7*y;
hyperviolium(6*y);
Quasine += 3*y;
VoxianCluster += 16*y;
Wonderbrick += 16*y; 
}
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
if(x%2 == 0){
let y = x/2;
Bismuth += 1*y;
Chromium += 16*y;
refinedIridium(7*y);
Spectrian += 3*y;
}
else{
let y = (Math.floor(x/2))+1;  
Bismuth += 1*y;
Chromium += 16*y;
refinedIridium(7*y);
Spectrian += 3*y;  
}
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
if(x%2 == 0){
let y = x/2;
Adurite += 3*y;
Cryptium += 4*y;
Impervium += 4*y;
strainyx(6*y);
Spicyte += 2*y;
Unobtanium += 2*y;
}
else{
let y = (Math.floor(x/2))+1;
Adurite += 3*y;
Cryptium += 4*y;
Impervium += 4*y;
strainyx(6*y);
Spicyte += 2*y;
Unobtanium += 2*y;
}
}
export function hyperviolium(x){
Compressium += 1*x;
Hyperbolt += 7*x;
Singularium += 1*x;
transcendium(1*x);
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
Monolite += 3*x;
Tissuryal += 5*x;
Axnit += x;
}
export function cygnum(x){
Monoflame += 3*x;
Disruptoil += 5*x;
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
if(x%2 == 0){
let y = x/2;
albinite(3*y);
uklic(2*y);
Bismuth += 1*y;
}
else{
let y = (Math.floor(x/2))+1;
albinite(3*y);
uklic(2*y);
Bismuth += 1*y;
}
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
export function midendum(x){
Americium += 4*x;
Moonstone += 3*x;
Prismawisp += 3*x;
Selenium += 2*x;
refinedZirconium(6*x);
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

//Depletia
export function planckspark(x){
Berkelium += 3*x;
electronine(2*x);
Exodium += 2*x;
Granulite += 3*x;
malician(5*x);
Muonine += 20*x;
polloihedrav(3*x);
Scintillon += 9*x;
}
export function polloihedrav(x){
darksteel(5*x);
Eclipsym += 2*x;
ExineOre += 8*x;
midendum(1*x)
Necropolite += 4*x;
sivignite(2*x);
VanadiumOre += 12*x;
}
export function electronine(x){
Amperium += 16*x;
Conducticon += 4*x;
Envigorite += 16*x;
Faradine += 12*x;
Oppressium += 2*x;
quantalyx(2*x);
}
export function malician(x){
refinedCadmium(8*x);
refinedLead(9*x);
Mordite += 3*x;
Onyx += 4*x;
Tensane += 4*x;
}
export function darksteel(x){
Blearium += 2*x;
CondensedCarbon += 3*x;
Drignar += 3*x;
Dystopium += 6*x;
refinedSteel(4*x)
}
export function sivignite(x){
DepletedMatter += 16*x;
refinedUranium(3*x);
Polonium += 1*x;
Promethium += 4*x;
Volatilian += 2*x;
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
export function refinedUranium(x){
UraniumOre += 1*x;
Phosphorus += 1*x;
}
export function refinedIron(x){
Carbon += 1*x;
IronOre += 1*x;
}
export function refinedSteel(x){
Carbon += 1*x;
refinedIron += 2*x;
}
export function refinedZirconium(x){
Ruinol += 1*x;
ZirconiumOre += 1*x;
}
export function refinedLead(x){
Blearium += 1*x;
LeadOre += 1*x;
}
export function refinedCadmium(x){
Blearium += 1*x;
CadmiumOre += 1*x;
}
export function refinedExcelsium(x){
Ichryde += 1*x;
ExcelsiumOre += 1*x;
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
DepletedMatter = 0;
UraniumOre = 0;
Polonium = 0;
Promethium = 0;
Volatilian = 0;
IronOre = 0;
CondensedCarbon = 0;
Blearium = 0;
Drignar = 0;
Ruinol = 0;
ZirconiumOre = 0;
Prismawisp = 0;
Moonstone = 0;
Americium = 0;
Selenium = 0;
VanadiumOre = 0;
ExineOre = 0;
Eclipsym = 0;
Necropolite = 0;
Conducticon = 0;
Envigorite = 0;
Oppressium = 0;
Faradine = 0;
Tensane = 0;
Onyx = 0;
Mordite = 0;
LeadOre = 0;
CadmiumOre = 0;
Berkelium = 0;
Exodium = 0;
Muonine = 0;
Scintillon = 0;
ExcelsiumOre = 0;
Toxintine = 0;
Polybium = 0;
Perishil = 0;
Igneiss = 0;
Elusivite = 0;
Masstrian = 0;
Mysticine = 0;
Mysterian = 0;
Thermodium = 0;
Omegar = 0;

}



export function shift0(){
var out = "";
let SF = Chlorophyte+Sand;
let NM = IronOre+Elusivite+Carbon+Chromium;
let AZ = Tanzanite+Azurite;
let VI = Nepium+PalladiumOre+Violium+CondensedCarbon+Osmium;
let IR = UraniumOre;
let HL = Painite+Phosphorus+Desoleium+FireCrystal;
let GL = Photonyke+Luxium+Adurite+Cragnium;
let UV = Vermite+Viridian+Luminte+VanadiumOre;
let MB = Unobtanium+Amperium+Rhodium;
let LV = Chrysoberyl+MercuryOre+Ferozium+Nebulyium+Spectrian+TimeCrystal+Galaxite+Dystopium;
let MN = Flamanine+Blazium+Pyrotheium+Everstone;
let OC = Technetium+Abysmium+Compressium+Utopium;
let IC = Cryptium+Infernum+Quantizite+Jetchium+Tafil;
let PC = Toxintine+Zetsite+Plasmyx+Xasium+Cautite+Cursedfire+Combustium+ExineOre;
let IS = Impervium+Bismuth+Singularium+Atomite;

if(!Layers && (SF+NM+AZ+VI+IR+HL+GL+UV+MB+LV+MN+OC+IC+PC+IS) != 0) {out += "<br>Shift 0:";}


if(Layers && (SF) !=0) {out += "<br>Surface:";}
out += surface();

if(Layers && (NM) != 0) out += "<br><br>Normal:";
out += normal();

if(Layers && (AZ) != 0) {out += "<br><br>Azurian:";}
out += azurian();

if(Layers && (VI) != 0) {out += "<br><br>Violian:";}
out += violian(); 

if(Layers && (IR) != 0) {out += "<br><br>Irradiated:";}
out += irradiated(); 

if(Layers && (HL) != 0) {out += "<br><br>Hellish:";}
out += hellish();

if(Layers && (GL) != 0) {out += "<br><br>Golden:";}
out += golden();

if(Layers && (UV) != 0) {out += "<br><br>Upper Void:";}
out += upperVoid();

if(Layers && (MB) != 0) {out += "<br><br>Median Burst:";}
out += medianBurst();

if(Layers && (LV) != 0) {out += "<br><br>Lower Void:";}
out += lowerVoid();

if(Layers && (MN) != 0) {out += "<br><br>Mantle:";}
out += mantle();

if(Layers && (OC) != 0) {out += "<br><br>Outer Core:";}
out += outerCore();

if(Layers && (IC) != 0) {out += "<br><br>Inner Core:";}
out += innerCore();

if(Layers && (PC) != 0) {out += "<br><br>Plasma Core:";}
out += plasmaCore();

if(Layers && (IS) != 0) {out += "<br><br>Instability:";}
out += instability();

return out;
} 
export function surface(){
var out = "";

if(Chlorophyte > 0 && Depths) out += "<br>Chlorophyte x" + Chlorophyte  + " Surface";
if(Chlorophyte > 0 && !Depths) out += "<br>Chlorophyte x" + Chlorophyte;
if(Sand > 0 && Depths) out += "<br>Sand x" + Sand  + " Surface";
if(Sand > 0 && !Depths) out += "<br>Sand x" + Sand;

return out
}
export function normal(){
var out = "";

if(IronOre > 0 && Depths) out += "<br>Iron Ore x" + IronOre  + " (500m)";
if(IronOre > 0 && !Depths) out += "<br>Iron Ore x" + IronOre;
if(Elusivite > 0 && Depths) out += "<br>Elusivite x" + Elusivite  + " (600m-9000m)";
if(Elusivite > 0 && !Depths) out += "<br>Elusivite x" + Elusivite;
if(Carbon > 0 && Depths) out += "<br>Carbon x" + Carbon  + " (600m)";
if(Carbon > 0 && !Depths) out += "<br>Carbon x" + Carbon;
if(Chromium > 0 && Depths) out += "<br>Chromium x" + Chromium  + " (1000m)";
if(Chromium > 0 && !Depths) out += "<br>Chromium x" + Chromium;

return out;
}
export function azurian(){
var out = "";

if(Tanzanite > 0 && Depths) out += "<br>Tanzanite x" + Tanzanite  + " (1000m-1400m)";
if(Tanzanite > 0 && !Depths) out += "<br>Tanzanite x" + Tanzanite;
if(Azurite > 0 && Depths) out += "<br>Azurite x" + Azurite  + " (1375m)";
if(Azurite > 0 && !Depths) out += "<br>Azurite x" + Azurite;

return out;
}
export function violian(){
var out = "";

if(Nepium > 0 && Depths) out += "<br>Nepium x" + Nepium  + " (1400m-1900m)";
if(Nepium > 0 && !Depths) out += "<br>Nepium x" + Nepium;
if(PalladiumOre > 0 && Depths) out += "<br>Palladium Ore x" + PalladiumOre  + " (1800m)";
if(PalladiumOre > 0 && !Depths) out += "<br>Palladium Ore x" + PalladiumOre;
if(Violium > 0 && Depths) out += "<br>Violium x" + Violium  + " (1800m)";
if(Violium > 0 && !Depths) out += "<br>Violium x" + Violium;
if(CondensedCarbon > 0 && Depths) out += "<br>Condensed Carbon x" + CondensedCarbon  + " (2000m)";
if(CondensedCarbon > 0 && !Depths) out += "<br>Condensed Carbon x" + CondensedCarbon;
if(Osmium > 0 && Depths) out += "<br>Osmium x" + Osmium  + " (2000m)";
if(Osmium > 0 && !Depths) out += "<br>Osmium x" + Osmium;

return out;
}
export function irradiated(){
    var out  = ""

    if(UraniumOre > 0 && Depths) out += "<br>Uranium Ore x" + UraniumOre  + " (1400m-1900m)";
    if(UraniumOre > 0 && !Depths) out += "<br>Uranium Ore x" + UraniumOre;

    return out;
}
export function hellish(){
var out = "";

if(Painite > 0 && Depths) out += "<br>Painite x" + Painite  + " (2000m-2500m)";
if(Painite > 0 && !Depths) out += "<br>Painite x" + Painite;
if(Phosphorus > 0 && Depths) out += "<br>Phosphorus x" + Phosphorus  + " (2400m)";
if(Phosphorus > 0 && !Depths) out += "<br>Phosphorus x" + Phosphorus;
if(Desoleium > 0 && Depths) out += "<br>Desoleium x" + Desoleium  + " (2400m)";
if(Desoleium > 0 && !Depths) out += "<br>Desoleium x" + Desoleium;
if(FireCrystal > 0 && Depths) out += "<br>Fire Crystal x" + FireCrystal  + " (2400m)";
if(FireCrystal > 0 && !Depths) out += "<br>Fire Crystal x" + FireCrystal;

return out;
}
export function golden(){
var out = ""

if(Photonyke > 0 && Depths) out += "<br>Photonyke x" + Photonyke  + " (2500m-3000m)";
if(Photonyke > 0 && !Depths) out += "<br>Photonyke x" + Photonyke;
if(Luxium > 0 && Depths) out += "<br>Luxium x" + Luxium  + " (2600m)";
if(Luxium > 0 && !Depths) out += "<br>Luxium x" + Luxium;
if(Adurite > 0 && Depths) out += "<br>Adurite x" + Adurite  + " (2900m)";
if(Adurite > 0 && !Depths) out += "<br>Adurite x" + Adurite;
if(Cragnium > 0 && Depths) out += "<br>Cragnium x" + Cragnium  + " (3000m)";
if(Cragnium > 0 && !Depths) out += "<br>Cragnium x" + Cragnium;

return out;
}
export function upperVoid(){
var out = "";

if(Vermite > 0 && Depths) out += "<br>Vermite x" + Vermite  + " (3000m-3475m)";
if(Vermite > 0 && !Depths) out += "<br>Vermite x" + Vermite;
if(Viridian > 0 && Depths) out += "<br>Viridian x" + Viridian  + " (3470m)";
if(Viridian > 0 && !Depths) out += "<br>Viridian x" + Viridian;
if(VanadiumOre > 0 && Depths) out += "<br>Vanadium Ore x" + VanadiumOre  + " (3475m)";
if(VanadiumOre > 0 && !Depths) out += "<br>Vanadium Ore x" + VanadiumOre;
if(Luminte > 0 && Depths) out += "<br>Luminte x" + Luminte  + " (3475m)";
if(Luminte > 0 && !Depths) out += "<br>Luminte x" + Luminte;

return out;
}
export function medianBurst(){
var out = "";

if(Unobtanium > 0 && Depths) out += "<br>Unobtanium x" + Unobtanium  + " (3480m-3520m)";
if(Unobtanium > 0 && !Depths) out += "<br>Unobtanium x" + Unobtanium;
if(Amperium > 0 && Depths) out += "<br>Amperium x" + Amperium  + " (3480m-3520m)";
if(Amperium > 0 && !Depths) out += "<br>Amperium x" + Amperium;
if(Rhodium > 0 && Depths) out += "<br>Rhodium x" + Rhodium  + " (3525m)";
if(Rhodium > 0 && !Depths) out += "<br>Rhodium x" + Rhodium;

return out;
}
export function lowerVoid(){
var out = "";

if(Chrysoberyl > 0 && Depths) out += "<br>Chrysoberyl x" + Chrysoberyl  + " (3525m-4000m)";
if(Chrysoberyl > 0 && !Depths) out += "<br>Chrysoberyl x" + Chrysoberyl;
if(MercuryOre > 0 && Depths) out += "<br>Mercury Ore x" + MercuryOre  + " (3900m)";
if(MercuryOre > 0 && !Depths) out += "<br>Mercury Ore x" + MercuryOre;
if(Ferozium > 0 && Depths) out += "<br>Ferozium x" + Ferozium  + " (3900m)";
if(Ferozium > 0 && !Depths) out += "<br>Ferozium x" + Ferozium;
if(Nebulyium > 0 && Depths) out += "<br>Nebulyium x" + Nebulyium  + " (3900m)";
if(Nebulyium > 0 && !Depths) out += "<br>Nebulyium x" + Nebulyium;
if(Spectrian > 0 && Depths) out += "<br>Spectrian x" + Spectrian  + " (3980m)";
if(Spectrian > 0 && !Depths) out += "<br>Spectrian x" + Spectrian;
if(TimeCrystal > 0 && Depths) out += "<br>Time Crystal x" + TimeCrystal  + " (3980m)";
if(TimeCrystal > 0 && !Depths) out += "<br>Time Crystal x" + TimeCrystal;
if(Galaxite > 0 && Depths) out += "<br>Galaxite x" + Galaxite  + " (3980m)";
if(Galaxite > 0 && !Depths) out += "<br>Galaxite x" + Galaxite;
if(Dystopium > 0 && Depths) out += "<br>Dystopium x" + Dystopium  + " (4000m)";
if(Dystopium > 0 && !Depths) out += "<br>Dystopium x" + Dystopium;

return out;
}
export function mantle(){
var out = "";

if(Flamanine > 0 && Depths) out += "<br>Flamanine x" + Flamanine  + " (4500m)";
if(Flamanine > 0 && !Depths) out += "<br>Flamanine x" + Flamanine;
if(Blazium > 0 && Depths) out += "<br>Blazium x" + Blazium  + " (4500m)";
if(Blazium > 0 && !Depths) out += "<br>Blazium x" + Blazium;
if(Pyrotheium > 0 && Depths) out += "<br>Pyrotheium x" + Pyrotheium  + " (4500m)";
if(Pyrotheium > 0 && !Depths) out += "<br>Pyrotheium x" + Pyrotheium;
if(Everstone > 0 && Depths) out += "<br>Everstone x" + Everstone  + " (4500m)";
if(Everstone > 0 && !Depths) out += "<br>Everstone x" + Everstone;

return out;
}
export function outerCore(){
var out = "";

if(Technetium > 0 && Depths) out += "<br>Technetium x" + Technetium  + " (4500m-5000m)";
if(Technetium > 0 && !Depths) out += "<br>Technetium x" + Technetium;
if(Abysmium > 0 && Depths) out += "<br>Abysmium x" + Abysmium  + " (5000m)";
if(Abysmium > 0 && !Depths) out += "<br>Abysmium x" + Abysmium;
if(Compressium > 0 && Depths) out += "<br>Compressium x" + Compressium  + " (5000m)";
if(Compressium > 0 && !Depths) out += "<br>Compressium x" + Compressium;
if(Utopium > 0 && Depths) out += "<br>Utopium x" + Utopium  + " (5000m)";
if(Utopium > 0 && !Depths) out += "<br>Utopium x" + Utopium;
if(Promethium > 0 && Depths) out += "<br>Promethium x" + Promethium  + " (5000m)";
if(Promethium > 0 && !Depths) out += "<br>Promethium x" + Promethium;

return out;
}
export function innerCore(){
var out = "";

if(Cryptium > 0 && Depths) out += "<br>Cryptium x" + Cryptium  + " (5200m)";
if(Cryptium > 0 && !Depths) out += "<br>Cryptium x" + Cryptium;
if(Infernum > 0 && Depths) out += "<br>Infernum x" + Infernum  + " (5450m)";
if(Infernum > 0 && !Depths) out += "<br>Infernum x" + Infernum;
if(Quantizite > 0 && Depths) out += "<br>Quantizite x" + Quantizite  + " (5500m)";
if(Quantizite > 0 && !Depths) out += "<br>Quantizite x" + Quantizite;
if(Jetchium > 0 && Depths) out += "<br>Jetchium x" + Jetchium  + " (5500m)";
if(Jetchium > 0 && !Depths) out += "<br>Jetchium x" + Jetchium;
if(Tafil > 0 && Depths) out += "<br>Tafil x" + Tafil  + " (5500m)";
if(Tafil > 0 && !Depths) out += "<br>Tafil x" + Tafil;

return out;
}
export function plasmaCore(){
var out = "";

if(Toxintine > 0 && Depths) out += "<br>Toxintine x" + Toxintine  + " (5650m)";
if(Toxintine > 0 && !Depths) out += "<br>Toxintine x" + Toxintine;
if(Zetsite > 0 && Depths) out += "<br>Zetsite x" + Zetsite  + " (5800m)";
if(Zetsite > 0 && !Depths) out += "<br>Zetsite x" + Zetsite;
if(Plasmyx > 0 && Depths) out += "<br>Plasmyx x" + Plasmyx  + " (5850m)";
if(Plasmyx > 0 && !Depths) out += "<br>Plasmyx x" + Plasmyx;
if(Xasium > 0 && Depths) out += "<br>Xasium x" + Xasium  + " (5885m)";
if(Xasium > 0 && !Depths) out += "<br>Xasium x" + Xasium;
if(Cautite > 0 && Depths) out += "<br>Cautite x" + Cautite  + " (5900m)";
if(Cautite > 0 && !Depths) out += "<br>Cautite x" + Cautite;
if(Cursedfire > 0 && Depths) out += "<br>Cursedfire x" + Cursedfire  + " (5900m)";
if(Cursedfire > 0 && !Depths) out += "<br>Cursedfire x" + Cursedfire;
if(Combustium > 0 && Depths) out += "<br>Combustium x" + Combustium  + " (5900m)";
if(Combustium > 0 && !Depths) out += "<br>Combustium x" + Combustium;
if(ExineOre > 0 && Depths) out += "<br>Exine Ore x" + ExineOre  + " (5900m)";
if(ExineOre > 0 && !Depths) out += "<br>Exine Ore x" + ExineOre;

return out;
}
export function instability(){
var out = "";

if(Impervium > 0 && Depths) out += "<br>Impervium x" + Impervium  + " (5905m)";
if(Impervium > 0 && !Depths) out += "<br>Impervium x" + Impervium;
if(Bismuth > 0 && Depths) out += "<br>Bismuth x" + Bismuth  + " (5975m)";
if(Bismuth > 0 && !Depths) out += "<br>Bismuth x" + Bismuth;
if(Singularium > 0 && Depths) out += "<br>Singularium x" + Singularium  + " (5975m)";
if(Singularium > 0 && !Depths) out += "<br>Singularium x" + Singularium;
if(Atomite > 0 && Depths) out += "<br>Atomite x" + Atomite  + " (5999m)";
if(Atomite > 0 && !Depths) out += "<br>Atomite x" + Atomite;

return out;
}



export function shift1(){
var out = "";
let TGR = Mysterian+Thermodium+ZincOre+Attrite+Xepil+RiftRemnant+Feldspar+Corruptium+Tourmaline+Cursedcurrent+Niobium+Runyx+Ufrium+Obladite;
let RD = Hyperbolt+Necrix+Regalin+Manyullyn+Cubea+Diversium;
let TC = Igneiss+Smouldersite+Infrarize+Cinderplate+Spicyte+Aftermite+Implodium;
let QL = Absurdium+Funkylite+Gluonyke+Univine+Quasine+Quarkian+Antiquarkian;
let FF = LiquidHelium+Cryotheium+Frystwyst+Frostflake+Blizzeride+Granulite+Flickerfreeze+Incyclite+SolidNitrogen;

if(!Layers && (TGR+RD+TC+QL+FF) != 0) {out += "<br><br>Shift 1:"}

if(Layers && (TGR) != 0) {out += "<br><br>The Great Rift:";}
out  += theGreatRift();

if(Layers && (RD) != 0) {out += "<br><br>Riftic Discontinuity:";}
out += rifticDiscontinuity();

if(Layers && (TC) != 0) {out += "<br><br>Thermal Collapse:";}
out += thermalCollapse();

if(Layers && (QL) != 0) {out += "<br><br>Quantum Leap:";}
out += quantumLeap();

if(Layers && (FF) != 0) {out += "<br><br>Frost Formation:";}
out += frostFormation();

return out;
}
export function theGreatRift(){
var out = "";

if(Mysterian > 0 && Depths) out += "<br>Mysterian x" + Mysterian + " (6000m-9999m)";
if(Mysterian > 0 && !Depths) out += "<br>Mysterian x" + Mysterian;
if(Thermodium > 0 && Depths) out += "<br>Thermodium x" + Thermodium + " (6000m-9999m)";
if(Thermodium > 0 && !Depths) out += "<br>Thermodium x" + Thermodium;
if(ZincOre > 0 && Depths) out += "<br>Zinc Ore x" + ZincOre + " (6150m)";
if(ZincOre > 0 && !Depths) out += "<br>Zinc Ore x" + ZincOre;
if(Attrite > 0 && Depths) out += "<br>Attrite x" + Attrite + " (6100m)";
if(Attrite > 0 && !Depths) out += "<br>Attrite x" + Attrite;
if(Xepil > 0 && Depths) out += "<br>Xepil x" + Xepil + " (6300m)";
if(Xepil > 0 && !Depths) out += "<br>Xepil x" + Xepil;
if(RiftRemnant > 0 && Depths) out += "<br>Rift Remnant x" + RiftRemnant + " (6375m)";
if(RiftRemnant > 0 && !Depths) out += "<br>Rift Remnant x" + RiftRemnant;
if(Feldspar > 0 && Depths) out += "<br>Feldspar x" + Feldspar + " (6400m)";
if(Feldspar > 0 && !Depths) out += "<br>Feldspar x" + Feldspar;
if(Corruptium > 0 && Depths) out += "<br>Corruptium x" + Corruptium + " (6450m)";
if(Corruptium > 0 && !Depths) out += "<br>Corruptium x" + Corruptium;
if(Tourmaline > 0 && Depths) out += "<br>Tourmaline x" + Tourmaline + " (6600m)";
if(Tourmaline > 0 && !Depths) out += "<br>Tourmaline x" + Tourmaline;
if(Cursedcurrent > 0 && Depths) out += "<br>Cursedcurrent x" + Cursedcurrent + " (6750m)";
if(Cursedcurrent > 0 && !Depths) out += "<br>Cursedcurrent x" + Cursedcurrent;
if(Niobium > 0 && Depths) out += "<br>Niobium x" + Niobium + " (6975m-7000m)";
if(Niobium > 0 && !Depths) out += "<br>Niobium x" + Niobium;
if(Runyx > 0 && Depths) out += "<br>Runyx x" + Runyx + " (7000m)";
if(Runyx > 0 && !Depths) out += "<br>Runyx x" + Runyx;
if(Ufrium > 0 && Depths) out += "<br>Ufrium x" + Ufrium + " (7000m)";
if(Ufrium > 0 && !Depths) out += "<br>Ufrium x" + Ufrium;
if(Obladite > 0 && Depths) out += "<br>Obladite x" + Obladite + " (7000m)";
if(Obladite > 0 && !Depths) out += "<br>Obladite x" + Obladite;

return out;
}
export function rifticDiscontinuity(){
var out = "";

if(Hyperbolt > 0 && Depths) out += "<br>Hyperbolt x" + Hyperbolt + " (7000m)";
if(Hyperbolt > 0 && !Depths) out += "<br>Hyperbolt x" + Hyperbolt;
if(Necrix > 0 && Depths) out += "<br>Necrix x" + Necrix + " (7100m)";
if(Necrix > 0 && !Depths) out += "<br>Necrix x" + Necrix;
if(Regalin > 0 && Depths) out += "<br>Regalin x" + Regalin + " (7250m)";
if(Regalin > 0 && !Depths) out += "<br>Regalin x" + Regalin;
if(Manyullyn > 0 && Depths) out += "<br>Manyullyn x" + Manyullyn + " (7300m)";
if(Manyullyn > 0 && !Depths) out += "<br>Manyullyn x" + Manyullyn;
if(Cubea > 0 && Depths) out += "<br>Cubea x" + Cubea + " (7450m)";
if(Cubea > 0 && !Depths) out += "<br>Cubea x" + Cubea;
if(Diversium > 0 && Depths) out += "<br>Diversium x" + Diversium + " (7475m)";
if(Diversium > 0 && !Depths) out += "<br>Diversium x" + Diversium;

return out;
}
export function thermalCollapse(){
var out = "";


if(Igneiss > 0 && Depths) out += "<br>Igneiss x" + Igneiss + " (7500m + 7588m + 7675m + 7763m + 7850m + 7938m + 8025m + 8113m + 8200m)";
if(Igneiss > 0 && !Depths) out += "<br>Igneiss x" + Igneiss;
if(Smouldersite > 0 && Depths) out += "<br>Smouldersite x" + Smouldersite + " (7505m + 8195m)";
if(Smouldersite > 0 && !Depths) out += "<br>Smouldersite x" + Smouldersite;
if(Infrarize > 0 && Depths) out += "<br>Infrarize x" + Infrarize + " (7525m)";
if(Infrarize > 0 && !Depths) out += "<br>Infrarize x" + Infrarize;
if(Cinderplate > 0 && Depths) out += "<br>Cinderplate x" + Cinderplate + " (7900m)";
if(Cinderplate > 0 && !Depths) out += "<br>Cinderplate x" + Cinderplate;
if(Spicyte > 0 && Depths) out += "<br>Spicyte x" + Spicyte + " (8100m)";
if(Spicyte > 0 && !Depths) out += "<br>Spicyte x" + Spicyte;
if(Aftermite > 0 && Depths) out += "<br>Aftermite x" + Aftermite + " (8200m)";
if(Aftermite > 0 && !Depths) out += "<br>Aftermite x" + Aftermite;
if(Implodium > 0 && Depths) out += "<br>Implodium x" + Implodium + " (8200m)";
if(Implodium > 0 && !Depths) out += "<br>Implodium x" + Implodium;

return out;
}
export function quantumLeap(){
var out = "";

if(Absurdium > 0 && Depths) out += "<br>Absurdium x" + Absurdium + " (8200m-8300m)";
if(Absurdium > 0 && !Depths) out += "<br>Absurdium x" + Absurdium;
if(Funkylite > 0 && Depths) out += "<br>Funkylite x" + Funkylite + " (8200m-8300m)";
if(Funkylite > 0 && !Depths) out += "<br>Funkylite x" + Funkylite;
if(Gluonyke > 0 && Depths) out += "<br>Gluonyke x" + Gluonyke + " (8210m + 8290m)";
if(Gluonyke > 0 && !Depths) out += "<br>Gluonyke x" + Gluonyke;
if(Univine > 0 && Depths) out += "<br>Univine x" + Univine + " (8220m + 8280m)";
if(Univine > 0 && !Depths) out += "<br>Univine x" + Univine;
if(Quasine > 0 && Depths) out += "<br>Quasine x" + Quasine + " (8250m)";
if(Quasine > 0 && !Depths) out += "<br>Quasine x" + Quasine;
if(Quarkian > 0 && Depths) out += "<br>Quarkian x" + Quarkian + " (8300m)";
if(Quarkian > 0 && !Depths) out += "<br>Quarkian x" + Quarkian;
if(Antiquarkian > 0 && Depths) out += "<br>Antiquarkian x" + Antiquarkian + " (8300m)";
if(Antiquarkian > 0 && !Depths) out += "<br>Antiquarkian x" + Antiquarkian;

return out;
}
export function frostFormation(){
var out = "";

if(LiquidHelium> 0 && Depths) out += "<br>Liquid Helium x" + LiquidHelium + " (8300m-8999m)";
if(LiquidHelium> 0 && !Depths) out += "<br>Liquid Helium x" + LiquidHelium;
if(Cryotheium > 0 && Depths) out += "<br>Cryotheium x" + Cryotheium + " (8300m)";
if(Cryotheium > 0 && !Depths) out += "<br>Cryotheium x" + Cryotheium;
if(Frystwyst > 0 && Depths) out += "<br>Frystwyst x" + Frystwyst + " (8400m)";
if(Frystwyst > 0 && !Depths) out += "<br>Frystwyst x" + Frystwyst;
if(Frostflake > 0 && Depths) out += "<br>Frostflake x" + Frostflake + " (8700m)";
if(Frostflake > 0 && !Depths) out += "<br>Frostflake x" + Frostflake;
if(Blizzeride > 0 && Depths) out += "<br>Blizzeride x" + Blizzeride + " (8750m)";
if(Blizzeride > 0 && !Depths) out += "<br>Blizzeride x" + Blizzeride;
if(Granulite > 0 && Depths) out += "<br>Granulite x" + Granulite + " (8750m-8999m)";
if(Granulite > 0 && !Depths) out += "<br>Granulite x" + Granulite;
if(Flickerfreeze > 0 && Depths) out += "<br>Flickerfreeze x" + Flickerfreeze + " (8900m)";
if(Flickerfreeze > 0 && !Depths) out += "<br>Flickerfreeze x" + Flickerfreeze;
if(Incyclite > 0 && Depths) out += "<br>Incyclite x" + Incyclite + " (8970m-8999m)";
if(Incyclite > 0 && !Depths) out += "<br>Incyclite x" + Incyclite;
if(SolidNitrogen > 0 && Depths) out += "<br>Solid Nitrogen x" + SolidNitrogen + " (8999m)";
if(SolidNitrogen > 0 && !Depths) out += "<br>Solid Nitrogen x" + SolidNitrogen;

return out;
}



export function graveyard(){  
var out = "";
var GSum = Polybium+Mysticine+Masstrian+Ichryde+Decaynix+Perishil+Ghouleum+Hieroglyte+Monoflame+Monolite+Disruptoil+Tissuryal+HafniumOre+Sanguicaedis+Axnit+Iocryx+Anarquize+Phantasmire+Enfanissin+Poindextire+Apognosive+Obliviore+Kragtonyke+CalciumOre+Omegar;
if((GSum) != 0)out += "<br><br>Graveyard:";

if(Polybium > 0 && Depths) out += "<br>Polybium x" + Polybium + " (9001m-9999m)";
if(Polybium > 0 && !Depths) out += "<br>Polybium x" + Polybium;
if(Mysticine > 0 && Depths) out += "<br>Mysticine x" + Mysticine + " (9001m-9999m)";
if(Mysticine > 0 && !Depths) out += "<br>Mysticine x" + Mysticine;
if(Masstrian > 0 && Depths) out += "<br>Masstrian x" + Masstrian + " (9001m-9999m)";
if(Masstrian > 0 && !Depths) out += "<br>Masstrian x" + Masstrian;
if(Ichryde > 0 && Depths) out += "<br>Ichryde x" + Ichryde + " (9001m-9999m)";
if(Ichryde > 0 && !Depths) out += "<br>Ichryde x" + Ichryde;
if(Decaynix > 0 && Depths) out += "<br>Decaynix x" + Decaynix + " (9075m)";
if(Decaynix > 0 && !Depths) out += "<br>Decaynix x" + Decaynix;
if(Perishil > 0 && Depths) out += "<br>Perishil x" + Perishil + " (9100m)";
if(Perishil > 0 && !Depths) out += "<br>Perishil x" + Perishil;
if(Ghouleum > 0 && Depths) out += "<br>Ghouleum x" + Ghouleum + " (9100m)";
if(Ghouleum > 0 && !Depths) out += "<br>Ghouleum x" + Ghouleum;
if(Hieroglyte > 0 && Depths) out += "<br>Hieroglyte Ore x" + Hieroglyte + " (9250m)";
if(Hieroglyte > 0 && !Depths) out += "<br>Hieroglyte Ore x" + Hieroglyte;
if(Monoflame > 0 && Depths) out += "<br>Monoflame x" + Monoflame + " (9300m)";
if(Monoflame > 0 && !Depths) out += "<br>Monoflame x" + Monoflame;
if(Monolite > 0 && Depths) out += "<br>Monolite x" + Monolite + " (9300m)";
if(Monolite > 0 && !Depths) out += "<br>Monolite x" + Monolite;
if(Disruptoil > 0 && Depths) out += "<br>Disruptoil x" + Disruptoil + " (9360m)";
if(Disruptoil > 0 && !Depths) out += "<br>Disruptoil x" + Disruptoil;
if(Tissuryal > 0 && Depths) out += "<br>Tissuryal x" + Tissuryal + " (9375m)";
if(Tissuryal > 0 && !Depths) out += "<br>Tissuryal x" + Tissuryal;
if(HafniumOre > 0 && Depths) out += "<br>Hafnium Ore x" + HafniumOre + " (9394m)";
if(HafniumOre > 0 && !Depths) out += "<br>Hafnium Ore x" + HafniumOre;
if(Sanguicaedis > 0 && Depths) out += "<br>Sanguicaedis x" + Sanguicaedis + " (9400m)";
if(Sanguicaedis > 0 && !Depths) out += "<br>Sanguicaedis x" + Sanguicaedis;
if(Axnit > 0 && Depths) out += "<br>Axnit x" + Axnit + " (9400m)";
if(Axnit > 0 && !Depths) out += "<br>Axnit x" + Axnit;
if(Iocryx > 0 && Depths) out += "<br>Iocryx x" + Iocryx + " (9400m)";
if(Iocryx > 0 && !Depths) out += "<br>Iocryx x" + Iocryx;
if(Anarquize > 0 && Depths) out += "<br>Anarquize x" + Anarquize + " (9400m)";
if(Anarquize > 0 && !Depths) out += "<br>Anarquize x" + Anarquize;
if(Phantasmire > 0 && Depths) out += "<br>Phantasmire x" + Phantasmire + "(9420m) ";
if(Phantasmire > 0 && !Depths) out += "<br>Phantasmire x" + Phantasmire;
if(Enfanissin > 0 && Depths) out += "<br>Enfanissin x" + Enfanissin + " (9420m)";
if(Enfanissin > 0 && !Depths) out += "<br>Enfanissin x" + Enfanissin;
if(Poindextire > 0 && Depths) out += "<br>Poindextire x" + Poindextire + " (9460m)";
if(Poindextire > 0 && !Depths) out += "<br>Poindextire x" + Poindextire;
if(Apognosive > 0 && Depths) out += "<br>Apognosive x" + Apognosive + " (9460m)";
if(Apognosive > 0 && !Depths) out += "<br>Apognosive x" + Apognosive;
if(Obliviore > 0 && Depths) out += "<br>Obliviore x" + Obliviore + " (9475m)";
if(Obliviore > 0 && !Depths) out += "<br>Obliviore x" + Obliviore;
if(Kragtonyke > 0 && Depths) out += "<br>Kragtonyke x" + Kragtonyke + " (9480m)";
if(Kragtonyke > 0 && !Depths) out += "<br>Kragtonyke x" + Kragtonyke;
if(CalciumOre > 0 && Depths) out += "<br>Calcium Ore x" + CalciumOre + " (9495m)";
if(CalciumOre > 0 && !Depths) out += "<br>Calcium Ore x" + CalciumOre;
if(Omegar > 0 && Depths) out += "<br>Omegar x" + Omegar + " (9500m)";
if(Omegar > 0 && !Depths) out += "<br>Omegar x" + Omegar;

return out;
}



export function paradise(){
var out = "";
let PSum = Hallowze+Destilliur+Cyalminum+Heliodor+Mythapollyon+Wonderbrick+Deltodyx+ExcelsiumOre+Miraculite+Etherglow+Divinivine+Zenthineum+Aerotheium+Petrotheium+Athenum+Novaline+Tetrabeam+Tetramyle+Kappron+Conjurian+Temporian+Gravitral+Journoule+Norrt+IridiumOre+VoxianCluster;
if((PSum) != 0) out += "<br><br>Paradise:"

if(Hallowze > 0 && Depths) out += "<br>Hallowze x" + Hallowze + " (9600m)";
if(Hallowze > 0 && !Depths) out += "<br>Hallowze x" + Hallowze;
if(Destilliur > 0 && Depths) out += "<br>Destilliur x" + Destilliur + " (9600m)";
if(Destilliur > 0 && !Depths) out += "<br>Destilliur x" + Destilliur;
if(Cyalminum > 0 && Depths) out += "<br>Cyalminum x" + Cyalminum + " (9600m)";
if(Cyalminum > 0 && !Depths) out += "<br>Cyalminum x" + Cyalminum;
if(Heliodor > 0 && Depths) out += "<br>Heliodor x" + Heliodor + " (9635m)";
if(Heliodor > 0 && !Depths) out += "<br>Heliodor x" + Heliodor;
if(Mythapollyon > 0 && Depths) out += "<br>Mythapollyon x" + Mythapollyon + " (9700m-9800m)";
if(Mythapollyon > 0 && !Depths) out += "<br>Mythapollyon x" + Mythapollyon;
if(Wonderbrick > 0 && Depths) out += "<br>Wonderbrick x" + Wonderbrick + " (9700m)";
if(Wonderbrick > 0 && !Depths) out += "<br>Wonderbrick x" + Wonderbrick;
if(Deltodyx > 0 && Depths) out += "<br>Deltodyx x" + Deltodyx + " (9760m)";
if(Deltodyx > 0 && !Depths) out += "<br>Deltodyx x" + Deltodyx;
if(ExcelsiumOre > 0 && Depths) out += "<br>Excelsium Ore x" + ExcelsiumOre + " (9770m)";
if(ExcelsiumOre > 0 && !Depths) out += "<br>Excelsium Ore x" + ExcelsiumOre;
if(Miraculite > 0 && Depths) out += "<br>Miraculite x" + Miraculite + "  (9790m + 9930m)";
if(Miraculite > 0 && !Depths) out += "<br>Miraculite x" + Miraculite;
if(Etherglow > 0 && Depths) out += "<br>Etherglow x" + Etherglow + " (9800m)";
if(Etherglow > 0 && !Depths) out += "<br>Etherglow x" + Etherglow;
if(Divinivine > 0 && Depths) out += "<br>Divinivine x" + Divinivine + " (9825m)";
if(Divinivine > 0 && !Depths) out += "<br>Divinivine x" + Divinivine;
if(Zenthineum > 0 && Depths) out += "<br>Zenthineum x" + Zenthineum + " (9830m)";
if(Zenthineum > 0 && !Depths) out += "<br>Zenthineum x" + Zenthineum;
if(Aerotheium > 0 && Depths) out += "<br>Aerotheium x" + Aerotheium + " (9840m)";
if(Aerotheium > 0 && !Depths) out += "<br>Aerotheium x" + Aerotheium;
if(Petrotheium > 0 && Depths) out += "<br>Petrotheium x" + Petrotheium + " (9900m)";
if(Petrotheium > 0 && !Depths) out += "<br>Petrotheium x" + Petrotheium;
if(Athenum > 0 && Depths) out += "<br>Athenum x" + Athenum + " (9905m)";
if(Athenum > 0 && !Depths) out += "<br>Athenum x" + Athenum;
if(Novaline > 0 && Depths) out += "<br>Novaline x" + Novaline + " (9910m)";
if(Novaline > 0 && !Depths) out += "<br>Novaline x" + Novaline;
if(Tetrabeam > 0 && Depths) out += "<br>Tetrabeam x" + Tetrabeam + " (9920m-9930m)";
if(Tetrabeam > 0 && !Depths) out += "<br>Tetrabeam x" + Tetrabeam;
if(Tetramyle > 0 && Depths) out += "<br>Tetramyle x" + Tetramyle + " (9920m-9930m)";
if(Tetramyle > 0 && !Depths) out += "<br>Tetramyle x" + Tetramyle;
if(Kappron > 0 && Depths) out += "<br>Kappron x" + Kappron + " (9920m + 9980m)";
if(Kappron > 0 && !Depths) out += "<br>Kappron x" + Kappron;
if(Conjurian > 0 && Depths) out += "<br>Conjurian x" + Conjurian + " (9925m)";
if(Conjurian > 0 && !Depths) out += "<br>Conjurian x" + Conjurian;
if(Temporian > 0 && Depths) out += "<br>Temporian x" + Temporian + " (9940m)";
if(Temporian > 0 && !Depths) out += "<br>Temporian x" + Temporian;
if(Gravitral > 0 && Depths) out += "<br>Gravitral x" + Gravitral + " (9960m)";
if(Gravitral > 0 && !Depths) out += "<br>Gravitral x" + Gravitral;
if(Journoule > 0 && Depths) out += "<br>Journoule x" + Journoule + " (9970m-9999m)";
if(Journoule > 0 && !Depths) out += "<br>Journoule x" + Journoule;
if(Norrt > 0 && Depths) out += "<br>Norrt x" + Norrt + " (9999m)";
if(Norrt > 0 && !Depths) out += "<br>Norrt x" + Norrt;
if(IridiumOre > 0 && Depths) out += "<br>Iridium Ore x" + IridiumOre + " (9999m)";
if(IridiumOre > 0 && !Depths) out += "<br>Iridium Ore x" + IridiumOre;
if(VoxianCluster > 0 && Depths) out += "<br>Voxian Cluster x" + VoxianCluster + " (9999m)";
if(VoxianCluster > 0 && !Depths) out += "<br>Voxian Cluster x" + VoxianCluster;

return out;
}



export function ruinus(){
var out = "";
let SU = Ruinol+Moonstone;
let RC = ZirconiumOre+Bilaterite+Stalagstone+Prismawisp;
let CC = Stasistiss+Americium+Sciniate+Tangeriate;
let TGz = Fractastone+Hexaflexium+Radium+Rochestar+Creedite+Selenium+Lightskyze+Nightskyze+Conducticon+Fluorite;

if(!Layers && (SU+RC+CC+TGz) != 0) {out += "<br><br>Ruinus:"}

if(Layers && (SU) != 0) {out += "<br><br>Surface:";}
if(Ruinol > 0 && Depths) out += "<br>Ruinol x" + Ruinol + " (0m)";
if(Ruinol > 0 && !Depths) out += "<br>Ruinol x" + Ruinol;
if(Moonstone > 0 && Depths) out += "<br>Moonstone x" + Moonstone + " (25m)";
if(Moonstone > 0 && !Depths) out += "<br>Moonstone x" + Moonstone;

if(Layers && (RC) != 0) {out += "<br><br>Ruined Caverns:";}
if(ZirconiumOre > 0 && Depths) out += "<br>Zirconium Ore x" + ZirconiumOre + " (40m)";
if(ZirconiumOre > 0 && !Depths) out += "<br>Zirconium Ore x" + ZirconiumOre;
if(Bilaterite > 0 && Depths) out += "<br>Bilaterite x" + Bilaterite + " (120m)";
if(Bilaterite > 0 && !Depths) out += "<br>Bilaterite x" + Bilaterite;
if(Stalagstone > 0 && Depths) out += "<br>Stalagstone x" + Stalagstone + " (200m)";
if(Stalagstone > 0 && !Depths) out += "<br>Stalagstone x" + Stalagstone;
if(Prismawisp > 0 && Depths) out += "<br>Prismawisp x" + Prismawisp + " (200m)";
if(Prismawisp > 0 && !Depths) out += "<br>Prismawisp x" + Prismawisp;

if(Layers && (CC) != 0) {out += "<br><br>Compressed Catacombs:";}
if(Stasistiss > 0 && Depths) out += "<br>Stasistiss x" + Stasistiss + " (225m + 425m)";
if(Stasistiss > 0 && !Depths) out += "<br>Stasistiss x" + Stasistiss;
if(Americium > 0 && Depths) out += "<br>Americium x" + Americium + " (275m + 375m)";
if(Americium > 0 && !Depths) out += "<br>Americium x" + Americium;
if(Sciniate > 0 && Depths) out += "<br>Sciniate x" + Sciniate + " (300m)";
if(Sciniate > 0 && !Depths) out += "<br>Sciniate x" + Sciniate;
if(Tangeriate > 0 && Depths) out += "<br>Tangeriate x" + Tangeriate + " (350m)";
if(Tangeriate > 0 && !Depths) out += "<br>Tangeriate x" + Tangeriate;

if(Layers && (TGz) != 0) {out += "<br><br>The Glowzone:";}
if(Fractastone > 0 && Depths) out += "<br>Fractastone x" + Fractastone + " (450m)";
if(Fractastone > 0 && !Depths) out += "<br>Fractastone x" + Fractastone;
if(Hexaflexium > 0 && Depths) out += "<br>Hexaflexium x" + Hexaflexium + " (450m)";
if(Hexaflexium > 0 && !Depths) out += "<br>Hexaflexium x" + Hexaflexium;
if(Radium > 0 && Depths) out += "<br>Radium x" + Radium + " (465m)";
if(Radium > 0 && !Depths) out += "<br>Radium x" + Radium;
if(Rochestar > 0 && Depths) out += "<br>Rochestar x" + Rochestar + " (510m)";
if(Rochestar > 0 && !Depths) out += "<br>Rochestar x" + Rochestar;
if(Creedite > 0 && Depths) out += "<br>Creedite x" + Creedite + " (520m)";
if(Creedite > 0 && !Depths) out += "<br>Creedite x" + Creedite;
if(Selenium > 0 && Depths) out += "<br>Selenium x" + Selenium + " (525m)";
if(Selenium > 0 && !Depths) out += "<br>Selenium x" + Selenium;
if(Lightskyze > 0 && Depths) out += "<br>Lightskyze x" + Lightskyze + " (580m)";
if(Lightskyze > 0 && !Depths) out += "<br>Lightskyze x" + Lightskyze;
if(Nightskyze > 0 && Depths) out += "<br>Nightskyze x" + Nightskyze + " (600m)";
if(Nightskyze > 0 && !Depths) out += "<br>Nightskyze x" + Nightskyze;
if(Conducticon > 0 && Depths) out += "<br>Conducticon x" + Conducticon + " (605m)";
if(Conducticon > 0 && !Depths) out += "<br>Conducticon x" + Conducticon;
if(Fluorite > 0 && Depths) out += "<br>Fluorite x" + Fluorite + " (625m)";
if(Fluorite > 0 && !Depths) out += "<br>Fluorite x" + Fluorite;

return out;
}



export function depletia(x){
    var out = "";
    let TM = Onyx+LeadOre+Eclipsym+Oppressium;
    let NC = Tensane+Drignar+Mordite+Volatilian+CadmiumOre+Polonium+Necropolite+DepletedMatter;
    let EC = Scintillon+Exodium+Muonine+Berkelium+Faradine+Envigorite+Blearium;
    
    if(!Layers && (TM+NC+EC) != 0) {out += "<br><br>Depletia:"}

    if(Layers && (TM) != 0) {out += "<br><br>Terra Mortifer:";}
    if(Onyx > 0 && Depths) out += "<br>Onyx x" + Onyx + " (75m)";
    if(Onyx > 0 && !Depths) out += "<br>Onyx x" + Onyx;
    if(LeadOre > 0 && Depths) out += "<br>Lead Ore x" + LeadOre + " (125m)";
    if(LeadOre > 0 && !Depths) out += "<br>Lead Ore x" + LeadOre;
    if(Eclipsym > 0 && Depths) out += "<br>Eclipsym x" + Eclipsym + " (170m)";
    if(Eclipsym > 0 && !Depths) out += "<br>Eclipsym x" + Eclipsym;
    if(Oppressium > 0 && Depths) out += "<br>Oppressium x" + Oppressium + " (175m)";
    if(Oppressium > 0 && !Depths) out += "<br>Oppressium x" + Oppressium;
    
    if(Layers && (NC) != 0) {out += "<br><br>Nefarious Caverns:";}
    if(Tensane > 0 && Depths) out += "<br>Tensane x" + Tensane + " (190m)";
    if(Tensane > 0 && !Depths) out += "<br>Tensane x" + Tensane;
    if(Drignar > 0 && Depths) out += "<br>Drignar x" + Drignar + " (215m)";
    if(Drignar > 0 && !Depths) out += "<br>Drignar x" + Drignar;
    if(Mordite > 0 && Depths) out += "<br>Mordite x" + Mordite + " (220m)";
    if(Mordite > 0 && !Depths) out += "<br>Mordite x" + Mordite;
    if(Volatilian > 0 && Depths) out += "<br>Volatilian x" + Volatilian + " (265m)";
    if(Volatilian > 0 && !Depths) out += "<br>Volatilian x" + Volatilian;
    if(CadmiumOre > 0 && Depths) out += "<br>Cadmium Ore x" + CadmiumOre + " (280m)";
    if(CadmiumOre > 0 && !Depths) out += "<br>Cadmium Ore x" + CadmiumOre;
    if(Polonium > 0 && Depths) out += "<br>Polonium x" + Polonium + " (290m)";
    if(Polonium > 0 && !Depths) out += "<br>Polonium x" + Polonium;
    if(Necropolite > 0 && Depths) out += "<br>Necropolite x" + Necropolite + " (300m)";
    if(Necropolite > 0 && !Depths) out += "<br>Necropolite x" + Necropolite;
    if(DepletedMatter > 0 && Depths) out += "<br>Depleted Matter x" + DepletedMatter + " (324m)";
    if(DepletedMatter > 0 && !Depths) out += "<br>Depleted Matter x" + DepletedMatter;
    
    if(Layers && (EC) != 0) {out += "<br><br>Energized Core:";}
    if(Scintillon > 0 && Depths) out += "<br>Scintillon x" + Scintillon + " (325m-350m + 395m-400m)";
    if(Scintillon > 0 && !Depths) out += "<br>Scintillon x" + Scintillon;
    if(Exodium > 0 && Depths) out += "<br>Exodium x" + Exodium + " (330m)";
    if(Exodium > 0 && !Depths) out += "<br>Exodium x" + Exodium;
    if(Muonine > 0 && Depths) out += "<br>Muonine x" + Muonine + " (335m + 395m)";
    if(Muonine > 0 && !Depths) out += "<br>Muonine x" + Muonine;
    if(Berkelium > 0 && Depths) out += "<br>Berkelium x" + Berkelium + " (340m)";
    if(Berkelium > 0 && !Depths) out += "<br>Berkelium x" + Berkelium;
    if(Faradine > 0 && Depths) out += "<br>Faradine x" + Faradine + " (360m-365m)";
    if(Faradine > 0 && !Depths) out += "<br>Faradine x" + Faradine;
    if(Envigorite > 0 && Depths) out += "<br>Envigorite x" + Envigorite + " (380m)";
    if(Envigorite > 0 && !Depths) out += "<br>Envigorite x" + Envigorite;
    if(Blearium > 0 && Depths) out += "<br>Blearium x" + Blearium + " (400m)";
    if(Blearium > 0 && !Depths) out += "<br>Blearium x" + Blearium;


    return out;
}

export function makeList(){
var out = "";
out += shift0();
out += shift1();
out += graveyard();
out += paradise();
out += ruinus();
out += depletia();
return out;
}
