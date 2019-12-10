import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MediaFilterType } from '../../enums/media-file-type.enum';
import { MediaSortingDirection } from '../../enums/media-sorting-direction.enum';
import { MediaSortingType } from '../../enums/media-sorting-type.enum';
import { MediaFile } from '../../models/media-file.model';
import { GlobalState } from '../store';
import {
    mediaFiles,
    searchTermSelector,
    selectedFilterSelector, selectedSortingDirectionSelector,
    selectedSortingTypeSelectors
} from '../reducers/media.reducer';

@Injectable({ providedIn: 'root' })
export class MediaSelectors {
    public mediaFiles$: Observable<MediaFile[]>;
    public searchTerm$: Observable<string>;
    public selectedFilter$: Observable<MediaFilterType>;
    public selectedSortingType$: Observable<MediaSortingType>;
    public selectedSortingDirection$: Observable<MediaSortingDirection>;

    constructor(store: Store<GlobalState>) {
        this.mediaFiles$ = store.pipe(select(mediaFiles));
        this.selectedFilter$ = store.pipe(select(selectedFilterSelector));
        this.searchTerm$ = store.pipe(select(searchTermSelector));
        this.selectedSortingType$ = store.pipe(select(selectedSortingTypeSelectors));
        this.selectedSortingDirection$ = store.pipe(select(selectedSortingDirectionSelector));
    }
}
