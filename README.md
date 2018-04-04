# fx5

Installation
---

```
$ npm i -g @maxmellon/fx5
```

Usage
---

### example1

- command

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

- output

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

- command

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

- output

```
New Open Close
```

Requirements
---

- node >= 9


Inspired
---

- **[antonmedv/fx](https://github.com/antonmedv/fx)**

Special Thanks!!!!

