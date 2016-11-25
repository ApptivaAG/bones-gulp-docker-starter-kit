// ==== WATCH ==== //

var gulp = require('gulp')
  , watch = require('gulp-watch')  
  , plugins     = require('gulp-load-plugins')({ camelize: true })
  , config      = require('../../gulpconfig').watch
;

// Watch (BrowserSync version): build stuff when source files are modified, let BrowserSync figure out when to reload
// Task chain: build -> browsersync -> watch
gulp.task('watch-browsersync', ['browsersync'], function() {
  watch(config.src.styles, { usePolling: true, interval: 2000 }, function(file) { 
      gulp.start('styles') 
  }); 
  watch(config.src.scripts, { usePolling: true, interval: 2000 }, function(file) { 
      gulp.start('scripts') 
  }); 
  watch(config.src.images, { usePolling: true, interval: 2000 }, function(file) { 
      gulp.start('images') 
  }); 
  watch(config.src.theme, { usePolling: true, interval: 2000 }, function(file) { 
      gulp.start('theme') 
  }); 
});

// Watch (Livereload version): build stuff when source files are modified, inform livereload when anything in the `build` or `dist` folders change
// Task chain: build -> livereload -> watch
gulp.task('watch-livereload', ['livereload'], function() {
  gulp.watch(config.src.styles, ['styles']);
  gulp.watch(config.src.scripts, ['scripts']);
  gulp.watch(config.src.images, ['images']);
  gulp.watch(config.src.theme, ['theme']);
  gulp.watch(config.src.livereload).on('change', function(file) {
    plugins.livereload.changed(file.path);
  });
});

// Master control switch for the watch task
gulp.task('watch', ['watch-'+config.watcher]);
