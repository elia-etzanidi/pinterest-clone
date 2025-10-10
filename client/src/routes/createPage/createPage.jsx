import './createPage.css'
import Image from '../../components/image/Image'

const createPage = () => {
  return (
    <div className='createPage'>
      <div className="createTop">
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image src="/general/upload.svg" alt="" />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            We recommend using high quality .jpg files less than 20MB or .mp4 files less than 200Mb.
          </div>
        </div>
        <form className="createForm">
          <div className="createFormItem">
            <label htmlFor="title">Title</label>
            <input 
              type="text" 
              placeholder='Add a title' 
              name='title' 
              id='title' 
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="description">Description</label>
            <textarea
              rows={6} 
              type="text" 
              placeholder='Add a detailed description' 
              name='description' 
              id='description' 
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="link">Link</label>
            <input 
              type="text" 
              placeholder='Add a link' 
              name='link' 
              id='link' 
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="title">Board</label>
            <select name="board" id="board">
              <option>Choose a board</option>
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
            </select>
          </div>
          <div className="createFormItem">
            <label htmlFor="tags">Tagged Topics</label>
            <input 
              type="text" 
              placeholder='Add taggs' 
              name='tags' 
              id='tags' 
            />
            <small>Don't worry, people won't see your tags</small>
          </div>
        </form>
      </div>
    </div>
  )
}

export default createPage