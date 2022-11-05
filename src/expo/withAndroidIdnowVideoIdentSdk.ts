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
        return appBuildGradle.replace(
            /allprojects\s{\n\s*repositories\s{/,
            `allprojects {\nrepositories {
          ${idnowRepositories}`
        );
    }

    return appBuildGradle;
};
