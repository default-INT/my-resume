declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
  const svg: string;
  export { ReactComponent };
  export default svg;
}
