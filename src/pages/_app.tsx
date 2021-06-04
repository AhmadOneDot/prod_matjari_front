import { AppProps } from 'next/app'
// eslint-disable-next-line import/no-unresolved
import '../styles/app.css'

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default MyApp