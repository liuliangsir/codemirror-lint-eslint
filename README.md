# codemirror-lint-eslint

[codemirror-lint-eslint](https://github.com/liuliangsir/codemirror-lint-eslint) provides the [lint.js](https://github.com/liuliangsir/codemirror-lint-eslint/blob/master/src/lint.js), which is a [CodeMirror addon](http://codemirror.net/doc/manual.html#addons)
to use [CodeMirror Lint](http://codemirror.net/addon/lint/lint.js) with [ESLint](https://github.com/eslint/eslint). In addition, You can play with the demo [index.html](https://github.com/liuliangsir/codemirror-lint-eslint/blob/master/index.html), which validate JavaScript content of a CodeMirror editor with [ESLint](https://github.com/eslint/eslint)

## How to use it

To use [lint.js](https://github.com/liuliangsir/codemirror-lint-eslint/blob/master/src/lint.js), you must declare your CodeMirror instance with
**javascript mode**, and activate **lint** (gutters & lint to true) like this :

```javascript
var editor = CodeMirror.fromTextArea(document.getElementById("code-js"), {
    lineNumbers: true,
    mode: "javascript",
    gutters: ["CodeMirror-lint-markers"],
    lint: true
});
```

and include several scripts (see [index.html](https://github.com/liuliangsir/codemirror-lint-eslint/blob/master/index.html) to see the full scripts and CSS to include).

* Codemirror :

```html
<link rel=stylesheet href="./lib/codemirror/doc/docs.css">
<link rel="stylesheet" href="./lib/codemirror/lib/codemirror.css">
<script src="./lib/codemirror/lib/codemirror.js"></script>
```

* JavaScript mode

```html
<script src="./lib/codemirror/mode/javascript/javascript.js"></script>
```

* Lint interface

```html
<link rel="stylesheet" href="./lib/codemirror/addon/lint/lint.css">
<script src="./lib/codemirror/addon/lint/lint.js"></script>
```

* Lint implementation with ESLint

```html
<script src="./src/lint.js"></script>
```

## Structure

The basic structure of the project is given in the following way:

* `src/app.js` the entry point for whole application
* `src/lint.js` the CodeMirror Lint addon which uses ESLint.
* `index.html` the demo which uses ESLint with CodeMirror editor.
* `lib` folder which contains CodeMirror.
