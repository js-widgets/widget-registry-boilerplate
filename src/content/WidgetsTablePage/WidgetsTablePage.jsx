import React from 'react';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import WidgetsTable from '../../components/WidgetsTable';
import buildTableHeaders from './buildTableHeaders';
import buildTableRowsFromRegistry from './buildTableRowsFromRegistry';

import registry from '../../data/registry.json';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';

const WidgetsTablePage = () => {
  const descriptions = registry.reduce(
    (carry, { shortcode, description }) => Object.assign(carry, { [shortcode]: description }),
    {},
  );
  return (
    <>
      <AppHeader />
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-16">
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem href="/">Home</BreadcrumbItem>
              <BreadcrumbItem isCurrentPage href="/">
                Widget types
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="landing-page__heading">Widgets types</h1>
            <div>
              The collection of available widget types in the widget repository. Widget types in the
              repository are available in the CMS integrations without any additional effort.
            </div>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-lg-16">
            <WidgetsTable
              variant="dark"
              headers={buildTableHeaders()}
              rows={buildTableRowsFromRegistry(registry)}
              descriptions={descriptions}
            />
          </div>
        </div>
        <AppFooter />
      </div>
    </>
  );
};

export default WidgetsTablePage;
