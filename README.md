# 高専カンファレンスlol Webサイト

## How to dev

Please install [Node.js](https://nodejs.org/en/) to use `npm` command.

```
# Install packages required. They're written on package.json.
npm install

# Gulp watches file changes, and then compiles jade and scss automatically.
gulp watch
```

And open [http://localhost:3000](http://localhost:3000).

```
git checkout -b new_branch_name
# Edit files...

# Push dev files
git add .
git commit -m "[Awesome message]"
git push origin new_branch_name
```

Please create Pull request on GitHub.

## Directories

```
kosenconf-101lol-dev/
  ├── README.md
  ├── gulpfile.babel.js
  ├── package.json
  ├── node_modules/
  ├── dest/ # products
  │   ├── index.html
  │   ├── image/
  │   └── styles/
  └── src/ # dev sources
      ├── jade/
      │   └── index.jade
      ├── scss/
      │   ├── headers/
      │   │   ├── style.scss
      │   │   ├── _atoms.scss
      │   │   ├── _mixins.scss
      │   │   └── _variables.scss
      │   ├── components/
      │   │   ├── style.scss
      │   │   ├── _nav.scss
      │   │   ├── _section.scss
      │   │   └── ...
      │   └── layouts/
      │       ├── style.scss
      │       ├── _sanitize.scss
      │       └── ...
      └ images/
```
