/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import { ManagedUIContext } from '../components/ui/context'
// eslint-disable-next-line import/no-unresolved
import '../styles/app.css'



const Noop: FC = ({ children }) => <>{children}</>

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MtApp = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}

export default MtApp