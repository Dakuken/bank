import {
  animate, style, transition, trigger, state, keyframes, stagger, query, group, animateChild
} from "@angular/animations";


const mobileAnimations = [
  trigger('animeSideBar', [
    state('hide', style({
      height: '60px',
      width: '60px',
    })),
    state('show', style({
      height: '90vh',
      maxWidth: '60px'
    })),
    transition('hide => show', [
      animate("0.150s", keyframes([
        style({ height: '60px', offset: 0 }),
        style({ height: '50vh', offset: 0.4 }),
        style({ height: '90vh', offset: 1 })
      ])),
      group([query('@animateContentSideBar', animateChild()),
      ]),
    ]),
    transition('show => hide', [
      group([query('@animateContentSideBar', animateChild()),
      ]),
      animate("0.1s", keyframes([
        style({ minWidth: '30vw', height: '90vh', offset: 0 }),
        style({ minWidth: '15vw', height: '50vh', offset: 0.4 }),
        style({ minWidth: '60px', height: '60px', offset: 1 }),
      ])),
    ])
  ]),
];

const desktopAnimations = [
  trigger('animeSideBar', [
    state('hide', style({
      height: '60px',
      width: '60px',
    })),
    state('show', style({
      height: '90vh',
      minWidth: '30vw',
      maxWidth: '400px'
    })),
    transition('hide => show', [
      animate("0.150s", keyframes([
        style({ minWidth: '60px', height: '60px', offset: 0 }),
        style({ minWidth: '15vw', height: '50vh', offset: 0.4 }),
        style({ minWidth: '30vw', height: '90vh', offset: 1 })
      ])),
      group([query('@animateContentSideBar', animateChild()),
      ]),
    ]),
    transition('show => hide', [
      group([query('@animateContentSideBar', animateChild()),
      ]),
      animate("0.1s", keyframes([
        style({ minWidth: '30vw', height: '90vh', offset: 0 }),
        style({ minWidth: '15vw', height: '50vh', offset: 0.4 }),
        style({ minWidth: '60px', height: '60px', offset: 1 }),
      ])),
    ])
  ]),
];

export function getAnimations() {
  const isMobile = matchMedia("(max-width: 600px)").matches;

  return isMobile ? mobileAnimations : desktopAnimations;
}