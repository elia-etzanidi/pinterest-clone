import './editor.css'
import Layers from './Layers'
import Options from './Options'
import Workspace from './Workspace'

const editor = ({ previewImg }) => {
  return (
    <div className='editor'>
        <Layers previewImg={previewImg} />
        <Workspace previewImg={previewImg} />
        <Options previewImg={previewImg} />
    </div>
  )
}

export default editor