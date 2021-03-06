# Highlight or Hide Search Engine Results
#### A web extension that allows to highlight or hide search results.

### Supported search engines
- [Duckduckgo](https://duckduckgo.com)
- [Qwant](https://www.qwant.com)
- [Google](https://www.google.com)
- [Yahoo](https://fr.search.yahoo.com)

## Development
The extension is created with ReactJs, Redux, Material UI and TypeScript.

### Requirements
- [Node.js](https://nodejs.org/) (latest)
- [Yarn](https://yarnpkg.com/) (latest)

```js
$ git clone git@github.com:pistom/hohser.git
$ cd hohser
$ yarn
```

### Develop popup as a simple page
```js
$ yarn start
```
The page will be loaded with a fake domains list from `BrowserStorageSyncMock.ts` file.

## Build
```js
$ yarn buil:firefox   // The package will be built in the "build/firefox" directory.
$ yarn buil:chrome    // The package will be built in the "build/chrome" directory.
```


### Load to Firefox
```js
$ yarn load   // Run firefox and load built extension
```

### Optional
You can load the extension to Firefox with a profile to be able to use the data stored in the previous session.

- Create a new directory named `browser`.
- Create new firefox profile named `huser1` in the `browser` directory (on Windows: `Win+R` and `Firefox.exe -P`).
  
```js
$ yarn load:profile
```

If needed, you can change the `package.json` script, but **do not commit this change**.
