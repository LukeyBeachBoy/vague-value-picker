import { BrowserModule } from '@angular/platform-browser';
import { VagueValueSelectorModule } from './vague-value-selector/vague-value-selector.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VagueValueSelectorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
