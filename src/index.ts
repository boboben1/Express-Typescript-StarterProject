// Babel Polyfill. MUST BE FIRST
import '@babel/polyfill';

import App from './app';

const app = new App({port: '80'}).initialize();