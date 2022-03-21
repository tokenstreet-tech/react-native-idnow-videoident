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
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and used to get your website up and
                running quickly.
            </>
        ),
        title: 'Easy to Use',
    },
    {
        Svg: undrawDocusaurusTree,
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into
                the <code>docs</code> directory.
            </>
        ),
        title: 'Focus on What Matters',
    },
    {
        Svg: undrawDocusaurusReact,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the
                same header and footer.
            </>
        ),
        title: 'Powered by React',
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
