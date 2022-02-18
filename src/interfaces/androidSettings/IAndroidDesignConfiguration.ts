enum LanguageEnum {
    /**
     * English
     */
    EN = 'en',

    /**
     * German
     */
    DE = 'de',

    /**
     * French
     */
    FR = 'fr',

    /**
     * Spanish
     */
    ES = 'es',

    /**
     * Italian
     */
    IT = 'it',

    /**
     * Portuguese
     */
    PT = 'pt',

    /**
     * Estonian
     */
    ET = 'et',

    /**
     * Croatian
     */
    HR = 'hr',

    /**
     * Hungarian
     */
    HU = 'hu',

    /**
     * Georgian
     */
    KA = 'ka',

    /**
     * Korean
     */
    KO = 'ko',

    /**
     * Lithuanian
     */
    LT = 'lt',

    /**
     * Latvian
     */
    LV = 'lv',

    /**
     * Dutch
     */
    NL = 'nl',

    /**
     * Polish
     */
    PL = 'pl',

    /**
     * Russian
     */
    RU = 'ru',

    /**
     * Chinese
     */
    ZH = 'zh',

    /**
     * Ukrainian
     */
    UK = 'uk',
}

export interface IAndroidDesignConfiguration {
    language?: LanguageEnum;
}
