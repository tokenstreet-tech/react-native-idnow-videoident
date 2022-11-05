// Add the following to allprojects/repositories in android/build.gradle
export const applyRepositories = (appBuildGradle: string): string => {
    const idnowRepositories = `maven {
        url "https://raw.githubusercontent.com/idnow/de.idnow.android.sdk/master"
     }
     maven {
        url "https://raw.githubusercontent.com/idnow/de.idnow.android/de.idnow.android-5.0.12.1"
     }`;

    // Make sure the project does not have the repositories already
    if (!appBuildGradle.includes(idnowRepositories)) {
        const searchRegex = /allprojects\s{\n.*repositories\s{\n/su;
        const test = appBuildGradle.replace(searchRegex, (substring) => substring.concat(idnowRepositories));
        return test;
    }

    return appBuildGradle;
};
