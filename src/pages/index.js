import Link from "next/link";
import LocalComposedButton from "~components/LocalComposedButton";
import PackageComposedButton from "~components/PackageComposedButton";

export default function Home() {
  return (
    <>
      <LocalComposedButton>Local (no warning)</LocalComposedButton>
      <br />
      <br />
      <PackageComposedButton>Package (warning)</PackageComposedButton>
      <br />
      <br />
      <Link href="/example">
        <a>Go to Example</a>
      </Link>
    </>
  );
}
