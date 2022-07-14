import { ItemComponent } from './item/item.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

// tick() will move forward to the time that your first async call is resolved.
// flush() will move to the end, the time where all asynchronous calls are finished.


describe('App Component' , ()=>{
  beforeEach(async(() => {          //run before any other block 
    //async is used to tell runner to resolve both sync and async compiling components
    TestBed.configureTestingModule({
       declarations: [
          AppComponent
       ],
    }).compileComponents();
 }));
//check component is created
 it('should create the app', async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;   //creates instance of class
  expect(app).toBeTruthy();
}));
//add property of component. check title set is changed or not from instance of component
it(`should have as title 'todo-app'`, async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance; //debugEl associated wid root element of this component. compinst is element's own instance if have
  expect(app.title).toEqual('todo-app');
}));
//how test behaves in browser
xit('should render title', async(() => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();   //detectChanges is instance of comp. to simulate running on browser is called
  const compiled = fixture.debugElement.nativeElement;  //once component rendered. access child using nativeElement
expect(compiled.querySelector('h1').textContent).toContain('todo-app is running');
}));
//test if component item is defined
let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
     
      declarations: [ItemComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should create item component", () => {
    expect(component).toBeTruthy();
  });
})

describe('', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ],
      declarations: [ AppComponent ],
      providers: [  ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should be clicked add button', async(() => {
    spyOn(component, 'addItem');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.addItem).toHaveBeenCalled();
    });
  }));
});

// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'todo-app'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('todo-app');
//   });

//   xit('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('todo-app app is running!');
//   });
// });
