import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import CommonModule from './common/common';

angular.module('app',[
  CommonModule.name,
  ComponentsModule.name
])
  .component('app',appComponent);

console.log('HELLO EGGLY ES6!');
