let paths = {
    js: resolveToApp('**/*!(.spec.js).js'), //exclude spec files
    styl: resolveToApp('**/*.styl'), //stylesheets
    html: [
        resolveToApp()
    ]
}
gulp.task('serve', () => {
    serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {baseDir: root}
    });
});
gulp.task('watch', () => {
    let allPaths = [].concat([paths.js], paths.html, [paths.styl]);
    gulp.watch(allPaths, [reload]);
});
gulp.task('default', (done) => {
    sync('serve', 'watch',done)
});
