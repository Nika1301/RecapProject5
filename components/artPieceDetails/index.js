import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre, nameOfButton }) {
  return (
    <main>
      <Link>{title}</Link>
      <Image src={image} height="500" width="500" alt="image" />
      <h2>{artist}</h2>
      <p>
        {genre}
        {year}
      </p>
      <button>{nameOfButton}</button>
    </main>
  );
}
