const babel = require("gulp-babel");
const gulp = require("gulp");
const print = require("gulp-print");


gulp.task("build", () => {
	return gulp.src("src/*.js")
		.pipe(print())
		.pipe( babel({ presets: ["env"] }))
		.pipe(gulp.dest("dist"));
});

gulp.task("watch", () => {
	gulp.watch("src/*.js", ["build"]);
});

gulp.task("default", ["watch"]);