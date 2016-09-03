'use strict';

import gulp    from 'gulp';
import webpack from 'webpack-stream';
import path    from 'path';
import sync    from 'run-sequence';
import serve   from 'browser-sync';

let reload = () => serve.reload();
let root = 'client';
let output = 'www';

// helper method for resolving paths
let resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
}

let paths = {
    js: resolveToApp('**/*!(.spec.js).js'), //exclude spec files
    styl: resolveToApp('**/*.styl'), //stylesheets
    html: [
        resolveToApp('**/*.html'),
        path.join(root, 'index.html')
    ],
    entry: path.join(root, 'app/app.js'),
    output: path.join(output, 'js')
}
gulp.task('serve', () => {
    serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {baseDir: output}
    });
});

gulp.task('webpack', () => {
  console.log(paths.entry);
  console.log(paths.output);
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output));
});


// gulp.task('webpack', () => {
//
// });


gulp.task('watch', () => {
    let allPaths = [].concat([paths.js], paths.html, [paths.styl]);
    gulp.watch(allPaths, ['webpack', reload]);
});
gulp.task('default', (done) => {
    sync('webpack', 'serve', 'watch',done)
});
