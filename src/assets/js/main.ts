import '../css/style.scss';
import { setupCounter } from './counter.ts';

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
