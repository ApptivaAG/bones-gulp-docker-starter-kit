// ==== UTILITIES ==== //

var fs          = require('fs')
  , gulp        = require('gulp')
  , plugins     = require('gulp-load-plugins')({ camelize: true })
  , del         = require('del')
  , rsync       = require('gulp-rsync')
  , config      = require('../../gulpconfig').utils
;

// Used to get around Sass's inability to properly @import vanilla CSS; see: https://github.com/sass/sass/issues/556
gulp.task('utils-normalize', function() {
  return gulp.src(config.normalize.src)
  .pipe(plugins.changed(config.normalize.dest))
  .pipe(plugins.rename(config.normalize.rename))
  .pipe(gulp.dest(config.normalize.dest));
});

// Totally wipe the contents of the `dist` folder to prepare for a clean build; additionally trigger Bower-related tasks to ensure we have the latest source files
gulp.task('utils-wipe', ['setup'], function() {
  return del(config.wipe);
});

// Clean out junk files after build
gulp.task('utils-clean', ['build', 'utils-wipe'], function() {
  return del(config.clean);
});

// Copy files from the `build` folder to `dist/[project]`
gulp.task('utils-dist', ['utils-clean'], function() {
  return gulp.src(config.dist.src)
  .pipe(gulp.dest(config.dist.dest));
});

// Copy dist files to remove server
gulp.task('copy-to-server', ['rsa-id','images-optimize'], function() {
  return gulp.src(config.deploy.src)
    .pipe(rsync({
      hostname: config.deploy.server.hostname,
      destination: config.deploy.server.dest,
      root: config.deploy.server.root,
      username: config.deploy.server.username,
      archive: true,
      compress: true,
      incremental: true,
      clean: true
    }))
    .on('error', function(err) {
      console.log(err);
    })
    .on('end', function() { console.log('Deployed')});
});

// Copy rsa_id private key in to container with correct chmod (HACK for windows)
gulp.task('rsa-id', function(){
  var rsaKeyPath = '/root/.ssh/id_rsa';
  if (!fs.existsSync(rsaKeyPath)){
    if (fs.existsSync('/root/.ssh-host/id_rsa')){
      var key = fs.readFileSync('/root/.ssh-host/id_rsa', 'utf8');
      fs.mkdirSync('/root/.ssh');
      fs.writeFileSync(rsaKeyPath, key);
      fs.chmodSync(rsaKeyPath, '600');
    } else {
      console.log('No key found in ~/.ssh/rsa_id on host. Could not copy.');
    }
  }
});