import { Injectable } from '@angular/core';
import { createAction, props, Store } from '@ngrx/store';
import { GlobalState } from '../store';

const searchMedia = createAction(
  'SEARCH_MEDIA',
  props<{ payload: string }>()
);


@Injectable({ providedIn: 'root' })
export class MediaActions {
  public static searchMedia = searchMedia;

  constructor(private store: Store<GlobalState>) {

  }

  public searchMedia(term: string) {
    return this.store.dispatch(MediaActions.searchMedia({ payload: term }));
  }

}


