// @ts-ignore
import Link from '@docusaurus/Link';
// @ts-ignore
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// @ts-ignore
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

// @ts-ignore
import styles from './index.module.css';

const HomepageHeader = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/intro">
                        Docusaurus Tutorial - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
};

const Home = (): JSX.Element => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout description="Description will go into a meta tag in <head />" title={`Hello from ${siteConfig.title}`}>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
};
export default Home;
