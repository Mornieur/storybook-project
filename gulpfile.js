// const gulp = require("gulp");
// const sass = require("gulp-sass");
// const babel = require("gulp-babel");
// const minify = require("gulp-minify");
// const imagemin = require("gulp-imagemin");

// // Compila arquivos Sass para CSS
// gulp.task("sass", function () {
//   return gulp
//     .src("src/scss/**/*.scss")
//     .pipe(sass())
//     .pipe(gulp.dest("dist/css"));
// });

// // Transpila arquivos JavaScript ES6+ para ES5
// gulp.task("babel", function () {
//   return gulp
//     .src("src/js/**/*.js")
//     .pipe(
//       babel({
//         presets: ["@babel/preset-env"],
//       })
//     )
//     .pipe(gulp.dest("dist/js"));
// });

// // Minifica arquivos JavaScript
// gulp.task("minify-js", function () {
//   return gulp.src("dist/js/*.js").pipe(minify()).pipe(gulp.dest("dist/js"));
// });

// // Otimiza imagens
// gulp.task("imagemin", function () {
//   return gulp
//     .src("src/images/*")
//     .pipe(imagemin())
//     .pipe(gulp.dest("dist/images"));
// });

// // Copia arquivos HTML para a pasta de distribuição
// gulp.task("copy-html", function () {
//   return gulp.src("src/*.html").pipe(gulp.dest("dist"));
// });

// // Tarefa padrão que executa todas as tarefas acima
// gulp.task(
//   "default",
//   gulp.series("sass", "babel", "minify-js", "imagemin", "copy-html")
// );

function defaultTask(cb) {
  // place code for your default task here
  cb()
}

exports.default = defaultTask
