import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { MediaFilterType } from '../../enums/media-file-type.enum';
import { MediaSortingType } from '../../enums/media-sorting-type.enum';
import { MediaFile } from '../../models/media-file.model';
import { MediaActions } from '../actions/media.actions';
import { GlobalState } from '../store';

export interface MediaState {
    media: MediaFile[];
    searchTerm: string;
    selectedFilter: MediaFilterType;
    selectedSortingType: MediaSortingType;
}

export const mediaInitialState: MediaState = {
    media: [
        {
            type: MediaFilterType.IMAGE,
            fileName: 'background-2.jpg'
        },
        {
            type: MediaFilterType.IMAGE,
            fileName: 'background-2.jpg'
        },
        {
            type: MediaFilterType.IMAGE,
            fileName: 'background-3.jpg'
        },
        {
            type: MediaFilterType.VIDEO,
            fileName: 'video-1.mp4'
        },
        {
            type: MediaFilterType.VIDEO,
            fileName: 'video-2.mp4'
        },
        {
            type: MediaFilterType.VIDEO,
            fileName: 'video-3.mp4'
        }
    ],
    searchTerm: '',
    selectedFilter: MediaFilterType.ALL,
    selectedSortingType: MediaSortingType.BY_NAME
};

const reducer = createReducer(
    mediaInitialState,
    on(MediaActions.searchMedia, (state, { payload }): MediaState => ({
        ...state,
        searchTerm: payload
    })),
    on(MediaActions.setFilter, (state, { payload }): MediaState => ({
        ...state,
        selectedFilter: payload
    }))
);


export function mediaReducer(state: MediaState | undefined, action: Action) {
    return reducer(state, action);
}

const getMediaFiles = (state: GlobalState) => state.media.media;
const getSearchTerm = (state: GlobalState) => state.media.searchTerm;
const getSelectedFilter = (state: GlobalState) => state.media.selectedFilter;
const getSortingType = (state: GlobalState) => state.media.selectedSortingType;

export const mediaFiles = createSelector([getMediaFiles, getSearchTerm, getSelectedFilter, getSortingType],
    (mediaFiles, searchTerm, selectedFilter, sortingType) => {
        let result = [...mediaFiles];
        let term = new RegExp(searchTerm, 'i');
        result = result.filter(mediaFile => term.test(mediaFile.fileName));

       if (selectedFilter !== MediaFilterType.ALL) {
           result = result.filter(mediaFile => mediaFile.type === selectedFilter);
       }

        return result;
    });

export const selectedFilterSelector = createSelector([getSelectedFilter], filter => filter);
export const selectedSortingType = createSelector([getSortingType], filter => filter);

