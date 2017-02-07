import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {MembraneInfo} from "./membranedInfo";
import {Observable} from "rxjs";

@Injectable()
export class MembraneDaemonService {
    memInfoStream: Observable<MembraneInfo>;

    constructor(private http: Http) {
        this.memInfoStream = Observable.interval(2000)
            .switchMap(() => this.getInfo());
    }

    getInfo(): Observable<MembraneInfo> {
        return this.http.get('http://127.0.01:13200/')
            .map((res: Response) => res.json())
            .map((res) => new MembraneInfo(res))
            .catch(() => Observable.of(new MembraneInfo(null)));
    }

    getInfoStream(): Observable<MembraneInfo> {
        return this.memInfoStream;
    }
}
