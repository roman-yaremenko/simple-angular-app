import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { EntitiesModule} from './modules/entities/entities.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EntitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
