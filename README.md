# fx5

Installation
---

```
$ npm i -g @maxmellon/fx5
```

Usage
---

### example1

```bash
echo '{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}
' | fx5 'x => x.menu.popup.menuitem'
```

```
[
  {
    "value": "New",
    "onclick": "CreateNewDoc()"
  },
  {
    "value": "Open",
    "onclick": "OpenDoc()"
  },
  {
    "value": "Close",
    "onclick": "CloseDoc()"
  }
]
```

### example2

```bash
echo '{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}
' | fx5 'x => x.menu.popup.menuitem.reduce((acc, cur) => acc + cur.value + " ", "")'
```

```
New Open Close
```

### example3

- pipeline-operator

```
echo '{"menu": {
  "id": "file",
  "value": "File",
  "popup": {
    "menuitem": [
      {"value": "New", "onclick": "CreateNewDoc()"},
      {"value": "Open", "onclick": "OpenDoc()"},
      {"value": "Close", "onclick": "CloseDoc()"}
    ]
  }
}}
' | fx5 'x => x.menu |> Object.keys'
```

```
[
  "id",
  "value",
  "popup"
]
```

Requirements
---

- node >= 9


Inspired
---

- **[antonmedv/fx](https://github.com/antonmedv/fx)**

Special Thanks!!!!

