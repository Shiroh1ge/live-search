import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { MediaFilesMockData } from '../../data/data';
import { MediaFile } from '../../models/media-file.model';
import { MediaActions } from '../actions/media.actions';

@Injectable()
export class MediaFileEffects {

    constructor(
        private actions$: Actions
    ) {
    }

    // Typically a backend API call
    private getMediaFiles(): Observable<MediaFile[]> {
        return new Observable(observer => {
            return observer.next(MediaFilesMockData);
        });
    }

    getMediaFiles$ = createEffect(() => this.actions$.pipe(
        ofType(MediaActions.getMediaFiles),
        exhaustMap(action => {
            return this.getMediaFiles()
                .pipe(
                    map(mediaFiles => ({ type: MediaActions.getMediaFilesSuccess.type, payload: mediaFiles })),
                    catchError(() => EMPTY)
                );
        })
        )
    );
}
