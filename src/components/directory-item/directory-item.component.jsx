import { DirectoryItemContainer } from './directory-item.styles'

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <DirectoryItemContainer>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='directory-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
