import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { mediaReducer, MediaState } from './reducers/media.reducer';

export interface GlobalState {
  media: MediaState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  media: mediaReducer
};

export const metaReducers: MetaReducer<GlobalState>[] = [];
