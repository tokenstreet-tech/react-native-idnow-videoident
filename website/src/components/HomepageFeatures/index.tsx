/* eslint-disable react-native/no-raw-text */
import undrawDocusaurusMountain from '@site/static/img/undraw_docusaurus_mountain.svg';
import undrawDocusaurusReact from '@site/static/img/undraw_docusaurus_react.svg';
import undrawDocusaurusTree from '@site/static/img/undraw_docusaurus_tree.svg';
import React from 'react';

import type { IFeatureItem } from './Feature';
import { Feature } from './Feature';
import styles from './index.module.css';

const FeatureList: Array<IFeatureItem> = [
    {
        Svg: undrawDocusaurusMountain,
        description: <>All configuration options of the SDKs are possible from the JavaScript side.</>,
        title: 'Highly configurable',
    },
    {
        Svg: undrawDocusaurusTree,
        description: (
            <>
                Latest dependencies of the IDnow <a href="https://github.com/idnow/de.idnow.ios">iOS</a> and{' '}
                <a href="https://github.com/idnow/de.idnow.android">Android</a> SDKs. Secured by Dependabot.
            </>
        ),
        title: 'Always up to date',
    },
    {
        Svg: undrawDocusaurusReact,
        description: (
            <>
                Strong type declarations are included in this package. There isn&apos;t a single <code>any</code>.
            </>
        ),
        title: 'First class TypeScript support',
    },
];

const HomepageFeatures: React.FC = () => (
    <section className={styles.features}>
        <div className="container">
            <div className="row">
                {FeatureList.map((props: IFeatureItem) => (
                    <Feature key={props.title} {...props} />
                ))}
            </div>
        </div>
    </section>
);
export default HomepageFeatures;
