import angular from 'angular';
import saveBookmarkComponent from './save-bookmark.component';

const SaveBookmarksModule = angular.module('save-bookmark',[])
  .component('save-bookmark', saveBookmarkComponent);

export default SaveBookmarksModule;
