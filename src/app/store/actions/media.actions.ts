import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { MediaFilterType } from '../../enums/media-file-type.enum';
import { MediaSortingDirection } from '../../enums/media-sorting-direction.enum';
import { MediaSortingType } from '../../enums/media-sorting-type.enum';
import { GlobalState } from '../store';

const searchMedia = createAction(
    'SEARCH_MEDIA',
    props<{ payload: string }>()
);

const setFilter = createAction(
    'SET_FILTER',
    props<{ payload: MediaFilterType }>()
);

const setSortingType = createAction(
    'SET_SORTING_TYPE',
    props<{ payload: MediaSortingType }>()
);

const setSortingDirection = createAction(
    'SET_SORTING_DIRECTION',
    props<{ payload: MediaSortingDirection }>()
);

const clearFilters = createAction(
    'CLEAR_FILTERS'
);


@Injectable({ providedIn: 'root' })
export class MediaActions {
    public static searchMedia = searchMedia;
    public static setFilter = setFilter;
    public static setSortingType = setSortingType;
    public static setSortingDirection = setSortingDirection;
    public static clearFilters = clearFilters;

    constructor(private store: Store<GlobalState>) {

    }

    public searchMediaDispatch(term: string) {
        return this.store.dispatch(MediaActions.searchMedia({ payload: term }));
    }

    public setFilterDispatch(filterType: MediaFilterType) {
        return this.store.dispatch(MediaActions.setFilter({ payload: filterType }));
    }

    public setSortingTypeDispatch(sortingType: MediaSortingType) {
        return this.store.dispatch(MediaActions.setSortingType({ payload: sortingType }));
    }

    public setSortingDirection(sortingDirection: MediaSortingDirection) {
        return this.store.dispatch(MediaActions.setSortingDirection({ payload: sortingDirection }));
    }

    public clearFiltersDispatch() {
        return this.store.dispatch(MediaActions.clearFilters());
    }

}


