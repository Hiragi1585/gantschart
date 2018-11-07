class Job {
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
}