import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {MembraneInfo} from "./membranedInfo";

@Injectable()
export class MembraneDaemonService {
    constructor(private http: Http) {
    }

    getInfo() {
        return this.http.get('http://127.0.01:13200/').map((res: Response) => new MembraneInfo(res.json()));
    }
}
