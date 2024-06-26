import { Component, effect, inject, input } from '@angular/core';
import { SignalService } from '../service/signal.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  public product = input.required<string>()
  private signal = inject(SignalService); 
  constructor(){
    effect(() => {
      console.log('signal product',this.product());
      
    })
  }

}
