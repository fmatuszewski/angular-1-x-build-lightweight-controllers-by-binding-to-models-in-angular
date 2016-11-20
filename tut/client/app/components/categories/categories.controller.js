class CategoriesController {
  constructor(CategoriesModel){
    'ngInject';

    this.CategoriesModel = CategoriesModel;

  }

  $onInit(){
    console.log('INIT');
    this.CategoriesModel.getCategories()
      .then(result => this.categories = result);
  }

  $onDestroy(){
    console.log('DESTROY');
  }


  onCategorySelected(category){
    console.log('CATEGORY SELECTED',category);
    this.CategoriesModel.setCurrentCategory(category);
  }
  isCurrentCategory(category){
    return this.CategoriesModel.getCurrentCategory() &&
      this.CategoriesModel.getCurrentCategory().id === category.id;
  }
}

export default CategoriesController;
