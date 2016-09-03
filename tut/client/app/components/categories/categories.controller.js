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
  }
}

export default CategoriesController;
