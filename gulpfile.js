// gulpfile.js

var gulp = require('gulp');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var tsProject = ts.createProject('tsconfig.json');

// Application files.
var appFiles = 'app/src/ts/*.ts';

// List of .js libs.
var angular2Files = [
    'node_modules/es6-shim/es6-shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js'
];

// Concat all .js libs.
gulp.task('concat-angular', function() {
    return gulp.src(angular2Files)
               .pipe(concat('angular2.js'))
               .pipe(gulp.dest('./dist'));
});

// Lint all custom TypeScript files.
gulp.task('lint-ts', function () {
    return gulp.src(appFiles)
               .pipe(tslint())
               .pipe(tslint.report('prose'));
});

// Compile TypeScript files.
gulp.task('compile-ts', function () {
    var tsResult = tsProject.src()
                            .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('app/src/js'));
});

// Watch TypeScript files and run tasks when they change.
gulp.task('watch', function() {
    gulp.watch([appFiles], ['lint-ts', 'compile-ts']);
});

// Default build task (run by typing 'gulp').
gulp.task('default', ['concat-angular', 'lint-ts', 'compile-ts', 'watch']);
