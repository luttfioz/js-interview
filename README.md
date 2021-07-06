# js-interview
```javascript
const p = { a: '2', b: '3' };
const t = { b: '15', c: '16' };

const summary = { ...p, ...t };
console.log(summary)
```

> name:  
> link: https://davidwalsh.name/merge-objects  
> result:  `{ a: '2', b: '15', c: '16' }  `  
> explanation:  

</br>
</br>



```javascript
var strA = "hi there";
var strB = strA;
strB="bye there!";
console.log (strA)
```

<details><summary><b>Answer</b></summary>

The output will be `'hi there'` because we're dealing with strings here. Strings are 
passed by value, that is, copied. 

</details>

> name:  
> link:  https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions#1-what-would-be-the-output-of-following-code  
> result:  `hi there`  
> explanation:  

</br>
</br>



```javascript
var objA = { prop1: 42 };
var objB = objA;
objB.prop1 = 90;
console.log(objA)
```

> name:  
> link:  https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions#2 
> result:  `{ prop1: 90 }`  
> explanation:  

</br>
</br>

```javascript
console.log(employeeId);
var employeeId = '19000';

```

> name:  Hoisting
> link:  https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions#2-what-would-be-the-output-of-following-code-1  
> result:  `undefined`  
> explanation:  

</br>
</br>


```javascript
var bar = true;
console.log(bar + 0);   
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false);

```

> name:  type
> link: https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions#question-14-what-will-be-the-output-of-the-following-code  
> result:  `1 truexyz 2 1`  
> explanation:  

</br>
</br>

```javascript

```

> name:  
> link:  
> result:  `a`  
> explanation:  

</br>
</br>

```javascript

```

> name:  
> link:  
> result:  `a`  
> explanation:  

</br>
</br>