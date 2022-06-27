


declare module '*.css' {
  const content: any;
  export default content;
}


declare module '*.png' {
  const content: any;
  export default content;
}
declare module 'isomorphic-style-loader/useStyles' {
  const content: any;
  export default content;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      item: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
declare module '*.json' {
  const value: any;
  export default value;
}
declare const require: any;
