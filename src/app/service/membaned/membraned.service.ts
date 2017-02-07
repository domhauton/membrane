import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {MembraneInfo} from "./membranedInfo";
import {Observable, BehaviorSubject} from "rxjs";

@Injectable()
export class MembraneDaemonService {
    memInfoSource: Observable<MembraneInfo>;
    memInfoSubject: BehaviorSubject<MembraneInfo>;

    uptimeSubject: BehaviorSubject<String>;

    constructor(private http: Http) {
        this.memInfoSource = Observable.interval(2000)
            .switchMap(() => this.getInfo());
        this.memInfoSubject = new BehaviorSubject(new MembraneInfo(null));
        this.memInfoSource.subscribe(this.memInfoSubject);

        let uptimeSource = Observable.interval(500)
            .map(() => this.getUptime());
        this.uptimeSubject = new BehaviorSubject(this.getUptime());
        uptimeSource.subscribe(this.uptimeSubject);
    }

    getInfoStream(): Observable<MembraneInfo> {
        return this.memInfoSubject;
    }

    getUptimeStream(): Observable<String> {
        return this.uptimeSubject;
    }

    private getInfo(): Observable<MembraneInfo> {
        return this.http.get('http://127.0.0.1:13200/')
            .map((res: Response) => res.json())
            .map((res) => new MembraneInfo(res))
            .catch(() => Observable.of(new MembraneInfo(null)));
    }

    private getUptime(): String {
        return this.memInfoSubject.getValue().getUptime();
    }
}
