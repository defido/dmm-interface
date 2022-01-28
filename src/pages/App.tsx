import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import { defaultExchangeClient } from 'apollo/client'
import Loader from 'components/LocalLoader'
import Header from '../components/Header'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import Swap from './Swap'
import ProAmmSwap from './SwapProAmm'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import SwapV2 from './SwapV2'
import { BLACKLIST_WALLETS } from '../constants'
import { useActiveWeb3React } from 'hooks'
import { useExchangeClient } from 'state/application/hooks'
import { ChainId } from '@vutien/sdk-core'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'state'
import { setGasPrice } from 'state/application/actions'
import KyberSwapAnnounce from 'components/Header/KyberSwapAnnounce'
import Footer from 'components/Footer/Footer'
import GoogleAnalyticsReporter from 'components/GoogleAnalyticsReporter'
import { RedirectDuplicateTokenIds } from './AddLiquidityV2/redirects'
// Route-based code splitting
const Pools = lazy(() => import(/* webpackChunkName: 'pools-page' */ './Pools'))
const Pool = lazy(() => import(/* webpackChunkName: 'pool-page' */ './Pool'))
const ProAmmPool = lazy(() => import(/* webpackChunkName: 'pool-page' */ './ProAmmPool'))
const ProAmmPositionPage = lazy(() => import(/* webpackChunkName: 'pool-page' */ './ProAmmPool/PositionPage'))

const Yield = lazy(() => import(/* webpackChunkName: 'yield-page' */ './Yield'))
const PoolFinder = lazy(() => import(/* webpackChunkName: 'pool-finder-page' */ './PoolFinder'))
const CreatePool = lazy(() => import(/* webpackChunkName: 'create-pool-page' */ './CreatePool'))
const ProAmmRemoveLiquidity = lazy(() => import(/* webpackChunkName: 'create-pool-page' */ './RemoveLiquidityProAmm'))
const RedirectCreatePoolDuplicateTokenIds = lazy(() =>
  import(
    /* webpackChunkName: 'redirect-create-pool-duplicate-token-ids-page' */ './CreatePool/RedirectDuplicateTokenIds'
  )
)
const RedirectOldCreatePoolPathStructure = lazy(() =>
  import(
    /* webpackChunkName: 'redirect-old-create-pool-path-structure-page' */ './CreatePool/RedirectOldCreatePoolPathStructure'
  )
)

const AddLiquidity = lazy(() => import(/* webpackChunkName: 'add-liquidity-page' */ './AddLiquidity'))

const RemoveLiquidity = lazy(() => import(/* webpackChunkName: 'remove-liquidity-page' */ './RemoveLiquidity'))
const About = lazy(() => import(/* webpackChunkName: 'about-page' */ './About'))

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  z-index: 3;
`

const BodyWrapper = styled.div<{ isAboutpage?: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: calc(100vh - 148px);
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
`

export default function App() {
  const { account, chainId } = useActiveWeb3React()
  const aboutPage = useRouteMatch('/about')
  const apolloClient = useExchangeClient()
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const fetchGas = (chain: string) => {
      fetch(process.env.REACT_APP_KRYSTAL_API + `/${chain}/v2/swap/gasPrice`)
        .then(res => res.json())
        .then(json => {
          dispatch(setGasPrice(!!json.error ? undefined : json.gasPrice))
        })
        .catch(e => {
          dispatch(setGasPrice(undefined))
          console.error(e)
        })
    }

    let interval: any = null
    const chain =
      chainId === ChainId.MAINNET
        ? 'ethereum'
        : chainId === ChainId.BSCMAINNET
        ? 'bsc'
        : chainId === ChainId.AVAXMAINNET
        ? 'avalanche'
        : chainId === ChainId.MATIC
        ? 'polygon'
        : ''
    if (!!chain) {
      fetchGas(chain)
      interval = setInterval(() => fetchGas(chain), 30000)
    } else dispatch(setGasPrice(undefined))
    return () => {
      clearInterval(interval)
    }
  }, [chainId, dispatch])

  return (
    <>
      {(!account || !BLACKLIST_WALLETS.includes(account)) && (
        <ApolloProvider client={apolloClient || defaultExchangeClient}>
          <Route component={GoogleAnalyticsReporter} />
          <Route component={DarkModeQueryParamReader} />
          <AppWrapper>
            <KyberSwapAnnounce />
            {/* <URLWarning /> */}
            <HeaderWrapper>
              <Header />
            </HeaderWrapper>
            <Suspense fallback={<Loader />}>
              <BodyWrapper isAboutpage={aboutPage?.isExact}>
                <Popups />
                <Web3ReactManager>
                  <Switch>
                    <Route exact strict path="/swap-legacy" component={Swap} />
                    <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                    <Route exact strict path="/swap" component={SwapV2} />
                    <Route exact strict path="/find" component={PoolFinder} />
                    <Route exact strict path="/pools" component={Pools} />
                    <Route exact strict path="/pools/:currencyIdA" component={Pools} />
                    <Route exact strict path="/pools/:currencyIdA/:currencyIdB" component={Pools} />
                    <Route exact strict path="/farms" component={Yield} />
                    <Route exact strict path="/myPools" component={Pool} />

                    {/* Create new pool */}
                    <Route exact path="/create" component={CreatePool} />
                    <Route exact path="/create/:currencyIdA" component={RedirectOldCreatePoolPathStructure} />
                    <Route
                      exact
                      path="/create/:currencyIdA/:currencyIdB"
                      component={RedirectCreatePoolDuplicateTokenIds}
                    />

                    {/* Add liquidity */}
                    <Route exact path="/add/:currencyIdA/:currencyIdB/:pairAddress" component={AddLiquidity} />

                    <Route exact strict path="/proamm/swap" component={ProAmmSwap} />
                    <Route exact strict path="/proamm/pool" component={ProAmmPool} />
                    <Route exact strict path="/proamm/pool/:tokenId" component={ProAmmPositionPage} />
                    <Route exact strict path="/proamm/remove/:tokenId" component={ProAmmRemoveLiquidity} />
                    <Route
                      exact
                      strict
                      path="/proamm/add/:currencyIdA?/:currencyIdB?/:feeAmount?"
                      component={RedirectDuplicateTokenIds}
                    />

                    <Route
                      exact
                      strict
                      path="/remove/:currencyIdA/:currencyIdB/:pairAddress"
                      component={RemoveLiquidity}
                    />

                    <Route exact path="/about" component={About} />
                    <Route component={RedirectPathToSwapOnly} />
                  </Switch>
                </Web3ReactManager>
              </BodyWrapper>
              {!window.location.href.includes('about') && <Footer />}
            </Suspense>
          </AppWrapper>
        </ApolloProvider>
      )}
    </>
  )
}
