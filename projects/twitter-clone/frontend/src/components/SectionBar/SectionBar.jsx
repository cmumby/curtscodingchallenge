/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {
  MenuTab,
  MenuTabContainer,
  SectionBarAppBar,
  SectionBarMobileStack,
  SectionBarMainStack,
  SectionBarToolBar,
  SectionBarTabsStack,
  SectionBarAvatar,
  SectionBarLogo,
} from './SectionBar.style';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function SectionBar() {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <SectionBarAppBar className="AppBar" position="sticky">
      <SectionBarToolBar>
        <SectionBarMainStack spacing={1}>
          <SectionBarMobileStack direction="row" sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <SectionBarAvatar variant="circular" src="/img/logo.png" />
            <SectionBarLogo sx={{ fontSize: '2rem', position: 'relative', top: -15 }}>𝕏</SectionBarLogo>
            <SettingsOutlinedIcon />
          </SectionBarMobileStack>
          <SectionBarTabsStack>
            <MenuTabContainer value={value} onChange={handleTabChange} aria-label="menu tabs" centered>
              <MenuTab label="For you" {...a11yProps(0)} />
              <MenuTab label="Following" {...a11yProps(1)} />
            </MenuTabContainer>
          </SectionBarTabsStack>
        </SectionBarMainStack>
      </SectionBarToolBar>
    </SectionBarAppBar>
  );
}

export default SectionBar;
