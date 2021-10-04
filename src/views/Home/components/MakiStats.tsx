import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Text } from 'maki-toolkit'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getMakiAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/stats-bg.png');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const MakiStats = () => {
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getMakiAddress())

  const makiSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0
  const makiSupplyFormated = makiSupply
    ? `${Number(makiSupply).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
    : '-'

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="primary" scale="xl" mb="24px">
          Maki Stats
        </Heading>
        <CardImage src="/images/stats-img.png" alt="maki logo" width={64} height={64} />
        <Block>
          <Text color="primaryDark" style={{ lineHeight: '24px' }} bold>
            {makiSupplyFormated}
          </Text>
          <Text style={{ lineHeight: '36px' }}> Total MAKI Supply</Text>
        </Block>
        <Block>
          <Text color="primaryDark" style={{ lineHeight: '24px' }} bold>
            {getBalanceNumber(burnedBalance).toLocaleString()}
          </Text>
          <Text style={{ lineHeight: '36px' }}> Total MAKI Burned</Text>
        </Block>
        <Block>
          <Text color="primaryDark" style={{ lineHeight: '24px' }} bold>
            16
          </Text>
          <Text style={{ lineHeight: '36px' }}> New MAKI / Block </Text>
        </Block>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default MakiStats
