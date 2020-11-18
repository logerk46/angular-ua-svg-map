import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UaMapService } from './ukraine-map.service';
import { UaMapComponent } from './ukraine-map.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [UaMapComponent],
    exports: [UaMapComponent],
    providers: [UaMapService]
})
export class UaMapModule { }
