
import { trigger, state, style, transition, animate } from '@angular/animations';

export const title = trigger('title', [
	transition('* => *', [
		animate('2000ms 2s ease-out', style({
			fontSize: '50px',
			color:'#3f51b5'
		})),
		animate('3000ms 1s ease-out', style({
			color: '#F44336',
		})),
		animate(1500)
	]),
]);

