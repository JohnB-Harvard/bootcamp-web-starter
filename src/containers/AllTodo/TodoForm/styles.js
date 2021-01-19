import styled from 'styled-components'

export const Button = styled.button`
  height: 24px;
  width: 140px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.fonts.againstLight};
  border: none;
  border-radius: 2px;

  &:hover {
    background: ${({ theme }) => theme.colors.background.quaternary};
    cursor: pointer;
  }
`
