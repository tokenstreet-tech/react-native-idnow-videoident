export interface IOptions {
    companyId?: string;
    showVideoOverviewCheck?: boolean;
    showErrorSuccessScreen?: boolean;
    transactionToken: string;
    ignoreCompanyID?: boolean;
    showIdentTokenOnCheckScreen?: boolean;
    forceModalPresentation?: boolean;

    appearance?: {
        // Adjust colors
        primaryBrandColor?: string;
        successColor?: string;
        failureColor?: string;
        proceedButtonBackgroundColor?: string;
        proceedButtonTextColor?: string;
        photoIdentRetakeButtonBackgroundColor?: string;
        photoIdentRetakeButtonTextColor?: string;
        defaultTextColor?: string;
        textFieldColor?: string;

        // Adjust statusbar
        enableStatusBarStyleLightContent?: boolean;

        // Adjust fonts
        fontNameRegular?: string;
        fontNameLight?: string;
        fontNameMedium?: string;
    };
}
