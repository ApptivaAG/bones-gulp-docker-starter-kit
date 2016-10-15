<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the

 * installation. You don't have to use the web site, you can

 * copy this file to "wp-config.php" and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * MySQL settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://codex.wordpress.org/Editing_wp-config.php

 *

 * @package WordPress

 */


// ** MySQL settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define('DB_NAME', 'wordpress');



/** MySQL database username */

define('DB_USER', 'root');



/** MySQL database password */

define('DB_PASSWORD', 'wordpress');



/** MySQL hostname */

define('DB_HOST', 'mysql');



/** Database Charset to use in creating database tables. */

define('DB_CHARSET', 'utf8');



/** The Database Collate type. Don't change this if in doubt. */

define('DB_COLLATE', '');



/**#@+

 * Authentication Unique Keys and Salts.

 *

 * Change these to different unique phrases!

 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}

 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define('AUTH_KEY',         'ce66e2b63e19dfde222f3fadc91b225c7ccef138');

define('SECURE_AUTH_KEY',  '6d4e3f497d7aba0c3110d076cb8de6f3a42deb53');

define('LOGGED_IN_KEY',    '908eef3460760fbb04403bef591efc25a937405c');

define('NONCE_KEY',        '863d969585d651eaa614bebd36de45c7d4439f70');

define('AUTH_SALT',        'f401c59267efe7b34886971201749948b3783685');

define('SECURE_AUTH_SALT', '008517f5e419769d30df7ae3c1d9437e09e847fa');

define('LOGGED_IN_SALT',   'd609e8ac0f7bc8d3312ba76490d2b439e36bb1ed');

define('NONCE_SALT',       '7a373e9a904e5d597fe4501215af9b9e409514eb');



/**#@-*/



/**

 * WordPress Database Table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix  = 'wp_';



/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the Codex.

 *

 * @link https://codex.wordpress.org/Debugging_in_WordPress

 */

define('WP_DEBUG', false);



// If we're behind a proxy server and using HTTPS, we need to alert Wordpress of that fact
// see also http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}

/* That's all, stop editing! Happy blogging. */

/** bones-gulp-docker starter kit config */

define( 'WP_SITEURL', 'http://localhost:3000' );
define( 'WP_HOME', 'http://localhost:3000' );

define( 'WP_DEFAULT_THEME', 'bones' );


/** Absolute path to the WordPress directory. */

if ( !defined('ABSPATH') )

	define('ABSPATH', dirname(__FILE__) . '/');


/** Sets up WordPress vars and included files. */

require_once(ABSPATH . 'wp-settings.php');


/** bones-gulp-docker starter kit config: turn off canonical redirect */

remove_filter('template_redirect', 'redirect_canonical');