import React from 'react';
import { Layout, Space } from 'antd';
import HeaderApp from './header/Header';
import ContentApp from './content/Content';

const { Header, Footer } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const AppLayout = ({ children }: any) => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
        <HeaderApp />
      </Header>
      <Layout>
        <ContentApp children={children}/>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Space>
);

export default AppLayout;
