import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import 'inter-ui'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { NetworkContextName } from './constants'
import { LanguageProvider } from './i18n'
import App from './pages/App'
import store from './state'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import UserUpdater from './state/user/updater'
import FarmUpdater from './state/farms/updater'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'
import getLibrary from './utils/getLibrary'
import SEO from './components/SEO'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

if ('ethereum' in window) {
  ;(window.ethereum as any).autoRefreshOnNetworkChange = false
}

function Updaters() {
  return (
    <>
      <ListsUpdater />
      <UserUpdater />
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
      <FarmUpdater />
    </>
  )
}

ReactDOM.render(
  <StrictMode>
    <SEO
      title="KyberDMM - Powering decentralized token exchange and liquidity"
      description="KyberDMM is DeFi’s first Dynamic Market Maker; a decentralized exchange protocol that provides frictionless crypto liquidity with extremely high flexibility and capital efficiency. KyberDMM is the first major protocol in Kyber’s liquidity hub."
    />
    <FixedGlobalStyle />
    <Provider store={store}>
      <HashRouter>
        <LanguageProvider>
          <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ProviderNetwork getLibrary={getLibrary}>
              <Updaters />
              <ThemeProvider>
                <ThemedGlobalStyle />
                <App />
              </ThemeProvider>
            </Web3ProviderNetwork>
          </Web3ReactProvider>
        </LanguageProvider>
      </HashRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
