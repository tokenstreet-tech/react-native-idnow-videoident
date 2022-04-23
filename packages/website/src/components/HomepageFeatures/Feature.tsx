import styles from '@site/src/components/HomepageFeatures/index.module.css';
import clsx from 'clsx';
import React from 'react';

export interface IFeatureItem {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
}

export const Feature: React.FC<IFeatureItem> = ({ title, Svg, description }) => (
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
