import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { MediaFilesMockData } from '../../data/data';
import { MediaFilterType } from '../../enums/media-file-type.enum';
import { MediaSortingDirection } from '../../enums/media-sorting-direction.enum';
import { MediaSortingType } from '../../enums/media-sorting-type.enum';
import { MediaFile } from '../../models/media-file.model';
import { MediaActions } from '../actions/media.actions';
import { GlobalState } from '../store';

export interface MediaState {
    mediaFiles: MediaFile[];
    searchTerm: string;
    selectedFilter: MediaFilterType;
    selectedSortingType: MediaSortingType;
    selectedSortingDirection: MediaSortingDirection;
}

export const mediaInitialState: MediaState = {
    mediaFiles: [],
    searchTerm: '',
    selectedFilter: MediaFilterType.ALL,
    selectedSortingType: MediaSortingType.BY_NAME,
    selectedSortingDirection: MediaSortingDirection.ASCENDING
};

const reducer = createReducer(
    mediaInitialState,
    on(MediaActions.getMediaFilesSuccess, (state, { payload }): MediaState => ({
        ...state,
        mediaFiles: payload
    })),
    on(MediaActions.searchMedia, (state, { payload }): MediaState => ({
        ...state,
        searchTerm: payload
    })),
    on(MediaActions.setFilter, (state, { payload }): MediaState => ({
        ...state,
        selectedFilter: payload
    })),
    on(MediaActions.setSortingType, (state, { payload }): MediaState => ({
        ...state,
        selectedSortingType: payload
    })),
    on(MediaActions.setSortingDirection, (state, { payload }): MediaState => ({
        ...state,
        selectedSortingDirection: payload
    })),
    on(MediaActions.clearFilters, (state): MediaState => ({
        ...state,
        searchTerm: mediaInitialState.searchTerm,
        selectedFilter: mediaInitialState.selectedFilter,
        selectedSortingType: mediaInitialState.selectedSortingType,
        selectedSortingDirection: mediaInitialState.selectedSortingDirection
    }))
);


export function mediaReducer(state: MediaState | undefined, action: Action) {
    return reducer(state, action);
}

const getMediaFiles = (state: GlobalState) => state.media.mediaFiles;
const getSearchTerm = (state: GlobalState) => state.media.searchTerm;
const getSelectedFilter = (state: GlobalState) => state.media.selectedFilter;
const getSortingType = (state: GlobalState) => state.media.selectedSortingType;
const getSortingDirection = (state: GlobalState) => state.media.selectedSortingDirection;

export const mediaFiles = createSelector([getMediaFiles], (mediaFiles) => mediaFiles);
export const searchTermSelector = createSelector([getSearchTerm], filter => filter);
export const selectedFilterSelector = createSelector([getSelectedFilter], filter => filter);
export const selectedSortingTypeSelectors = createSelector([getSortingType], sortingType => sortingType);
export const selectedSortingDirectionSelector = createSelector([getSortingDirection], sortingDirection => sortingDirection);

