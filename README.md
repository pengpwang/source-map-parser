# source-map-parser
a source map parser for uglify javascript

usage: 

### 1. start server

```
npm install
npm run start
```

### 2. request API [POST]

```
request url:  http://localhost:3001/sourcemap
request method: POST
request body: 
  err: 
    ReferenceError: qq is not defined
      at /Users/wpp/Documents/others/nodejs_study/source-map-parser/sm/main.min.js:1:1081
      at Object.<anonymous> (/Users/wpp/Documents/others/nodejs_study/source-map-parser/sm/main.min.js:1:1108)
      at r (/Users/wpp/Documents/others/nodejs_study/source-map-parser/sm/main.min.js:1:172)
      at /Users/wpp/Documents/others/nodejs_study/source-map-parser/sm/main.min.js:1:964
      at Object.<anonymous> (/Users/wpp/Documents/others/nodejs_study/source-map-parser/sm/main.min.js:1:973)
      at Module._compile (internal/modules/cjs/loader.js:701:30)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
      at Module.load (internal/modules/cjs/loader.js:600:32)
      at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
      at Function.Module._load (internal/modules/cjs/loader.js:531:3)

responese: 
{
    "code": 0,
    "msg": "successful operation",
    "data": {
        "msg": "ReferenceError: qq is not defined",
        "stackArr": [
            {
                "filepath": "/Users/wpp/Documents/next/source-map-parser/sm/main.js",
                "source": "webpack:///sm/main.js",
                "line": 13,
                "column": 2
            },
            {
                "filepath": "/Users/wpp/Documents/next/source-map-parser/sm/main.js",
                "source": "webpack:///sm/main.js",
                "line": 13,
                "column": 2
            },
            {
                "filepath": "/Users/wpp/Documents/next/source-map-parser/sm/bootstrap",
                "source": "webpack:///webpack/bootstrap",
                "line": 36,
                "column": 26
            },
            {
                "filepath": "/Users/wpp/Documents/next/source-map-parser/sm/main.js",
                "source": "webpack:///sm/main.js",
                "line": 12,
                "column": 2
            },
            {
                "filepath": "/Users/wpp/Documents/next/source-map-parser/sm/main.js",
                "source": "webpack:///sm/main.js",
                "line": 12,
                "column": 14
            }
        ]
    }
}
```
