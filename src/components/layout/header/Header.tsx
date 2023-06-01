import React from "react";
import { Row, Col, Input } from "antd";
import { LogoIcon } from "~/components/TestIcon/LogoIcon";
import { FrameIcon } from "~/components/TestIcon/FrameIcon";
import { FrameIcon2 } from "~/components/TestIcon/FrameIcon2";

const SearchLogo = () => {
  return (
    <div className='frame'>
      <FrameIcon className='icon2' />
    </div>
  )
}
export default function HeaderApp() {
  return (
    <Row>
      <Col flex="100px" className="logo">
        <div className='logo2'>
          <LogoIcon className='icon' />
        </div>
      </Col>
      <Col flex="auto">
        <div className='inputSearch'>
          <Input size="large" placeholder="Rechercher une valeur..." prefix={<SearchLogo />} bordered={false} />
        </div>
      </Col>
      <Col flex="100px" className="profile">
        <div className='profil'>
          <div className='frame1'>
            <div className='mS'>MS</div>
          </div>
          <div className='frame2'>
            <FrameIcon2 className='icon3' />
          </div>
        </div>
      </Col>
    </Row>
  );
}
