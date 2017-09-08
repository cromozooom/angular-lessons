import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

//import { PageAboutComponent }    from './page-about.component';
import { AboutTestComponent }  from './page-about-test.component';
import { AboutDetailsComponent }  from './page-about-details.component';



import { AboutTestRoutingModule } from './page-about-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AboutTestRoutingModule
    ],
    declarations: [
        //PageAboutComponent,
        AboutTestComponent,
        AboutDetailsComponent
    ],
    //providers: [ HeroService ]
})
export class AboutModule {}