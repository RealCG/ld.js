# ld.js
A tiny JavaScript file for fetching the &lt;body> of another page and swapping it with the current one.

## Usage
- Add a new `<script>` tag to your document's head, like so:
```HTML
<script src="./ld.js"></script>
```
- To replace the current document's body with another page's, add/change the `onclick` event attribute of the element you want to trigger it:
```HTML
<button onclick="ld('/otherpage.html')">Click to go to another page!</button>
```
- To replace the current document's body with an entire file, do the same, but use `l()` instead of `ld()`. The only difference is that `ld()` searches for the `<body>` tag, while `l()` does not, it just replaces the body's `innerHTML` with the file.
```HTML
<button onclick="l('/otherdata.txt')">Click to see other data!</button>
```
