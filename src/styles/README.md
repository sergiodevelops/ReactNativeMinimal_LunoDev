# BEM (CSS naming convention) metodology

- [BEM website 1](https://sourcedcode.com/blog/css/what-is-bem-with-examples#valid-bem-naming/)
- [BEM website 2](https://en.bem.info/methodology/quick-start/)

##  Use in JavaScript / TypeScript files

- CSS (BEM notation) --> "kebab-case"
```
block-name__elem-name_mod-name_mod-name-value-name
----------------------------
* block-name <-- block name
* __elem-name <-- element name
* _mod-name <-- modifier name
* _mod-name_with-value-name <-- modifier and value names
```

- TS/JS (my BEM notation)--> "camelCase"
```
blockName__elemName_modName_modName$$valueName
----------------------------
* blockName <-- block name
* __elemName <-- element name
* _modName <-- modifier name
* _modName$valueName <-- modifier name with value
```
