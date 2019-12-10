import { Component } from '@angular/core';
import { MediaFilterType, MediaFilterTypes } from './enums/media-file-type.enum';
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
    public filterTextMap = {
        [MediaFilterType.ALL]: 'All Media',
        [MediaFilterType.VIDEO]: 'Videos',
        [MediaFilterType.MUSIC]: 'Music',
        [MediaFilterType.IMAGE]: 'Image'
    };
    public MediaFilterTypes = MediaFilterTypes;
    filterDropdownVisible: boolean = false;

    constructor(private mediaSelectors: MediaSelectors, private mediaActions: MediaActions) {
    }

    public searchMedia(term: string) {
        this.mediaActions.searchMediaDispatch(term);
    }

    public setFilter(filter: MediaFilterType) {
        this.mediaActions.setFilterDispatch(filter);
    }

    toggleFilterDropdownVisible() {
        this.filterDropdownVisible = !this.filterDropdownVisible;
    }

    ngOnInit() {
        this.mediaSelectors.mediaFiles$.subscribe(mediaFiles => {
            this.mediaFiles = mediaFiles;
        });
        this.mediaSelectors.selectedFilter$.subscribe(filterType => {
            this.selectedFilter = filterType;
        });
    }
}
