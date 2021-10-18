import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/index.scss'
import Router from 'next/router';

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress



Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());  


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp




