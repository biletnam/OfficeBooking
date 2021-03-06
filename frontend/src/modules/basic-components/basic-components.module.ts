import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './components/block/block.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ListComponent } from './components/list/list.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonPlateComponent } from './components/button-plate/button-plate.component';
import { IconsModule } from '../icons/icons.module';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { SortPipe } from './pipes/sort.pipe';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
    imports: [CommonModule, IconsModule],
    declarations: [
        BlockComponent,
        ButtonComponent,
        InputComponent,
        TextareaComponent,
        ListComponent,
        CheckboxComponent,
        ButtonPlateComponent,
        SearchFieldComponent,
        PopupComponent,
        FilterPipe,
        SortPipe,
    ],
    exports: [
        BlockComponent,
        ButtonComponent,
        InputComponent,
        TextareaComponent,
        ListComponent,
        CheckboxComponent,
        ButtonPlateComponent,
        PopupComponent,
        FilterPipe,
    ],
})
export class BasicComponentsModule {}
