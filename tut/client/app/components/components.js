import angular from 'angular';
import CategoriesModule from './categories/categories';

const ComponentModule = angular.module('components',[
  CategoriesModule.name
]);

export default ComponentModule;
