import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiPlaceService } from '../../services/api-place.service';
import { TryToSavePlaceAction } from '../actions/TryToSavePlaceAction';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AddPlaceAction } from '../actions/AddPlaceAction';
import { RejectSavePlaceAction } from '../actions/RejectSavePlaceAction';
import { of } from 'rxjs';
import { AppState } from '../../types/AppState';
import { select, Store } from '@ngrx/store';
import { selectCurrentRoomId } from '../selectors/selectCurrentRoomId';

@Injectable()
export class PlaceEffects {
    @Effect()
    public savePlace$ = this.actions$.pipe(
        ofType<TryToSavePlaceAction>(TryToSavePlaceAction.type),
        withLatestFrom(this.store.pipe(select(selectCurrentRoomId))),
        switchMap(([action, roomId]) =>
            this.placeService.save(action.payload).pipe(
                map(
                    place =>
                        roomId &&
                        new AddPlaceAction({
                            id: roomId,
                            place: place,
                        })
                ),
                catchError(() => {
                    console.error('Place save failed');
                    return of(new RejectSavePlaceAction());
                })
            )
        )
    );

    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
        private readonly placeService: ApiPlaceService
    ) {}
}
