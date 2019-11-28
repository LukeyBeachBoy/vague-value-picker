import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagueValueSelectorComponent } from './vague-value-selector/vague-value-selector.component';

@NgModule({
  declarations: [VagueValueSelectorComponent],
  imports: [CommonModule],
  exports: [VagueValueSelectorComponent]
})
export class VagueValueSelectorModule {}
