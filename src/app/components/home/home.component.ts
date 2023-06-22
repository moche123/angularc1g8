import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IPeople } from 'src/app/interfaces/people';
import { IResutlRMCharacter, InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public people:IPeople[] = [];
  public characteres: IResutlRMCharacter[] = [];
  public subscription$ = new Subscription();
  public getInfoObs$: Observable<IResutlRMCharacter[]> = new Observable();

  constructor(
    private _infoService: InfoService
  ){}


  ngOnInit(): void {
    
    // this.subscription$ = this._infoService.getInfo().subscribe(res => {
    //   this.characteres = res;
    // })

    this.getInfoObs$ = this._infoService.getInfo()

    console.log('SIGO MI FLUJO')
    
    
    setTimeout(
      () => {
        this.people = [
          {
            name: 'Carlos',
            age: 20
          },
          {
            name: 'Alonso',
            age: 23
          },
          {
            name: 'Raul',
            age: 18
          },
          {
            name: 'Fabricio',
            age: 25
          }
        ]
      }
      ,2000
    )
  }


  // ngOnDestroy(): void {
  //   this.subscription$.unsubscribe();
  // }

  
}
