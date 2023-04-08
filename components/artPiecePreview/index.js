import Image from "next/image";
import { ArtPiecePreviewStyle } from "./artPiecePreview.styled";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <>
      <ArtPiecePreviewStyle>
        <Link href="/art-pieces/${slug}">Title: {title}</Link>
        <Image alt="image" height="100" width="100" src={image} />
        <h4>Artist: {artist}</h4>
      </ArtPiecePreviewStyle>
    </>
  );
}
