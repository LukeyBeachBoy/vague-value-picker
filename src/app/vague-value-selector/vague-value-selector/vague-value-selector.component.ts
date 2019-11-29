import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
/**
 * A selector for vague values that fit a numerical representation (pain, intensity, etc)
 */
@Component({
  selector: 'app-vague-value-selector',
  templateUrl: './vague-value-selector.component.html',
  styleUrls: ['./vague-value-selector.component.scss']
})
export class VagueValueSelectorComponent implements OnInit {
  @ViewChild('indicator', { static: false }) public indicatorRef: ElementRef;
  @Input() max = 5; // Default values
  @Input() min = 1;
  @Input() steps = 1;
  @Output() valueSelected = new EventEmitter();
  options: Array<any>;
  indicatorWidth;
  selectedOption: { index; value };

  constructor() { }

  ngOnInit() {
    this.options = [];
    /* Create a button for each of the values between min-max */
    for (let i = this.min; i <= this.max; i += this.steps) {
      this.options.push(i);
    }
    /* Make the indicator the same width as the buttons */
    this.indicatorWidth = `${(1 / this.options.length) * 100}%`;
  }


  public get selection(): { index: number, value: string } {
    return this.selectedOption;
  }


  /**
   * Moves the indicator to the selected label while emitting and storing the selected value
   * @param optionLabel The label the user has selected
   */
  select(optionLabel: HTMLElement) {
    const index = optionLabel.id.replace('option', '');
    const button = document.getElementById(`value${index}`) as HTMLInputElement;

    button.checked = true;

    this.selectedOption = { index, value: button.value };
    this.moveIndicator(optionLabel, index, true);
    this.valueSelected.emit(this.selectedOption.value);
  }

  /**
   * Move the indicator to the given label, and
   * apply relevant rounding of edges if the label is at the beginning or end of the selection
   * @param optionLabel The label to get the offsetLeft value from
   * @param value The contents of the label
   * @param selected Whether the user is selecting or hovering
   */
  moveIndicator(optionLabel: HTMLElement, choiceIndex, selected?) {
    const indicator: HTMLElement = this.indicatorRef.nativeElement;
    indicator.style.left = `${optionLabel.offsetLeft - 16}px`;
    indicator.style.opacity =
      selected ||
        (this.selectedOption &&
          this.selectedOption.index === choiceIndex.toString())
        ? '1'
        : '0.5';
    /* Chosen final option - round the right corners */
    if (parseInt(choiceIndex, 10) === this.options.length - 1) {
      indicator.style.borderRadius = '0 5px 5px 0';
    } else if (parseInt(choiceIndex, 10) === 0) {
      /* Chosen first option - round the left corners */
      indicator.style.borderRadius = '5px 0 0 5px';
    } else {
      /* Not at either end, round all corners */
      indicator.style.borderRadius = '5px';
    }
  }

  resetIndicatorToSelection() {
    if (!this.selectedOption) {
      return;
    }
    const target = document.getElementById(
      `option${this.selectedOption.index}`
    );
    this.moveIndicator(target, this.selectedOption.index, true);
  }
}
