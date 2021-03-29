import React from 'react'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { ProfileOutlined } from '@ant-design/icons'
import AppRouting from './AppRouting'

const { Header, Content, Footer } = Layout

const AppLayout = () => {
  return (
    <Layout className='layout'>
      <Header>
        <div className='logo'>
          <a href='/'>
            <ProfileOutlined /> Service Provider App
          </a>
        </div>
      </Header>

      <Content style={{ margin: '2rem', padding: '1rem' }}>
        <div className='site-layout-content'>
          <AppRouting />
        </div>
      </Content>

      <Footer className='footer'>
        Built by Ashish Karki. <br />
        Made with ❤ in Nepal.
      </Footer>
    </Layout>
  )
}

export default AppLayout
