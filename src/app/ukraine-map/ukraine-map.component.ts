import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; import { Observable } from 'rxjs';
;
import { MapData } from './map-data';
import { UaMapService } from './ukraine-map.service';

@Component({
    selector: 'ua-map',
    templateUrl: './ukraine-map.component.html',
    styleUrls: ['./ukraine-map.component.scss']
})
export class UaMapComponent implements OnInit {
    @Input() displayTitle: boolean = false;
    @Input() fillStateColor: string = "#E4E7F5";
    @Input() isHighlightingHover: boolean = true;
    @Input() hoverStateColor: string = "#2D68CE";
    @Input() strokeColor: string = "#000000";

    @Output() onMapClick = new EventEmitter();

    mapData$: Observable<MapData[]> = this.uaMapService.getUaMapData();;

    hoveredRegionId: number = 0;

    constructor(private uaMapService: UaMapService) { }

    ngOnInit(): void {
        this.initUaMap();
    }

    private initUaMap(): void { }
}