// Babel Polyfill. MUST BE FIRST
import '@babel/polyfill';
import 'module-alias/register';
// CLS
import * as fs from 'fs';

import './util/cls';

import App from './app';


const app = new App({port: '80'}).initialize();