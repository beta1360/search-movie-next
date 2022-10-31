import { css } from '@emotion/react'

const footerLayoutStyle = css`
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  z-index: 0;
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;
  border-bottom: 1px solid grey;
`

const infoStyle = css`
  color: skyblue;
`

const FooterLayout: React.FC = ({}) => {
  return (
    <footer css={footerLayoutStyle}>
      <h4 css={infoStyle}>Made by Marco</h4>
    </footer>
  )
}

export default FooterLayout