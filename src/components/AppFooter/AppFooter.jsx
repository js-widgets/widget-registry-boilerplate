import React from 'react';
import { InfoCard, InfoSection } from '../Info';
import { Application32, Migrate32, SettingsAdjust32 } from '@carbon/icons-react';

const AppFooter = () => (
  <InfoSection heading="The Principles" className="landing-page__r3">
    <InfoCard
      heading="Widgets are Configurable"
      body='Build once and embed many times. Configure your widgets when embedding to leverage the same widget in multiple situations. "Tweak the widget knobs and stamp".'
      icon={<SettingsAdjust32 />}
    />
    <InfoCard
      heading="Widgets are Modular"
      body="Widgets are designed to work seamlessly with each other in any digital experience. Use them in a website, or an application, as your digital building blocks."
      icon={<Application32 />}
    />
    <InfoCard
      heading="Widgets are Consistent"
      body="Weather your organization uses a CMS, static HTML, or any other tech widgets stay the same. Feel free to re-platform while keeping your widgets intact. Leverage the CMS integrations for a better editorial experience."
      icon={<Migrate32 />}
    />
  </InfoSection>
);

export default AppFooter;
