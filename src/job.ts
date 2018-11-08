export class Job {
    id: number;
    step: number;
    name: string;
    stroke: number;
    vGo: number;
    vBack: number;
    tGo: number;
    tBack: number;
    totalTime: number;
    gtStart: number;
    gtEnd: number;

    constructor(id: number, step: number, name: string, stroke: number, vGo: number, vBack: number) {
        this.id = id;
        this.step = step;
        this.name = name;
        this.stroke = stroke;
        this.vGo = vGo;
        this.vBack = vBack;
        this.tGo = stroke/vGo;
        this.tBack = stroke/vBack;
        this.totalTime = this.tGo + this.tBack;
    }

    changeGlobalTime(differ: number) {
        this.gtEnd+=differ;
        this.gtStart+=differ;
    }

    set gStart(newGStart: number) {
        this.gStart = newGStart;
    }

    dbgShowInfo() {
        console.log(`id:${this.id}`);
        console.log(`step:${this.step}`);
        console.log(`name:${this.name}`);
        console.log(`total:${this.totalTime}`);
        console.log(`gStart:${this.gStart}`);
        console.log(`gEnd:${this.gtEnd}`);
    }
}