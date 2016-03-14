// gulpfile.js

var gulp = require('gulp');
var concat = require('gulp-concat');

// Application files.
var appFiles = 'app/src/ts/*.ts';

// List of .js libs.
var angular2Files = [
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/systemjs/dist/system-polyfills.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js',
    'node_modules/angular2/bundles/http.dev.js'
];

// List of .css libs.
var cssFiles = [
    'app/styles/angular2crud.css'
];

// Concat all .js libs.
gulp.task('concat-angular', function() {
    return gulp.src(angular2Files)
               .pipe(concat('angular2.js'))
               .pipe(gulp.dest('./dist'));
});

// Concat all .css libs.
gulp.task('concat-css', function() {
    return gulp.src(cssFiles)
               .pipe(concat('angular2crud.css'))
               .pipe(gulp.dest('./dist'));
});

// Default build task (run by typing 'gulp').
gulp.task('default', ['concat-angular', 'concat-css']);
