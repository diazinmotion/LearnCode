var gulp = require('gulp');
var ts = require('gulp-typescript');

// initiate tsproject config
var tsProject = ts.createProject("../tsconfig.json");

// create a gulp task
gulp.task('typescript', function() {
    // get all the .ts extension files
    return tsProject.src("./13. Workflow/*.ts")
        // pipe is to build it afterwards
        // ts(tsProject) means compile it to js
        .pipe(ts(tsProject))
        .pipe(gulp.dest(""));
});

// other task to watch the compilation process
gulp.task("watch", function(){
    gulp.watch("*.ts", ["typecsript"]);
});

gulp.task("default", ["watch"]);