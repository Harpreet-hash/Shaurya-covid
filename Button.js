class Bt{
    constructor(name){
        this.bt=createButton(name);
        this.name=name;
        this.bt.size(330,80);
        this.bt.style('background','yellow');
        this.nodal;
        this.beds;
        this.icu;
        this.responseJSON;
        this.number;

    }

    newScreen(address)
    {   background(bg1I);

    mask.x=10000000;
    sani.x=10000000;
    dis.x=10000000;

    aaryan.bt.hide();
    aiims.bt.hide();
    arihant.bt.hide();
    cmi.bt.hide();
    max.bt.hide();
    shed.bt.hide();
    cityheart.bt.hide();
    kailash.bt.hide();
    kanishk.bt.hide();
    ongc.bt.hide();
    subharti.bt.hide();
    synergy.bt.hide();

    w.addImage(wI);
    w.scale=3;

    drawSprites();

    textSize(60);
    fill("blue");
    stroke("blue");
    strokeWeight(3.5);
    text(this.name,displayWidth/2-200,180)

    fill("black")
    text("ADDRESS:",displayWidth/2-450,displayHeight/2-230+100);
    fill("red")
    text(address,displayWidth/2-120,displayHeight/2-230+100);

    fill("black")
    text("CONTACT NUMBER :",displayWidth/2-450,displayHeight/2-150+100);
    fill("red")
    console.log("53"+ this.nodal)

    text(this.nodal,displayWidth/2+140,displayHeight/2-150+100);

    fill("black")
    text("BEDS WITH OXYGEN AVAILABLE:",displayWidth/2-450,displayHeight/2-70+100);
    fill("red")
    text(this.beds,displayWidth/2+510,displayHeight/2-70+100);

    fill("black")
    text("ICU BEDS AVAILABLE:",displayWidth/2-450,displayHeight/2+10+100);
    fill("red")
    text(this.icu,displayWidth/2+200,displayHeight/2+10+100);
    }


     async getData(number){
        this.number=number;
        var response=await fetch("https://api.covidbedsindia.in/v1/storages/608d542333382c01aecf8c95/Uttarakhand")
        this.responseJSON=await response.json();
    
        this.nodal=this.responseJSON[this.number].NODAL_OFFICER_NUMBER.toString();
        this.beds=this.responseJSON[number].BEDS_WITH_OXYGEN_AVAILABLE;
        this.icu=this.responseJSON[number].ICU_BEDS_AVAILABLE;
    }
    
}