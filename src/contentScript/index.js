// printAllPageLinks();

if (document.readyState == "complete") {
  printAllPageLinks();
} else {
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      printAllPageLinks();
    }
  };
}

export function printAllPageLinks() {
  const currentUrl = document.URL;

  // play the first song in the songs tray, from search results
  const spotifyPlaySongAction = () => {
    const identifier = 'data-testid="tracklist-row"';
    // get the buttom from the this searchResult
    console.log("spotify is an ass");
    document
      .querySelectorAll(`[${identifier}]`)[0]
      .querySelector("button")
      .click();
  };

  // play the first result in the videos tray, from search results
  const youtubePlayVideoAction = () => {
    const identifier = "ytd-video-renderer";
    document.querySelectorAll(`${identifier}`)[0].querySelector("a").click();
  };

  console.log("The document has been loaded now");

  if (currentUrl.indexOf("youtube.com/results?search_query") >= 0) {
    // if (currentUrl.indexOf("search/") > 0) {
    youtubePlayVideoAction();
  } else if (currentUrl.indexOf("search/") > 0) {
    spotifyPlaySongAction();
  } else {
    console.log("will do nothing here");
  }
}
