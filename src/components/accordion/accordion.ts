import { Component, ViewChild, OnInit, Renderer, Input, ElementRef } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {

  accordionExpanded = false;
  @ViewChild('cardContent') cardContent: any;

  @Input('accordionObject') accordionObject: any;
  @Input('accordionList') accordionList: Array<any>;

  constructor(
    public renderer: Renderer,
    private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  closeExpandedItems(accordionObject) {
    this.accordionList.forEach((item) => {
      item.expanded = item == accordionObject ? item.expanded : false;
    });
  }

  focusOnBarCodeInput(element) {
    if (element) {
      this.renderer.invokeElementMethod(element, 'focus', []);
    }
  }

  getInputOfElementClicked() {
    return this.elementRef.nativeElement.querySelector('input');
  }

  handleInput() {
    let element = this.getInputOfElementClicked();
    this.focusOnBarCodeInput(element);
  }

  toggleAccordion(accordionObject) {
    this.handleInput();
    accordionObject.expanded = !accordionObject.expanded;
    this.closeExpandedItems(accordionObject);
  }

}
