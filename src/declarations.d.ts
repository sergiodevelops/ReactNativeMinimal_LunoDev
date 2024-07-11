// declaration.d.ts
declare module '*.scss' {
    const content: { [styleName: string]: string };
    export default content;
}
// https://stackoverflow.com/questions/71099924/cannot-find-module-file-name-png-or-its-corresponding-type-declarations-type
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
