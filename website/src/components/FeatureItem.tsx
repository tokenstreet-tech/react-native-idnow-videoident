import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';

import styles from './FeatureItem.module.css';

export interface IFeatureItem {
    readonly title: string;
    readonly Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    readonly description: JSX.Element;
}

export const FeatureItem: FC<IFeatureItem> = ({ title, Svg, description }) => (
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
