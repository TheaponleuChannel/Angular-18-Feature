import { Component, Signal, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-18';

  mySignalValue = signal('Cambodia')
  numSignal = signal(5)


  // Write able signal o
  setNewValue() {
    this.mySignalValue.set('Japan')
  }
  updateValue() {

    // Try up update value
    // const currentValue = this.mySignalValue();
    // this.mySignalValue.set(currentValue+ 'aa');

    // one more style
    this.mySignalValue.update(value => value+'1')
  }

  // computed signal

  // Computed signal are read-only signals that derive their value from other signals. 
  computedSignal() {
    const countSignal : Signal<number> = computed(() => this.numSignal() * 2);
    console.log(countSignal()); // console log will show 10
    
  }


}
