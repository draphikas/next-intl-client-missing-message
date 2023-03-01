import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1>404 Page not Found</h1>
      <p>Could not find requested resource</p>
      <Link href={'/'}>{"Retourner à l'accueil"}</Link>
    </>
  );
}
