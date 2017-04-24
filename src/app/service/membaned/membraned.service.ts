import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {MembraneInfo} from "./membranedInfo";
import {BehaviorSubject, Observable} from "rxjs";
import {ContractInfo} from "./contractInfo";
import {NetworkStatus} from "./networkStatus";
import {StorageStatus} from "./storageStatus";
import {WatcherStatus} from "./watcherStatus";

@Injectable()
export class MembraneDaemonService {
    memInfoSource: Observable<MembraneInfo>;
    memInfoSubject: BehaviorSubject<MembraneInfo>;

    contractInfoSource: Observable<ContractInfo>;
    contractInfoSubject: BehaviorSubject<ContractInfo>;

    networkStatusSource: Observable<NetworkStatus>;
    networkStatusSubject: BehaviorSubject<NetworkStatus>;

    storageStatusSource: Observable<StorageStatus>;
    storageStatusSubject: BehaviorSubject<StorageStatus>;

    watcherStatusSource: Observable<WatcherStatus>;
    watcherStatusSubject: BehaviorSubject<WatcherStatus>;

    uptimeSubject: BehaviorSubject<String>;

    constructor(private http: Http) {
        this.memInfoSource = Observable.interval(5000)
            .switchMap(() => this.getInfo());
        this.memInfoSubject = new BehaviorSubject(new MembraneInfo(null));
        this.memInfoSource.subscribe(this.memInfoSubject);

        this.contractInfoSource = Observable.interval(5000)
            .switchMap(() => this.getContractInfo());
        this.contractInfoSubject = new BehaviorSubject(new ContractInfo(null));
        this.contractInfoSource.subscribe(this.contractInfoSubject);

        this.networkStatusSource = Observable.interval(5000)
            .switchMap(() => this.getNetworkStatus());
        this.networkStatusSubject = new BehaviorSubject(new NetworkStatus(null));
        this.networkStatusSource.subscribe(this.networkStatusSubject);

        this.storageStatusSource = Observable.interval(5000)
            .switchMap(() => this.getStorageStatus());
        this.storageStatusSubject = new BehaviorSubject(new StorageStatus(null));
        this.storageStatusSource.subscribe(this.storageStatusSubject);

        this.watcherStatusSource = Observable.interval(5000)
            .switchMap(() => this.getWatcherStatus());
        this.watcherStatusSubject = new BehaviorSubject(new WatcherStatus(null));
        this.watcherStatusSource.subscribe(this.watcherStatusSubject);

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

    getContractInfoStream(): Observable<ContractInfo> {
        return this.contractInfoSubject;
    }

    getNetworkStatusStream(): Observable<NetworkStatus> {
        return this.networkStatusSubject;
    }

    getStorageStatusStream(): Observable<StorageStatus> {
        return this.storageStatusSubject;
    }

    getWatcherStatusStream(): Observable<WatcherStatus> {
        return this.watcherStatusSubject;
    }

    private getInfo(): Observable<MembraneInfo> {
        return this.http.get('http://127.0.0.1:13200')
            .map((res: Response) => res.json())
            .map((res) => new MembraneInfo(res))
            .catch(() => Observable.of(new MembraneInfo(null)));
    }

    private getContractInfo(): Observable<ContractInfo> {
        return this.http.get('http://127.0.0.1:13200/status/contract')
            .map((res: Response) => res.json())
            .map((res) => new ContractInfo(res))
            .catch(() => Observable.of(new ContractInfo(null)));
    }

    private getNetworkStatus(): Observable<NetworkStatus> {
        return this.http.get('http://127.0.0.1:13200/status/network')
            .map((res: Response) => res.json())
            .map((res) => new NetworkStatus(res))
            .catch(() => Observable.of(new NetworkStatus(null)));
    }

    private getStorageStatus(): Observable<StorageStatus> {
        return this.http.get('http://127.0.0.1:13200/status/storage')
            .map((res: Response) => res.json())
            .map((res) => new StorageStatus(res))
            .catch(() => Observable.of(new StorageStatus(null)));
    }

    private getWatcherStatus(): Observable<WatcherStatus> {
        return this.http.get('http://127.0.0.1:13200/status/watcher')
            .map((res: Response) => res.json())
            .map((res) => new WatcherStatus(res))
            .catch(() => Observable.of(new WatcherStatus(null)));
    }

    private getUptime(): String {
        return this.memInfoSubject.getValue().getUptime();
    }
}
