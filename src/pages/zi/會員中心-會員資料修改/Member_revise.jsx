import './Member_revise.css'

function Member_revise() {
  return (
    <>
      <div className="zi-member-revise">
        {/* <Member_bookMark /> */}
        <form className="zi-member-revise-form-content" action="">
          <label htmlFor="E-mail">電子郵件(不可修改)</label>
          <input
            type="email"
            id="E-mail"
            className="zi-member-revise-Email-text"
            placeholder="請輸入電子郵件"
            disabled="disabled"
            value="123456@yahoo.com.tw"
          />

          <label htmlFor="Password">密碼</label>
          <input
            type="password"
            id="Password"
            className="zi-member-revise-Password-text"
            placeholder="請輸入6位數密碼"
            maxlength="6"
            minlength="6"
            value="123456"
          />

          <label htmlFor="Name">姓名</label>
          <input
            type="text"
            id="Name"
            className="zi-member-revise-Name-text"
            placeholder="請輸入姓名"
            value="留梓庭"
          />

          <label htmlFor="zi-member-revise-Birthday">生日</label>
          <input
            type="date"
            id="zi-member-revise-Birthday"
            className="zi-member-revise-Birthday-text"
            placeholder="請輸入生日"
            value="2021-01-01"
          />

          <label htmlFor="Id-number">
            身分證字號<p>(不可修改)</p>
          </label>
          <input
            type="text"
            id="Id-number"
            className="zi-member-revise-Id-number"
            placeholder="請輸入身分證字號"
            disabled="disabled"
            value="F123456789"
          />

          <label htmlFor="Mobile">手機號碼</label>
          <input
            type="text"
            id="Mobile"
            className="zi-member-revise-Mobile"
            placeholder="請輸入手機號碼"
            maxlength="10"
            minlength="10"
            value="0988123456"
          />

          <label htmlFor="Address">聯絡地址</label>
          <input
            type="text"
            id="Address"
            className="zi-member-revise-Address"
            placeholder="請輸入聯絡地址"
            value="中正區中正路"
          />
        </form>
        <div className="zi-member-revise-button-flex">
          <button type="submit" className="zi-member-revise-revisedbutton">
            修改
          </button>
          <button type="submit" className="zi-member-revise-form-submit">
            送出
          </button>
        </div>
      </div>
    </>
  )
}

export default Member_revise
