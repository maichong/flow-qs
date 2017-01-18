declare module 'qs' {
  declare var stringify: (object: Object, opts?: {
    format?:'RFC1738'|'RFC3986';
    delimiter?:string;
    strictNullHandling?:boolean;
    strictNullHandliskipNullsng?:boolean;
    encode?:boolean;
    encoder?:Function;
    sort?:Function;
    allowDots?:boolean;
    serializeDate?:Function;
    filter?:Function|Array<any>;
    arrayFormat?:'indices'|'brackets'|'repeat';
    indices?:boolean
  }) => string;

  declare var parse: (str: string, opts?: {
    decoder?:Function;
    delimiter?:string;
    depth?:number;
    arrayLimit?:number;
    parseArrays?:boolean;
    allowDots?:boolean;
    plainObjects?:boolean;
    allowPrototypes?:boolean;
    parameterLimit?:number;
    strictNullHandling?:boolean;
  }) => string;

  declare var formats: {
    'default': 'RFC3986';
    formatters:{
      RFC1738:Function;
      RFC3986:Function;
    };
    RFC1738: 'RFC1738';
    RFC3986: 'RFC3986';
  };
}

declare module 'qs/lib/stringify' {
  declare var exports: (object: Object, opts?: {
    format?:'RFC1738'|'RFC3986';
    delimiter?:string;
    strictNullHandling?:boolean;
    strictNullHandliskipNullsng?:boolean;
    encode?:boolean;
    encoder?:Function;
    sort?:Function;
    allowDots?:boolean;
    serializeDate?:Function;
    filter?:Function|Array<any>;
    arrayFormat?:'indices'|'brackets'|'repeat';
    indices?:boolean
  }) => string;
}

declare module 'qs/lib/parse' {
  declare var exports: (str: string, opts?: {
    decoder?:Function;
    delimiter?:string;
    depth?:number;
    arrayLimit?:number;
    parseArrays?:boolean;
    allowDots?:boolean;
    plainObjects?:boolean;
    allowPrototypes?:boolean;
    parameterLimit?:number;
    strictNullHandling?:boolean;
  }) => string;
}
