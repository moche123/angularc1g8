import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


type IInputEvent = {
  target:{
    value:string
  }
}

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit,OnDestroy {
  //! Patrón decorador

  @Input() type = "";
  @Input() formControlName = "";
  @Output() inputText = new EventEmitter;




  constructor(){
    console.log("Constructor");
   
  }

  ngOnChanges(){
    console.log(this.type);
  }
  
  ngOnInit(){
    console.log('ngOnInit');
    // console.log(this.type);
  }
  
  input(ev:any){
    // console.log(ev.target.value)
    this.inputText.emit(ev.target.value)
  }


  ngOnDestroy(): void {
    console.log('Salio de la pagina');
  }


}
