import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaFile } from '../../models/media-file.model';
import { GlobalState } from '../store';
import { mediaFiles } from '../reducers/media.reducer';

@Injectable({ providedIn: 'root' })
export class MediaSelectors {
    public media$: Observable<MediaFile[]>;

    constructor(store: Store<GlobalState>) {
        this.media$ = store.pipe(select(mediaFiles));
    }
}
