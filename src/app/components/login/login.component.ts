import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  public type1 = "";
  public type2 = "secondary" ; 
  public information = "normal";

  constructor(
    private _fb : FormBuilder
  ){}

  public myForm: FormGroup = this._fb.group({
    email: ['',[Validators.required, Validators.email]],
    phone: ['',[Validators.required]],
  })

  fieldIsInvalid(field: any){
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    )
  }


  ngOnInit(){
    setTimeout(
      ()=> {
        
        this.type1="primary";
      }
      ,1000
      
    )
    setTimeout(
      ()=> {
        
        this.type1="primary1.1";
      }
      ,2000
      
    )
  }

  submit(){
    console.log(this.myForm.value)
  }

  setInformationStatus(event:any){
    console.log(event)
    if(event === ''){
      this.information = 'VACIO'
    }
    if(event !== ''){
      this.information = 'ESCRIBIENDO...'
    }
  }


  ngOnDestroy(): void {
    console.log('Salio de la pagina LOGIN');
  }


 
}
