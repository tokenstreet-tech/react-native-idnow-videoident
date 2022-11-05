// Updating Android...
// Update AndroidManifest by adding xmlns:tools to the manifest tag and tools:replace to the application tag
import { AndroidConfig } from '@expo/config-plugins';
import type { ExpoConfig } from '@expo/config-types';

export const applyManifestConfig = async (
    _config: Pick<ExpoConfig, 'android'>,
    androidManifest: AndroidConfig.Manifest.AndroidManifest
): Promise<AndroidConfig.Manifest.AndroidManifest> => {
    const { getMainApplicationOrThrow } = AndroidConfig.Manifest;
    // Get the <application /> tag and assert if it doesn't exist.
    const mainApplication = getMainApplicationOrThrow(androidManifest);
    const { manifest } = androidManifest;
    const xmlnsTools = {
        'xmlns:tools': 'http://schemas.android.com/tools',
    };
    const toolsReplace = {
        'tools:replace': 'android:name,android:icon,android:theme,android:allowBackup',
    };

    // Add xmlns:tools attribute to the manifest tag
    if (!manifest.$.hasOwnProperty('xmlns:tools')) {
        manifest.$ = {
            ...manifest.$,
            ...xmlnsTools,
        };
    }

    // Add tools:replace attribute to the application tag
    if (!mainApplication.$.hasOwnProperty('tools:replace')) {
        mainApplication.$ = {
            ...mainApplication.$,
            ...toolsReplace,
        };
    }

    return androidManifest;
};

// Add import com.bitwala.idnow.RNIdnowPackage; to the imports at the top of the file
export const applyPackage = (mainApplication: string) => {
    const idnowPackageImport = `import com.bitwala.idnow.RNIdnowPackage;\n`;

    // Make sure the project does not have the settings already
    if (!mainApplication.includes(idnowPackageImport)) {
        mainApplication = mainApplication.replace(
            /package com.heyfina.app;/,
            `package com.heyfina.app;\n${idnowPackageImport}`
        );
    }

    return mainApplication;
};

// Include react-native-idnow android/settings.gradle
export const applySettings = (gradleSettings: string) => {
    const idnowSettings = `include ':react-native-idnow'\nproject(':react-native-idnow').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-idnow/android')`;
    // Make sure the project does not have the settings already
    if (!gradleSettings.includes(idnowSettings)) {
        return gradleSettings + idnowSettings;
    }

    return gradleSettings;
};

// Add react-native-idnow inside the dependencies block in android/app/build.gradle
export const applyImplementation = (appBuildGradle: string) => {
    const idnowImplementation = `compile project(':react-native-idnow')\nimplementation ('de.idnow.android.sdk:idnow-platform:4.12.0')`;

    // Make sure the project does not have the dependency already
    if (!appBuildGradle.includes(idnowImplementation)) {
        return appBuildGradle.replace(/dependencies\s?{/, `dependencies {\n${idnowImplementation}`);
    }

    return appBuildGradle;
};

// Add the following to allprojects/repositories in android/build.gradle
export const applyRepositories = (appBuildGradle: string) => {
    const idnowRepositories = `maven {
        url "https://raw.githubusercontent.com/idnow/de.idnow.android.sdk/master"
     }
     maven {
        url "https://raw.githubusercontent.com/idnow/de.idnow.android/de.idnow.android-5.0.12.1"
     }`;

    // Make sure the project does not have the repositories already
    if (!appBuildGradle.includes(idnowRepositories)) {
        return appBuildGradle.replace(
            /allprojects\s{\n\s*repositories\s{/,
            `allprojects {\nrepositories {
          ${idnowRepositories}`
        );
    }

    return appBuildGradle;
};

// Exclude section
export const applyPackagingOptionsAndConfigurations = (appBuildGradle: string) => {
    const idnowPackagingOptions = `\nandroid {
    packagingOptions {
        exclude "org.bouncycastle"
        exclude 'org/bouncycastle/x509/CertPathReviewerMessages_de.properties'
        exclude 'org/bouncycastle/x509/CertPathReviewerMessages.properties'
        exclude 'org.bouncycastle.LICENSE'
        exclude 'META-INF/DEPENDENCIES.txt'
        exclude 'META-INF/LICENSE.txt'
        exclude 'META-INF/NOTICE.txt'
        exclude 'META-INF/NOTICE'
        exclude 'META-INF/LICENSE'
        exclude 'META-INF/DEPENDENCIES'
        exclude 'META-INF/notice.txt'
        exclude 'META-INF/license.txt'
        exclude 'META-INF/dependencies.txt'
        exclude 'META-INF/LGPL2.1'
        exclude("META-INF/*.kotlin_module")
        exclude 'META-INF/proguard/androidx-annotations.pro'
    }
    configurations.all {
      exclude module: 'bcprov-jdk15to18'
    }
}`;

    // Make sure the project does not have the packagingOptions already
    if (!appBuildGradle.includes(idnowPackagingOptions)) {
        return appBuildGradle + idnowPackagingOptions;
    }

    return appBuildGradle;
};
