class BookmarksController{
  constructor(BookmarksModel, CategoriesModel, $scope){
    'ngInject';
    this.$scope = $scope;
    this.BookmarksModel = BookmarksModel;
    this.CategoriesModel = CategoriesModel;
  }
  $onInit(){
    this.BookmarksModel.getBookmarks()
      .then(result => this.bookmarks = result);

    this.$scope.$on('onCurrentCategoryUpdated', this.reset.bind(this));
    this.getCurrentCategory = this.CategoriesModel.getCurrentCategory.bind(this.CategoriesModel);//!!!
    this.deleteBookmark = this.BookmarksModel.deleteBookmark;
    this.reset();
  }

  initNewBookmark(){
    return {
      id:null,
      title: '',
      url: '',
      category: this.CategoriesModel.getCurrentCategory().name
    }
  }
  createBookmark(){
    this.currentBookmark = this.initNewBookmark();
  }
  editBookmark(bookmark){
    console.log('editBookmark',bookmark);
    this.currentBookmark = bookmark;
  }
  saveBookmark(bookmark){
    if(bookmark.id){
      this.BookmarksModel.updateBookmark(bookmark);
    } else {
      this.BookmarksModel.createBookmark(bookmark);
    }
  }
  onSave(bookmark){
    this.saveBookmark(bookmark);
    this.reset();
  }
  reset(){
    console.log('reset');
    this.currentBookmark = null;
  }

}

export default BookmarksController;
