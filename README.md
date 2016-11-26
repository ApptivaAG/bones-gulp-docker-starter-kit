# A WordPress Starter Kit for Bones with Gulp and Docker

Getting everything setup can be a real hassle. With this repo you have a complete development environment setup with one single command and you don't pollute your system with a local Wordpress and MySQL installation.



## INSTALLATION

1. Install Docker
1. Clone this repo
1. `docker-compose up -d` in the root of the cloned repo.
1. Open `localhost:3000` in your browser.
1. Follow the process to setup WordPress.
1. Start to make changes to the `src/` files and see your browser refreshing automatically.



## BONES

The theme in the `src` folder is from the [Bones Starter Theme](https://github.com/eddiemachado/bones/) project.


### UPDATE THE THEME

It was added to this repo with the subtree merge strategy. To pull the last changes from it follow this [guide](https://git-scm.com/book/en/v1/Git-Tools-Subtree-Merging).



## ORGANIZATION

This starter kit uses `src`, `build`, and `dist` folders to organize theme development:

* `src`: this directory contains the raw material for your theme: templates (`src/`), PHP includes (`src/inc`), language files (`src/languages`), styles (`src/scss`), scripts (`src/js`), and images (anywhere under `src/`). **Only edit files in this directory!**
* `build`: generated by Gulp, this is a *working copy* of your theme for use in development and testing.
* `dist`: short for distribution, this will be the final, polished copy of your theme for production. You will need to manually run `gulp dist` to create a new distribution. You can also symlink this directory for a final round of testing; just keep in mind that your theme will now be in `dist/[project]`, where `[project]` is the setting at the top of the Gulp configuration. This project folder is what you will want to deploy to production. (No more weird junk in your themes. Hooray!)

Note: both the `build` and `dist` directories are disposable and can be regenerated from the contents of `src`. You aren't likely to want to edit files in this folders but you may want to open them up to diagnose issues with the build process itself.



## DOCKER

This starter kit is so easy and fast thanks to Docker.

Execute `docker-compose` commands in the root folder of this project.

* Initialize: `docker-compose up -d` (only first time for a new project)
* Stop: `docker-compose stop`
* Start: `docker-compose start`
* Restart gulp: `docker-compose restart gulp`
* Show gulp logs: `docker-compose logs gulp`
* Distribute: `docker-compose exec gulp gulp dist`



## THANKS

* The theme in the `src` folder is from the amazing [Bones Starter Theme](https://github.com/eddiemachado/bones/). Thank you!
* This starter kit is based on the work of [Synapticism](https://github.com/synapticism/wordpress-gulp-starter-kit). Thank you!



## MAINTAINER

Made with ♥️ by [Apptiva](www.apptiva.ch)