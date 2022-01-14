import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from '../../Heores/Heroe/Heroe.component';
import { ListadoComponent } from './listado.component';




@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent

        ],
        exports: [
            ListadoComponent
        ],
        imports: [
           CommonModule
        ]

})
export class HeroesModule {}