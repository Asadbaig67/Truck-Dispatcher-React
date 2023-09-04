import * as React from "react";
import { Button } from '@react-email/button';
import { Html } from '@react-email/html';

export function Email() {
  //   const { url } = props;

  return (
    <Html lang="en">
      <Button>Click me</Button>
    </Html>
  );
}
