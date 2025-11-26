import i18n from 'i18next';
import enTrans from "@/locals/en/translations.json"
import ukTrans from "@/locals/uk/translations.json"
import {initReactI18next} from "react-i18next";

const resources = {
    en: { translation: enTrans },
    uk: { translation: ukTrans }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'uk',
        lng: 'uk',

        interpolation: {
            escapeValue: false,
        },
        ns: ['translation'],
        defaultNS: 'translation',
    })

export default i18n;