import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Tabs, Tab } from 'carbon-components-react';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import { Launch32, ArrowRight16 } from '@carbon/icons-react';

const HomePage = () => {
  const tabsProps = {
    selected: 0,
    role: 'navigation',
  };
  const tabProps = {
    role: 'presentation',
    tabIndex: 0,
  };
  return (
    <>
      <AppHeader />
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-16">
            <Breadcrumb noTrailingSlash aria-label="Page navigation">
              <BreadcrumbItem>
                <a href="/">Home</a>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="landing-page__heading">Design &amp; build with Widgets</h1>
          </div>
        </div>
        <div className="bx--row landing-page__r2">
          <div className="bx--col bx--no-gutter">
            <Tabs {...tabsProps} aria-label="Tab navigation">
              <Tab {...tabProps} label="About">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-md-4 bx--col-lg-7">
                      <h2 className="landing-page__subheading">What are widgets?</h2>
                      <p className="landing-page__p">
                        Widgets types are stand alone JavaScript applications ready to use in any
                        publishing context. JavaScript developers develop widgets in their own
                        repositories, so they can be syndicated and embedded in publishing
                        platforms. These include popular CMS, static HTML, other JavaScript
                        applications, etc.
                      </p>
                      <p className="landing-page__p">
                        Build your digital strategy using widgets to maximize reuse of your
                        development efforts. Widgets are designed to allow you to focus on your
                        strategy rather than on development.
                      </p>
                      <Link to={`/widget-types`} className="bx--btn bx--btn--primary">
                        All widgets <ArrowRight16 className="bx--btn__icon" />
                      </Link>
                      &nbsp;
                      <Button
                        kind="ghost"
                        href="https://github.com/js-widgets/widget-registry-boilerplate#readme"
                        renderIcon={Launch32}
                      >
                        Learn more
                      </Button>
                    </div>
                    <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                      <img
                        className="landing-page__illo"
                        src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                        alt="Carbon illustration"
                      />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...tabProps} label="Develop">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-md-4 bx--col-lg-7">
                      <h2 className="landing-page__subheading">Develop widgets</h2>
                      <p className="landing-page__p">
                        Widgets can be as simple as a personalized CTA, or as complex as a full
                        embedded product catalog. Widgets are a powerful tool to build reactive
                        applications that are stamped all across your digital properties.
                      </p>
                      <h3 className="landing-page__subheading--3">Configurable</h3>
                      <p className="landing-page__p">
                        Your widgets can accept external input. This can affect what the color
                        scheme should be, what language should be used, what is the personalized
                        text for the call-to-action button, or what data source to use to fecth for
                        content. This allows you to maintain a single code base powering many
                        variants without code duplication.
                      </p>
                      <h3 className="landing-page__subheading--3">i18n</h3>
                      <p className="landing-page__p">
                        Widgets are ready for internationalization. Both interface text and content
                        can be expressed in your users language.
                      </p>
                      <Button
                        kind="ghost"
                        href="https://github.com/js-widgets/example-widget"
                        renderIcon={Launch32}
                      >
                        Check an example
                      </Button>
                    </div>
                    <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                      <img
                        className="landing-page__develop"
                        src={`${process.env.PUBLIC_URL}/tab-developers.png`}
                        alt="Carbon illustration"
                      />
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <AppFooter />
      </div>
    </>
  );
};

export default HomePage;
