/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { deepEqual } from 'assert';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture < HomeComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [HomeComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let social = {
      facebook: 'https://www.facebook.com/thisisandela/',
      twitter: 'https://twitter.com/andela_kenya',
      github: 'https://github.com/AndelaOSP'
    };

    expect(component).toBeTruthy();
    expect(component.catchPhrase)
      .toEqual('Improve your productivity, let us do the worrying for you');
    expect(component.message).toEqual('Welcome to Maintt issue tracking plartform');
    deepEqual(component.social, social);
  });
});
