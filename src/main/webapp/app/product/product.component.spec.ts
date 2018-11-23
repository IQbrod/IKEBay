import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBootComponent } from './test-boot.component';

describe('TestBootComponent', () => {
    let component: TestBootComponent;
    let fixture: ComponentFixture<TestBootComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [TestBootComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TestBootComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
