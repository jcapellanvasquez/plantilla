import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AgGridModule} from 'ag-grid-angular';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CheckboxModule} from 'primeng/checkbox';
import {ListboxModule} from 'primeng/listbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {BlockUIModule} from 'primeng/blockui';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PanelModule,
        ToolbarModule,
        SplitButtonModule,
        AgGridModule.withComponents([]),
        DialogModule,
        ButtonModule,
        DynamicDialogModule,
        InputTextModule,
        MessageModule,
        MessagesModule,
        CheckboxModule,
        ListboxModule,
        InputTextareaModule,
        BlockUIModule,
        ProgressSpinnerModule
    ],
    exports: [
        PanelModule,
        ToolbarModule,
        SplitButtonModule,
        AgGridModule,
        DialogModule,
        ButtonModule,
        DynamicDialogModule,
        InputTextModule,
        MessageModule,
        MessagesModule,
        CheckboxModule,
        ListboxModule,
        InputTextareaModule,
        BlockUIModule,
        ProgressSpinnerModule
    ]
})
export class AppSharedModule {
}
