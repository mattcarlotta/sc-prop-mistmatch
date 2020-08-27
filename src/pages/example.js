import Link from "next/link";
import Headline from "~components/Headline";

export default function Example() {
  return (
    <>
      <Headline>Composed from package</Headline>
      <br />
      <br />
      <Link href="/">
        <a>Go home</a>
      </Link>
    </>
  );
}
