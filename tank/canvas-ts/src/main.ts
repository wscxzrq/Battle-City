import './style.scss'
import config from './config.ts';
const app = document.querySelector<HTMLDivElement>('#app')!;
app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + 'px';