import { animate, state, trigger, style, transition, group, keyframes } from '@angular/animations';

/**
 * need to define states that can switch for animating left and right slides
 * also right now the animation is detecting any keypress and activating
 * @type {AnimationTriggerMetadata}
 */
export const flyInOutStateTrigger = trigger('flyInOutState', [
  state('in', style({transform: 'translateX(0)'})),
  transition(':enter', [
    style({transform: 'translateX(100%)'}),
    animate(300)
  ]),
  transition(':leave', [
    animate(300, style({transform: 'translateX(-100%)'}))
  ])
]);

export const fadeStateTrigger = trigger('fadeState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('500ms ease-in', style ({
      opacity: 1
    }))
  ])
]);
