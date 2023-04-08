import ArtPiecePreview from "../artPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      {pieces.map((picture) => (
        <ul key={picture.slug}>
          <ArtPiecePreview
            image={picture.imageSource}
            title={picture.name}
            artist={picture.artist}
          />
        </ul>
      ))}
      ;
    </>
  );
}
