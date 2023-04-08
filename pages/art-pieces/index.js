import ArtPieces from "../../components/artPieces/index.js";

export default function ArtPiece({data}) {
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
