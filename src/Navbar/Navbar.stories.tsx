import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { css } from 'emotion';
import React from 'react';

import { Aurora } from '../Aurora';
import { Avatar } from '../Avatar/Avatar';
import { LightButton } from '../Button/LightButton/LightButton';
import { Input } from '../Form/Input';
import { Icon } from '../Icon/Icon';
import { Container } from '../Layout/Container/Container';
import { Title } from '../Typography/Title';
import { Navbar } from './Navbar';
import { NavbarBrand } from './NavbarBrand';
import { NavbarContent } from './NavbarContent';
import { NavbarEnd } from './NavbarEnd';

const NavbarReadme = require('./README.md');

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: NavbarReadme.default
    }
  })
  .add('basics', () => {
    return (
      <Aurora>
        <Navbar>
          <NavbarBrand>
            <Icon icon='fad fa-planet-ringed' size='2x' styles={css`margin-right: 12px;`}/>
            <Title variant='primary'>Aurora</Title>
          </NavbarBrand>
          <NavbarContent position='space-between'>
            <Input placeholder='Search issues...' styles={css`margin-right: 8px;`}/>
            <Container>
              <LightButton rounded styles={css`margin-right: 8px;`}>Dashboard</LightButton>
              <LightButton rounded styles={css`margin-right: 8px;`}>Projects</LightButton>
              <LightButton rounded styles={css`margin-right: 8px;`}>Messages</LightButton>
            </Container>
          </NavbarContent>
          <NavbarEnd position='space-between'>
            <Icon icon='fas fa-bell' styles={css`margin-right: 20px;`} isInteractable/>
            <Avatar imgUrl='https://randomuser.me/api/portraits/women/60.jpg' isInteractable/>
          </NavbarEnd>
        </Navbar>
      </Aurora>
    );
  });
