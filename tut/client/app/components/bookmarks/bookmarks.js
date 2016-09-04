import angular from 'angular';
import bookmarksComponent from './bookmarks.component';

const BookmarksModule = angular.module('bookmarks',[])
.component('bookmarks',bookmarksComponent)

export default BookmarksBodule;
