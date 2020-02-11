import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Aurora } from '../Aurora';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import { FormField } from '../Form/FormField';
import { FormFieldIcon } from '../Form/FormFieldIcon';
import { Input } from '../Form/Input';

const ThemeReadme = require('./README.md');

storiesOf('Forms', module)
  .addDecorator(centered)
  .addParameters({
    readme: {
      sidebar: ThemeReadme.default
    }
  })
  .add('basics', () => {
    return (
      <Aurora>
        <Form>
          <FormField>
            <Input hasIconLeft hasAddonRight placeholder='Email'/>
            <FormFieldIcon icon='fas fa-envelope' iconPosition='left'/>
            <Button type='button' variant='primary'>Submit</Button>
          </FormField>
        </Form>
      </Aurora>
    );
  });
