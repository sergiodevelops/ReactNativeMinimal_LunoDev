declaration.d.ts
declare module '*.scss' {
    const content: { [styleName: string]: string };
    export default content;
}
