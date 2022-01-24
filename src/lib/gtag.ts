export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

declare global {
  interface Window {
    gtag: any;
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
  conversion,
}: {
  action: any;
  category: any;
  label: any;
  value: any;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

//<!-- Event snippet for Website traffic conversion page -->
//<script>
//gtag('event', 'conversion', {'send_to': 'AW-10843745825/g5LgCKrA0ZIDEKHc2bIo'});
//</script>


//<!-- Global site tag (gtag.js) - Google Analytics -->
//<script async src="https://www.googletagmanager.com/gtag/js?id=UA-216787896-1"></script>
//<script>
//  window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
//  gtag('js', new Date());
//
//  gtag('config', 'UA-216787896-1');
//</script>

// gtag('set', {'user_id': 'USER_ID'}); // Set the user ID using signed-in user_id.