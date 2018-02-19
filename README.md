# ld.js
A bit of JavaScript for replacing the page body with an externally loaded page's body.

## Usage
- Add a new `<script>` tag to your document's head, like so:
```HTML
<script src="./ld.js"></script>
```
- To replace the current document's body with another page's, add/change the `onclick` event attribute of the element you want to trigger it:
```HTML
<button onclick="ld('/otherpage.html')">Click to go to another page!</button>
```
- To replace the current document's body with an entire file, do the same, but use `l()` instead of `ld()`. The only difference is that `ld()` searches for the `<body>` tag, while `l()` does not.
```HTML
<button onclick="l('/otherdata.txt')">Click to see other data!</button>
```

## Parameters
- `ld()` takes two arguments, `page` and `getTitle`.
  - `page` is the path (string) to the page you are taking the body from.
  - `getTitle` is a boolean saying whether you want to replace the current page's `<title>` with the one from the new file.
- `l()` takes only one argument, `page`, same as `ld()`

## Other
I've only tested this in Chrome and Firefox. I'm not a very experienced web dev, but the code is so simple that I can't image it could go wrong in other browsers.
You can use https://raw.githubusercontent.com/RealCG/ld.js/master/ld.js as a sort of CDN link for the script if you want:
```HTML
<script src="https://raw.githubusercontent.com/RealCG/ld.js/master/ld.js"></script>
```
