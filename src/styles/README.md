# BEM (CSS naming convention) metodology

- [BEM website 1](https://sourcedcode.com/blog/css/what-is-bem-with-examples#valid-bem-naming/)
- [BEM website 2](https://en.bem.info/methodology/quick-start/)
- [BEM website 3](https://www.geeksforgeeks.org/understanding-the-css-bem-convention/)

##  Use in JavaScript / TypeScript files

### CSS (BEM notation) --> "kebab-case"
block__element_modifier-value

or

block__element--modifier-value
```
BLOCK - Component of code functionally independent component of the page
* block-name <-- block name
.post-card {}
ELEMENT - Component of code functionally dependent on its parent block
* __elem-name <-- element name
.post-card__button {}
MODIFIER - Describe a state, action (or behavior) or appearance  
* --mod-name <-- modifier name
.post-card__button_download {}
.post-card__button--download {}
.contact-form__button_enabled {}
.contact-form__button--enabled {}
* --mod-name_with-value-name <-- modifier key-value
.post-card__button_size-sm {}
.post-card__button--size-sm {}
```

### TS/JS (my BEM notation)--> "camelCase"
blockName__elementName_modifierNameValueName

```
BLOCK - Component of code functionally independent component of the page
* block-name <-- block (name space)
.postCard {}
ELEMENT - Component of code functionally dependent on its parent block
* __elem-name <-- element (role into the block)
.postCard__button {}
MODIFIER - Describe a state, action (or behavior) or appearance  
* --mod-name <-- modifier name
.postCard__button_download {}
.contactForm__button_disabled {}
* --mod-name_with-value-name <-- modifier key-value
.postCard__button_sizeSm {}
```

### Structure directories example
```
src/styles/ 
│
├── contactForm/
│         ├── __button/
│         │         ├── contactForm__button.ts
│         │         └── _disabled/
│         │             └── contactForm__button_disabled.ts
│         └── __input
│             └── contactForm__input.ts
├── mainView/
          ├── __button/
          │         └── mainView__button.ts
          ├── __input/
          │         └── mainView__input.ts
          ├── mainView.ts
          └── _theme/
              ├── mainView_themeDark.ts
              └── mainView_themeLight.ts
```
