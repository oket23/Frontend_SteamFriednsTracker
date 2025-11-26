const mapI18nToSteamLang = (lng: string): string => {
    const base = lng.split("-")[0];

    switch (base) {
        case "uk":
            return "ukrainian";
        case "pl":
            return "polish";
        case "de":
            return "german";
        case "en":
        default:
            return "english";
    }
};

export default mapI18nToSteamLang;