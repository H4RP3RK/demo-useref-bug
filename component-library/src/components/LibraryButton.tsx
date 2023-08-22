import { ComponentPropsWithRef, useRef } from "react";

type LibraryButtonProps = ComponentPropsWithRef<"button">;

export function LibraryButton(props: LibraryButtonProps): JSX.Element {
  const countRef = useRef(0);

  function handle() {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  }

  return <button onClick={handle}>Click Me</button>;
}
