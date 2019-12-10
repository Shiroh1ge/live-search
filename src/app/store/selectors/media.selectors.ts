import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaFilterType } from '../../enums/media-file-type.enum';
import { MediaFile } from '../../models/media-file.model';
import { GlobalState } from '../store';
import { mediaFiles, selectedFilterSelector } from '../reducers/media.reducer';

@Injectable({ providedIn: 'root' })
export class MediaSelectors {
    public mediaFiles$: Observable<MediaFile[]>;
    public selectedFilter$: Observable<MediaFilterType>;

    constructor(store: Store<GlobalState>) {
        this.mediaFiles$ = store.pipe(select(mediaFiles));
        this.selectedFilter$ = store.pipe(select(selectedFilterSelector));
    }
}
