import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { HomepageHeader } from '@site/src/components/HomepageHeader';
import Layout from '@theme/Layout';
import React from 'react';

const Home: React.FC = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout description={siteConfig.tagline} title={siteConfig.title}>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
};
export default Home;
