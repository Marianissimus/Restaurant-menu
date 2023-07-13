# restaurant-menu

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Deployment
Follow these steps to manually update deployment on github pages:

1. On remote repository delete the "gh-pages" branch.

2. In you local repository run this command: npm run build

3. git add dist -f

4. git commit -m 'deploy to gh-pages'

5. cd.. (make sure you are on top level dir)

5. git subtree push --prefix restaurant-menu/dist origin gh-pages
