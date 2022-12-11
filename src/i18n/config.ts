import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './en/translation.json';
import {useSelector} from "react-redux";

export const resources = {
    en: {
        translation
    }
};


i18next.use(initReactI18next).init({
    lng: navigator.language === "ru" ? "ru" : "en", // if you're using a language detector, do not define the lng option
    debug: false,
    resources,
});