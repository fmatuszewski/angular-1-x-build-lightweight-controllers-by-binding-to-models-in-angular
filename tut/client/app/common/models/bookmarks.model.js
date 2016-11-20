import { uniqueId, findIndex, remove } from 'lodash';

class BookmarksModel{

  constructor($q){
    'ngInject';
    this.$q = $q;

    this.bookmarks = [
      {"id":1,"title":"Humor 11","url":"http://url.com","category":"Humor"},
      {"id":2,"title":"Humor 12","url":"http://url.com","category":"Humor"},
      {"id":3,"title":"Humor 13","url":"http://url.com","category":"Humor"},
      {"id":4,"title":"Humor 14","url":"http://url.com","category":"Humor"},
      {"id":5,"title":"Design 1","url":"http://url.com","category":"Design"},
      {"id":6,"title":"Excercise 1","url":"http://url.com","category":"Excercise"},
      {"id":7,"title":"Development 1","url":"http://url.com","category":"Development"}

    ];
  }

  getBookmarks(){
    return this.$q.when(this.bookmarks);
  }

  createBookmark(bookmark){
    bookmark.id = uniqueId();
    this.bookmarks.push(bookmark);
  }
  updateBookmark(bookmark){
    const index = findIndex(this.bookmarks, b => b.id === bookmark.id);
    this.bookmarks[index] = bookmark;
  }
  deleteBookmark(bookmark){
    remove(this.bookmarks, b=>b.id === bookmark.id);
  }
}

export default BookmarksModel;
