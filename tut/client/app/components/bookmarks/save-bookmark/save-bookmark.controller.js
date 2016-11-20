class SaveBookmarkController{
  $onChanges(){
    console.log('ON CHANGE FIRED!');
    this.editedBookmark = Object.assign({},this.bookmark);
  }
}
export default SaveBookmarkController;
