import useSWR from "swr";
import { React } from "react";

import SpotLight from "../components/spotlight/index.js";
import NavigationBar from "../components/navigation/index.js";
const URL = "https://example-apis.vercel.app/api/art";

export default function SpotlightPage({ data }) {
  console.log(data);
  function getRandomImageArtist() {
    return Math.floor(Math.random() * data.length);
  }
  function Image() {
    let numberOfPictureArtist = getRandomImageArtist();
    return (
      <SpotLight
        artist={data[numberOfPictureArtist].artist}
        image={data[numberOfPictureArtist].imageSource}
      />
    );
  }

  return (
    <>
      <div>{Image()}</div>;
    </>
  );
}
