import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer bg-white p2-2">
      <div className="f__top d-flex flex-wrap">
        <div className="f-group">
          <ul className="list-group list-group-flush text-dark">
            <li className="list-group-item">Lịch sử mua hàng</li>

            <li className="list-group-item">
              <Link className="text-dark" to="DoiTra">
                Chính sách đổi trả
              </Link>
            </li>

            <li className="list-group-item">
              <Link className="text-dark" to="KhuiApple">
                Chính sách khui hộp sản phẩm Apple
              </Link>
            </li>
          </ul>
        </div>
        <div className="f-group">
          <ul className="list-group ">
            <li className="list-group-item">Giới thiệu công ty Smartphone</li>
            <li className="list-group-item">Gửi góp ý, khiếu nại</li>
            <li className="list-group-item">
              <Link className="text-dark" to="BaoHanh">
                Chính sách bảo hành
              </Link>
            </li>
          </ul>
        </div>
        <div className="f-group">
          <ul className="list-group">
            <li className="f__title list-group-item">
              <strong> Tổng đài hỗ trợ </strong>
              10.000/phút
            </li>
            <li className="f__title list-group-item">
              <span>Kỹ thuật: </span>
              <a href="tel: 19004444"> 19004444</a> (7:30 - 22:00)
            </li>
            <li className="f__title list-group-item">
              <span>Khiếu nại: </span>
              <a href="tel: 19004444">19004444</a> (7:30 - 22:00)
            </li>
            <li className="f__title list-group-item">
              <span>Bảo hành: </span>
              <a href="tel: 19004444">19004444</a> (7:30 - 22:00)
            </li>
          </ul>
        </div>
        <div className="f-group">
          <div className="f__title">
            <a href="">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADMklEQVRoQ2NkQAOWoXOEGFh+Jf9nYPBjYGBUAUqLAzEjujo68YHOYHgJtPz2v/+Mm1iZ/s09sizrPbLdKA6ziJie+p+RsYuR4b8AnRxIqjXvGf8zlBxfkTkPphHuAfPIGSCHl5Jq4kCoBzq64/jyzEqQ3WAPmEdNS2P8zzhzIBxDrp3AmEgGxQSjTdQ0wT//Ge8ADRIi17AB0vee8Q+rCqNl5LTS/wyMXQPkCIqsBebwEqAHph8CMmwpMmngNB9ktIic/gpov+hAuEFEgIvBwkCOwUBDkkGYn4tBgI8Dwxkb915n2LDvGi7nvQB54C9QlomeHhAX5mFICTFh8LBRY2Bhxm/13LVnGOYAMQ7wD+QBUGVBN2CuJ8vQmOPMwM+DGdrYHEHAAwx09YChphTDxApvBlZWZqIDbNB4QICXg2FVXyQDLzc70Y4HKRw0HiiKt2EIddchyfGDxgOgJLN9RjwDNyfb0PSAqY4Mw6QqH5IdP2hiIMBJi6E8xQ6nB85ff8bQOusAw9OXn0j2JF1KocRAY4a0UFOcjqvo38lw8PR9kh0P0kAXD6QEmzAkAzEuUNqzneHIuYejHiArBIjRNBoDeEJpNA8gB059lhODgrQgRniJCHIzgJrOuMCTlx8Zvnz7hVX6+t3XDF3zDuHUS9UYmN8azKChSN2uBagv0DlnCHtg0pJjDMu3XRq6MVDctY3h2IVHQ9cDIYXL8DYxBnUe+P3nH4Nj4hyGv3//Dc0YuPfkHUN02Sq8deWgjoEDwAZeJbChhw9Q1QO4LBptSow2JYhpcuJRM5qERpPQaBIa7RPjbUrQfHidhqUQeHj9BdB7oLlgmgFaeQA4Q/mc0Txy+kEgA/ewGRW8RSsPAJ12gNE8YkYJI+P/biq4E6cRtPMAYzGjQ0K/wI+fHHeBttNsmpVGHoBMs4KCzTJietJ/Roa5tIoF2njgf8KJ5VkL4UsNgNOt7cDJsgpaeILqHvjP0HZiRWY1yK0oiz2gMQHKD1RNTlT0wFsGhv/FoJCHBTTGMhrQ0oPf/xmTgBK+QEXq0CKWouU2FHgAmLIZXgBTxk1gWG/mYP8+78CCwg/IqQQAQfWxtipKc7sAAAAASUVORK5CYII=" />
            </a>
            <a href="">
              <img src="data:image/png;base64,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" />
            </a>
            {/* <a href="">
              <img src="#" />
            </a> */}
          </div>
          <div className="f__title"></div>
          <div className="f__title"></div>
          <div className="f__title"></div>
        </div>
      </div>
      <div className="f__bottom">
        <span>
          © 2018. Công ty cổ phần Smartphone. GPDKKD: 0303217354 do sở KH & ĐT
          TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và
          Truyền Thông cấp ngày 04/06/2020. <br />
          Địa chỉ: 1 Trần Quang Khải, P. Tân Định, Q.10, TP.Hồ Chí Minh. Điện
          thoại: 19004444. Email: cskh@smartphone.com. Chịu trách nhiệm nội
          dung: abc
        </span>
      </div>
    </div>
  );
}
export default Footer;
