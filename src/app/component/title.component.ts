/**
 * Created by dominic on 06/02/17.
 */

import { Component, Input } from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
    moduleId: module.id,
    selector: 'main-component',
    templateUrl: 'title.component.html',
})

export class TitleComponent {
    @Input() subtitle = '';
    title = 'Overview';
    user = '';

    constructor(userService: UserService) {
        this.user = userService.userName;
    }
}