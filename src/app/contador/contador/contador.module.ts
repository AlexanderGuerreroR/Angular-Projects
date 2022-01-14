import { NgModule } from "@angular/core";
import { ContadorComponent } from '../../contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ContadorComponent,
        ContadorComponent
    ],

    exports: [
        ContadorComponent
    ],

    imports: [
        CommonModule
    ]
})



export class contadorModule {}