#### JavaScript

```js
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
```

Output

```bash
NOT positive
```

#### Clojure

```clojure
(defn test-num [a]
  (if (> a 0)
    "positive"
    "NOT positive"))

(test-num -5)
```

```bash
NOT positive
```
