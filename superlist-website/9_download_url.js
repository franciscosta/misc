

// ------------------------------------------------
// A. Set the download link for mobile
// ------------------------------------------------

function setDownloadUrl() {

  const width = window.innerWidth;
  const button = document.querySelector('.s23-huge-download-link');

  if (width <= 991) {
    button.href="#thisisadownloadlink"
  }
}

setDownloadUrl();

// ------------------------------------------------
// TBD: Set iOS vs Android download link
// ------------------------------------------------


