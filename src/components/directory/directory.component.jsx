import { DirectoryContainer } from './directory.styles'
import DirectoryItem from "../directory-item/directory-item.component";

const Directory = ({categories}) => {
  return (
    <DirectoryContainer>
      {categories.map(category => (
        <DirectoryItem
          key={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </DirectoryContainer>
  )
}

export default Directory
