import { css } from '@emotion/react'

const dimStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  background: #3d3d3d;
  width: 100vh;
  height: 100vh;
`

const childrenStyle = css`
  margin: auto;
`

type DimProps = {
  children: React.ReactElement
}

const Dim: React.FC<DimProps> = ({
  children
}) => {
  return (
    <div css={[dimStyle, childrenStyle]}>
      { children }
    </div>
  )
}

export default Dim