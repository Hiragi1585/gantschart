"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    constructor(id, step, name, stroke, vGo, vBack) {
        this.id = id;
        this.step = step;
        this.name = name;
        this.stroke = stroke;
        this.vGo = vGo;
        this.vBack = vBack;
        this.tGo = stroke / vGo;
        this.tBack = stroke / vBack;
        this.totalTime = this.tGo + this.tBack;
    }
    changeGlobalTime(differ) {
        this.gtEnd += differ;
        this.gtStart += differ;
    }
    set gStart(newGStart) {
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
exports.Job = Job;
//# sourceMappingURL=job.js.map