import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { MediaFilterType } from '../../enums/media-file-type.enum';
import { GlobalState } from '../store';

const searchMedia = createAction(
  'SEARCH_MEDIA',
  props<{ payload: string }>()
);

const setFilter = createAction(
  'SET_FILTER',
  props<{ payload: MediaFilterType }>()
);


@Injectable({ providedIn: 'root' })
export class MediaActions {
  public static searchMedia = searchMedia;
  public static setFilter = setFilter;

  constructor(private store: Store<GlobalState>) {

  }

  public searchMediaDispatch(term: string) {
    return this.store.dispatch(MediaActions.searchMedia({ payload: term }));
  }

  public setFilterDispatch(filterType: MediaFilterType) {
    return this.store.dispatch(MediaActions.setFilter({ payload: filterType }));
  }

}


