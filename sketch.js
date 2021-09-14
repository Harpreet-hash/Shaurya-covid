var bg1I;
var bg2I;
var appState=0;
var startBut;
var maskI,mask,saniI,sani,disI,dis,stay,stayI;
var w,wI;

var aaryan,aiims,arihant,cityheart,max,cmi,kailash,kanishk,ongc,subharti,synergy,shed;

function preload(){
    maskI=loadImage("mask.jpg");
    disI=loadImage("dis.png");
    saniI=loadImage("sani.png");
    bg1I=loadImage("h.jpg");
    bg2I=loadImage("hh.png");
    wI=loadImage("g.png");
    
}

function setup(){
createCanvas(displayWidth,displayHeight-150);

startBut=createButton('LETS CHECK')
startBut.size(330,60);
startBut.style('background','yellow')

w=createSprite(displayWidth/2+30,displayHeight/2-380);
mask=createSprite(displayWidth/2-50,displayHeight/2-400);
sani=createSprite(displayWidth/2-500,displayHeight/2+100);
dis=createSprite(displayWidth/2+500,displayHeight/2+100);

aaryan=new Bt('AARYAN HOSPITAL DOIWALA')
aiims=new Bt('AIIMS RISHIKESH')
arihant=new Bt('ARIHANT HOSPITAL')
cityheart=new Bt('CITY HEART CENTER')
max=new Bt('MAX HOSPITAL')
cmi=new Bt('CMI HOSPITAL')
kailash=new Bt('KAILASH HOSPITAL')
kanishk=new Bt('KANISHK HOSPITAL')
ongc=new Bt('ONGC HOSPITAL')
subharti=new Bt('SUBHARTI HOSPITAL')
synergy=new Bt('SYNERGY HOSPITAL')
shed=new Bt('SHED HOSPITAL')

    aaryan.getData();
    aiims.getData();
    arihant.getData();
    cityheart.getData();
    cmi.getData();
    max.getData();
    shed.getData();
    kailash.getData();
    kanishk.getData();
    ongc.getData();
    subharti.getData();
    synergy.getData();

}

function draw(){
if(appState===0){
background("orange");

textSize(60);
fill("black");
stroke(0);
strokeWeight(4);
text("DEHRADUN COVID - 19 HOSPITAL BEDS DATA",displayWidth/2-650,displayHeight/2-170);

startBut.position(displayWidth/2-200,displayHeight/2-120);

mask.addImage(maskI);
mask.scale=1.6;

sani.addImage(saniI);
sani.scale=2;

dis.addImage(disI);
dis.scale=2.2;

drawSprites();

startBut.mousePressed(()=>{
    appState=1;
})
}

if(appState===1){
    //background(bg2I)
    startBut.position(displayWidth/2-32100,displayHeight/2-120);

    textSize(60);
    fill("black");
    stroke(0);
    strokeWeight(4);
    text("DEHRADUN COVID - 19 HOSPITAL BEDS DATA",displayWidth/2-650,100);

    aaryan.bt.position(displayWidth/2-430,displayHeight/2-350);
    aiims.bt.position(displayWidth/2-430,displayHeight/2-260);
    arihant.bt.position(displayWidth/2-430,displayHeight/2-190);
    cmi.bt.position(displayWidth/2-430,displayHeight/2-120);
    max.bt.position(displayWidth/2-430,displayHeight/2-50);
    shed.bt.position(displayWidth/2-430,displayHeight/2+20);

    cityheart.bt.position(displayWidth/2+100,displayHeight/2-350);
    kailash.bt.position(displayWidth/2+100,displayHeight/2-260);
    kanishk.bt.position(displayWidth/2+100,displayHeight/2-190);
    ongc.bt.position(displayWidth/2+100,displayHeight/2-120);
    subharti.bt.position(displayWidth/2+100,displayHeight/2-50);
    synergy.bt.position(displayWidth/2+100,displayHeight/2+20);


    aaryan.bt.mousePressed(async()=>{
       await aaryan.getData(0);
        aaryan.newScreen("Doiwala, Uttarakhand");
    })
    aiims.bt.mousePressed(async()=>{
        await aiims.getData(1);
        aiims.newScreen(" Uttarakhand");    })
    arihant.bt.mousePressed(async()=>{
        await arihant.getData(5);
        arihant.newScreen(" 18, Main, Haridwar Rd, Ajabpur Kalan, Dehradun");    })
    cityheart.bt.mousePressed(async()=>{
        await cityheart.getData(21);
        cityheart.newScreen("55, EC Road, Panchpuri Colony, Dalanwala");    })
    cmi.bt.mousePressed(async()=>{
        await cmi.getData(25);
        cmi.newScreen("54, Haridwar Rd, Guru Nanak Vihar");    })
    max.bt.mousePressed(async()=>{
        await max.getData(94);
        max.newScreen("Mussoorie, Diversion Road, Dehradun");    })
    shed.bt.mousePressed(async()=>{
        await shed.getData(130);
        shed.newScreen("Ambala-Dehradun-Haridwar Rd, Doiwala");    })
    kailash.bt.mousePressed(async()=>{
        await kailash.getData(77);
        kailash.newScreen("Main, Haridwar Rd, Jogiwala Chowk");    })
    kanishk.bt.mousePressed(async()=>{
        await kanishk.getData(80);
        kanishk.newScreen("ISBT Road, Haridwar Bypass Rd, DDN");    })
    ongc.bt.mousePressed(async()=>{
        await ongc.getData(107);
        ongc.newScreen("90, Kaulagarh Road, Krishna Nagar");    })
    subharti.bt.mousePressed(async()=>{
        await subharti.getData(146);
        subharti.newScreen("Subharti Hospital Rd Dehradun");    })
    synergy.bt.mousePressed(async()=>{
        await synergy.getData(151);
        synergy.newScreen("Canal Rd, P.O, Ballupur, Dehradun");    })
};
 

}