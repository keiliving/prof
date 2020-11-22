import React, { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HeaderTabs:FC = () => {
  return (
  <Tabs>
    <TabList>
      <Tab>about</Tab>
      <Tab>works</Tab>
    </TabList>

    <TabPanel>
      <h2>ビクン</h2>
    </TabPanel>
    <TabPanel>
      <h2>ボコン</h2>
    </TabPanel>
  </Tabs>
  )
}

export default HeaderTabs