import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ItemComponent } from './item.component';

// describe('', () => {
//     let fixture: ComponentFixture<ItemComponent>;
//     let component: ItemComponent;
  
//     beforeEach(async(() => {
//       TestBed.configureTestingModule({
//         imports: [ ],
//         declarations: [ ItemComponent ],
//         providers: [  ]
//       }).compileComponents().then(() => {
//         fixture = TestBed.createComponent(ItemComponent);
//         component = fixture.componentInstance;
//       });
//     }));
  
//     it('should be clicked remove button', async(() => {
//       spyOn(component, 'remove');
    
//       let button = fixture.debugElement.nativeElement.querySelector('button');
//       button.click();
    
//       fixture.whenStable().then(() => {
//         expect(component.remove).toHaveBeenCalled();
//       });
//     }));
//   }); 