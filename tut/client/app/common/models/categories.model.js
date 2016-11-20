class CategoriesModel {
  constructor($q, $rootScope){
    'ngInject';
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.currentCategory = null;
    this.categories = [
      {"id":0, "name":"Development"},
      {"id":1, "name":"Design"},
      {"id":2, "name":"Excercise"},
      {"id":3, "name":"Humor"}

    ];
  }
  getCategories(){
    return this.$q.when(this.categories);
  }
  getCurrentCategory(){
    return this.currentCategory;
  }
  setCurrentCategory(category){

    this.currentCategory = category;
    this.$rootScope.$broadcast('onCurrentCategoryUpdated');
  }
}
export default CategoriesModel;
