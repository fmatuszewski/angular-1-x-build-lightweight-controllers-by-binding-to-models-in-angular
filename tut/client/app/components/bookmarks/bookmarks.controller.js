class BookmarksController{
  counstructor(BookmarksModel){
    'ngInject';

    this.BookmarksModel = BookmarksModel;
  }
  $onInit(){
    this.BookmarksModel.getBookmarks()
      .then(result => this.bookmarks = result);

  }
}

export default BookmarksController;
