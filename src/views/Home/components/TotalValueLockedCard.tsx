import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from 'maki-toolkit'
import { useTranslation } from 'contexts/Localization'
import { useTVL } from 'hooks/api' // disabled: useGetStats
// import BigNumber from 'bignumber.js'
// import { useFarmFromPid, usePriceMakiHusd } from 'state/hooks' // removed:  usePriceBtcHusd, usePriceEthHusd, usePriceHtHusd

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  background: white;
`

const CardMidContent = styled(Heading)`
  line-height: 1.2;
  font-size: 30px;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  // const data = useGetStats()
  const tvl = useTVL()
  // const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null
  // const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  /* ACQUIRE PRICES */
  // const makiPrice = new BigNumber(usePriceMakiHusd())
  // const htPrice = makiPrice// new BigNumber(usePriceHtHusd())
  // const ethPrice = makiPrice // new BigNumber(usePriceEthHusd())
  // const btcPrice = makiPrice // new BigNumber(usePriceBtcHusd())

  /* VALUE BY PID */
  // const F0 = new BigNumber(1500000)
  // const F1 = new BigNumber(useFarmFromPid(1).quoteTokenAmountTotal).times(htPrice)
  // const F2 = new BigNumber(useFarmFromPid(2).quoteTokenAmountTotal).times(htPrice)
  // const F3 = new BigNumber(useFarmFromPid(3).quoteTokenAmountTotal).times(makiPrice)
  // const F4 = new BigNumber(useFarmFromPid(4).quoteTokenAmountTotal).times(htPrice)
  // const F5 = new BigNumber(useFarmFromPid(5).quoteTokenAmountTotal).times(ethPrice)
  // const F6 = new BigNumber(useFarmFromPid(6).quoteTokenAmountTotal).times(btcPrice)
  // const F7 = new BigNumber(useFarmFromPid(7).quoteTokenAmountTotal).times(htPrice)
  // const F8 = new BigNumber(useFarmFromPid(8).quoteTokenAmountTotal)
  // const F9 = new BigNumber(useFarmFromPid(9).quoteTokenAmountTotal).times(ethPrice)
  // const F10 = new BigNumber(useFarmFromPid(10).quoteTokenAmountTotal).times(htPrice)

  // const HTVAL = F1.plus(F2).plus(F4).plus(F7).plus(F10)
  // const MAKIVAL = F3.plus(F0)
  // const ETHVAL = F5.plus(F9)
  // const BTCVAL = F6
  // const USDVAL = F8

  /* SUM VALUE LOCKED */
  const ttlVal = tvl.toLocaleString().slice(0, 11)
  const totalValueFormated = ttlVal ? `${Number(ttlVal).toLocaleString(undefined, { maximumFractionDigits: 0 })}` : '-'

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="md" color="text">
          {t('Total Value Locked')}
        </Heading>
        {tvl ? (
          <>
            <CardMidContent color="primaryDark">
              (TVL)
              <br />
              {`$${totalValueFormated}`}
            </CardMidContent>
            <Heading scale="md" color="text">
              {t('Across all LPs and farms')}
            </Heading>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
