import template from './category-item.html';
import './category-item.styl';

const CategoryItemComponent ={
  bindings: {
    category: '<',
    selected: '&'
  },
  template,
  controllerAs: 'categoryItemCtrl'
};

export default CategoryItemComponent;
