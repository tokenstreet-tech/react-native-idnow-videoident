/* eslint-disable react-native/no-raw-text */
import { useColorMode } from '@docusaurus/theme-common';
import configurable from '@site/static/img/configurable.svg';
import configurableDark from '@site/static/img/configurableDark.svg';
import dependabot from '@site/static/img/dependabot.svg';
import typescript from '@site/static/img/typescript.svg';
import React, { useMemo } from 'react';

import type { IFeatureItem } from './Feature';
import { Feature } from './Feature';
import styles from './index.module.css';

const HomepageFeatures: React.FC = () => {
    const { isDarkTheme } = useColorMode();

    const FeatureList = useMemo<Array<IFeatureItem>>(
        () => [
            {
                Svg: typescript,
                description: (
                    <>
                        Strong type declarations are included in this package. There isn&apos;t a single{' '}
                        <code>any</code>.
                    </>
                ),
                title: 'First class TypeScript support',
            },
            {
                Svg: isDarkTheme ? configurableDark : configurable,
                description: <>All configuration options of the SDKs are possible from the JavaScript side.</>,
                title: 'Highly configurable',
            },
            {
                Svg: dependabot,
                description: (
                    <>
                        Latest dependencies of the IDnow <a href="https://github.com/idnow/de.idnow.ios">iOS</a> and{' '}
                        <a href="https://github.com/idnow/de.idnow.android">Android</a> SDKs. Secured by Dependabot.
                    </>
                ),
                title: 'Always up to date',
            },
        ],
        [isDarkTheme]
    );

    return (
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
};
export default HomepageFeatures;
