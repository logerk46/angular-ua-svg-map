import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { mapData, MapData } from './map-data'; 

@Injectable()
export class UaMapService {
    private mapData = mapData;
    
    getUaMapData(): Observable<MapData[]> {
        return of(this.mapData);
    }
}