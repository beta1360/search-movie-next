import Search from '@/components/shared/Search'
import { css } from '@emotion/react'

const topLayoutStyle = css`
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 0;
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;
  border-bottom: 1px solid grey;
`

const titleStyle = css`
  width: 100%;
  color: skyblue;
  flex: 1 0 150px;
  margin: auto 20px auto;
  cursor: pointer;
`

type TopLayoutProps = {
  isMainPage: boolean
  defaultKeyword?: string
  placeholder?: string
  goToMainPage: () => void
  onChange: (value: string) => void
  handleSubmit: (e: React.SyntheticEvent) => void
}

const TopLayout: React.FC<TopLayoutProps> = ({
  isMainPage,
  defaultKeyword = '',
  placeholder = '검색어를 입력해주세요.',
  goToMainPage,
  onChange,
  handleSubmit
}) => {
  return (
    <header css={topLayoutStyle}>
      <h2
        css={titleStyle}
        onClick={goToMainPage}  
      >영화 검색 앱</h2>
      {!isMainPage &&
        <Search
          defaultKeyword={defaultKeyword}
          placeholder={placeholder}
          onChange={onChange}
          handleSubmit={handleSubmit}
        />
      }
    </header>
  )
}

export default TopLayout