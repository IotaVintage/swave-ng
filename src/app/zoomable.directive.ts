import { Directive, OnInit, ElementRef, HostListener,Renderer2  } from '@angular/core';
import * as Hammer from 'hammerjs';
@Directive({
  selector: '[appZoomable]',
  
})
export class ZoomableDirective implements OnInit {

  private scale = 1;
  private lastScale = 1;
  private position = { x: 0, y: 0 };
  private lastPosition = { x: 0, y: 0 };

  private hammer!: HammerManager;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.initHammer();
  }

  private initHammer() {
    this.hammer = new Hammer(this.el.nativeElement);

    // Enable pinch and pan gestures
    this.hammer.get('pinch').set({ enable: true });
    this.hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    this.hammer.on('pinch', (ev) => this.onPinch(ev));
    this.hammer.on('pan', (ev) => this.onPan(ev));
    this.hammer.on('pinchend panend', () => this.onGestureEnd());
  }

  private onPinch(event: HammerInput) {
    this.scale = Math.max(1, Math.min(this.lastScale * event.scale, 3)); // Limit zoom between 1x and 3x
    this.updateTransform();
  }

  private onPan(event: HammerInput) {
    this.position.x = this.lastPosition.x + event.deltaX;
    this.position.y = this.lastPosition.y + event.deltaY;
    this.updateTransform();
  }

  private onGestureEnd() {
    this.lastScale = this.scale;
    this.lastPosition.x = this.position.x;
    this.lastPosition.y = this.position.y;
  }

  private updateTransform() {
    const transform = `translate(${this.position.x}px, ${this.position.y}px) scale(${this.scale})`;
    this.renderer.setStyle(this.el.nativeElement, 'transform', transform);
  }

}
