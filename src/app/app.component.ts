import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { MediaFilterType, MediaFilterTypes } from './enums/media-file-type.enum';
import { MediaSortingDirection } from './enums/media-sorting-direction.enum';
import { MediaSortingType, MediaSortingTypes } from './enums/media-sorting-type.enum';
import { MediaFile } from './models/media-file.model';
import { MediaActions } from './store/actions/media.actions';
import { MediaSelectors } from './store/selectors/media.selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public mediaFiles: MediaFile[];
    public selectedFilter: MediaFilterType;
    public selectedSortingType: MediaSortingType;
    public selectedSortingDirection: MediaSortingDirection;
    public filterTextMap = {
        [MediaFilterType.ALL]: 'All Media',
        [MediaFilterType.VIDEO]: 'Videos',
        [MediaFilterType.INTERACTIVE_VIDEO]: 'Interactive Videos',
        [MediaFilterType.DOCUMENT]: 'Documents',
        [MediaFilterType.AUDIO]: 'Music',
        [MediaFilterType.IMAGE]: 'Image'
    };
    public sortingTypesTextMap = {
        [MediaSortingType.BY_NAME]: 'Alphabetical',
        [MediaSortingType.BY_DATE]: 'By Date'
    };
    public MediaFilterTypes = MediaFilterTypes;
    public MediaSortingTypes = MediaSortingTypes;
    public MediaSortingDirection = MediaSortingDirection;
    public filterDropdownVisible: boolean = false;
    public sortDropdownVisible: boolean = false;

    constructor(private mediaSelectors: MediaSelectors, private mediaActions: MediaActions) {
    }

    public searchMedia(term: string) {
        this.mediaActions.searchMediaDispatch(term);
    }

    public setFilter(filter: MediaFilterType) {
        this.mediaActions.setFilterDispatch(filter);
    }

    public setSortingType(sortingType: MediaSortingType) {
        this.mediaActions.setSortingTypeDispatch(sortingType);
    }

    public toggleSortDirection() {
        const direction = this.selectedSortingDirection === MediaSortingDirection.ASCENDING ? MediaSortingDirection.DESCENDING : MediaSortingDirection.ASCENDING;
        this.mediaActions.setSortingDirection(direction);
    }

    public toggleFilterDropdownVisible() {
        this.filterDropdownVisible = !this.filterDropdownVisible;
    }

    public toggleSortDropdownVisible() {
        this.sortDropdownVisible = !this.sortDropdownVisible;
    }

    public resetFilters() {
        this.mediaActions.clearFiltersDispatch();
    }

    ngOnInit() {
        this.mediaActions.getMediaFilesDispatch();

        combineLatest(this.mediaSelectors.mediaFiles$,
            this.mediaSelectors.searchTerm$,
            this.mediaSelectors.selectedFilter$,
            this.mediaSelectors.selectedSortingType$,
            this.mediaSelectors.selectedSortingDirection$
        )
            .subscribe(([mediaFiles,
                            searchTerm,
                            selectedFilter,
                            sortingType,
                            sortingDirection
                        ]: any[]) => {
                this.selectedFilter = selectedFilter;
                this.selectedSortingType = sortingType;
                this.selectedSortingDirection = sortingDirection;

                let result = mediaFiles;

                let term = new RegExp(searchTerm, 'i');
                result = result.filter(mediaFile => term.test(mediaFile.fileName));

                if (selectedFilter !== MediaFilterType.ALL) {
                    result = result.filter(mediaFile => mediaFile.type === selectedFilter);
                }

                result = result.sort((a, b) => {
                    switch (sortingType) {
                        case MediaSortingType.BY_NAME:
                            return a.fileName - b.fileName;
                        case MediaSortingType.BY_DATE:
                            return a.createdAt - b.createdAt;
                    }
                });

                if (sortingDirection === MediaSortingDirection.DESCENDING) {
                    result.reverse();
                }

                this.mediaFiles = result;

            });
    }
}
