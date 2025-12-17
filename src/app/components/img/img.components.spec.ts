import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgComponents } from './img.components';

describe('ImgComponents', () => {
  let component: ImgComponents;
  let fixture: ComponentFixture<ImgComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
