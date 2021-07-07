import styled from 'styled-components'
import { Flex } from 'rebass'

export const PageWrapper = styled.div`
  padding: 0 17em;
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding: 0 12rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 0 4em;
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0;
  `};
`

export const GlobalDataContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1rem;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    grid-template-columns: 1fr;
  `};
`

export const GlobalDataItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
  border-radius: 5px;
  border: dashed 1px ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.advancedBG};
`

export const GlobalDataItemTitle = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text7};
`

export const GlobalDataItemValue = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #78d5ff;
`

export const AddLiquidityInstructionContainer = styled.div`
  margin-bottom: 20px;
  padding: 1rem;
  background: ${({ theme }) => theme.bg17};
  border-radius: 8px;
`

export const AddLiquidityTitle = styled.span`
  font-size: 14px;
  color: #78d5ff;
  margin-right: 0.5rem;
`

export const AddLiquidityInstructionText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.text11};
`

export const ToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const CurrencyWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-bottom: 8px;
    flex-direction: column;
  `};

  ${({ theme }) => theme.mediaWidth.upToXL`
    margin-bottom: 15px;
  `};
`

export const SearchWrapper = styled(Flex)`
  align-items: center;
`

export const SelectPairInstructionWrapper = styled.div`
  text-align: center;
  height: 100%;
  padding: 24px;
`