"usr strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

var ts = require("gulp-typescript");
var tsProj = ts.createProject("tsconfig.json");

gulp.task("sass", function () {
    return gulp.src(["./src/**/[^_]*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("./dist"));
});

gulp.task("ts", function () {
    return gulp.src("./src/**/*.ts").
        pipe(tsProj())
        .js
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["sass", "ts"], function () {
});