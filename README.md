**Steps to reproduce**

1. ```npm start```
2. In your browser go to ```http://localhost:8080```
3. Test the ```Select``` with devtools opened to console screen
4. Observe the log triggered when changed
5. Edit routes/home/index.js
. Change line ```24``` from
```js
console.log(selectedIndex, selectedValues, 'c')
```
to something else like
```js
console.log(selectedIndex, selectedValues, 'd')
```
6. Repeat from step 3

*BTW, the initial size of the select is wrong (78px instead of 100%) but I didn't investigate yet ;)*
