import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { MediaFileType } from '../../enums/media-file-type.enum';
import { MediaFile } from '../../models/media-file.model';
import { MediaActions } from '../actions/media.actions';
import { GlobalState } from '../store';

export interface MediaState {
  media: MediaFile[];
  searchTerm: string;
}

export const mediaInitialState: MediaState = {
  media: [
    {
      type: MediaFileType.IMAGE,
      fileName: 'background-2.jpg'
    },
    {
      type: MediaFileType.IMAGE,
      fileName: 'background-2.jpg'
    },
    {
      type: MediaFileType.IMAGE,
      fileName: 'background-3.jpg'
    },
    {
      type: MediaFileType.VIDEO,
      fileName: 'video-1.mp4'
    },
    {
      type: MediaFileType.VIDEO,
      fileName: 'video-2.mp4'
    },
    {
      type: MediaFileType.VIDEO,
      fileName: 'video-3.mp4'
    },
  ],
  searchTerm: '',
};

const reducer = createReducer(
  mediaInitialState,
  on(MediaActions.searchMedia, (state, { payload }): MediaState => ({
    ...state,
    searchTerm: payload
  }))
);


export function mediaReducer(state: MediaState | undefined, action: Action) {
  return reducer(state, action);
}

const getMediaFiles = (state: GlobalState) => state.media.media;
const getSearchTerm = (state: GlobalState) => state.media.searchTerm;

export const mediaFiles = createSelector([getMediaFiles, getSearchTerm], media => {
  return media;
});


