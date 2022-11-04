import type { XcodeProject } from '@expo/config-plugins';

export interface IFile {
    fileRelativePath: string;
    currentDir: string;
    sourceRoot: string;
    project: XcodeProject;
    projectName: string;
}
