import clsx from 'clsx';
import React from 'react';

// @ts-ignore
import styles from './styles.module.css';

interface FeatureItem {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
}

const FeatureList: Array<FeatureItem> = [
    {
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and used to get your website up and
                running quickly.
            </>
        ),
        title: 'Easy to Use',
    },
    {
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into
                the <code>docs</code> directory.
            </>
        ),
        title: 'Focus on What Matters',
    },
    {
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the
                same header and footer.
            </>
        ),
        title: 'Powered by React',
    },
];

const Feature = ({ title, Svg, description }: FeatureItem) => (
    <div className={clsx('col col--4')}>
        <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
