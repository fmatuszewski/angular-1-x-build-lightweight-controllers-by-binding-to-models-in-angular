class BookmarksModel{

  constructor($q){
    'ngInject';
    this.$q = $q;

    this.bookmarks = {
      {"id":1,"title":"","url":"","category":""},
      {"id":2,"title":"","url":"","category":""},
      {"id":3,"title":"","url":"","category":""},
      {"id":4,"title":"","url":"","category":""},
      {"id":5,"title":"","url":"","category":""},
      {"id":6,"title":"","url":"","category":""},
      {"id":7,"title":"","url":"","category":""}

    };
  }

  getBookmarks(){
    return this.$q.when(this.bookmarks);
  }
}
