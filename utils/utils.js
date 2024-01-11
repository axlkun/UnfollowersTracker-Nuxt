export const checkAdblocker = async () => {
    try {
      await fetch(
        new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
          method: 'HEAD',
          mode: 'no-cors'
        })
      );
      return false;
    } catch (error) {
      return true;
    }
  };