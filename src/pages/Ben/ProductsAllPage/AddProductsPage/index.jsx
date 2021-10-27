import AddFormInput from '../../../components/AddFormInput'
import { withRouter } from 'react-router-dom'
import './index.css'
function AddProductsPage(props) {
  const addForm = () => {
    const fd = new FormData(document.add_form)
    fetch('http://localhost:3001/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(fd).toString(),
    })
      .then((r) => r.json())
      .then((obj) => {
        console.log(JSON.stringify(obj, null, 4))
      })
       props.history.push('/back-stage/products/page/1')
  }

  return (
    <>
      <div className="addProductsPage">
        {/* 背景圖片 */}
        <div className="background">
          {/* 自訂容器寬度 */}
          <div className="container873">
            {/* 主體區域 */}
            <div className="main">
              <h2 className="title">新增商品</h2>
              <form name="add_form" onSubmit={addForm}>
                <AddFormInput />
                <button type="sumbit">新增</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(AddProductsPage)
