function updateButtonLink() {

  // Define the URLs for iOS, Android, and the default
  const iosUrl = 'https://apps.apple.com/us/app/superlist-tasks-lists/id1547585270';
  const androidUrl = 'https://play.google.com/store/apps/details?id=com.superlist.superlist';
  const defaultUrl = 'https://app.superlist.com';

  // Find the link button by its class
  const linkButton = document.querySelector('.s23-button .s23-hide-on-desktop');

  // Check the platform and update the href attribute
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS device
      linkButton.href = iosUrl;
  } else if (/android/i.test(userAgent)) {
      // Android device
      linkButton.href = androidUrl;
  } else {
      // Default
      linkButton.href = defaultUrl;
  }
}

updateButtonLink();
