import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    en: {
        translation: {
            'name': 'name',
            'email': 'email',
            'full name': 'full name'
        }
    },
    ar: {
        translation: {
            'name': 'الاسم',
            'email': 'البريد الاكتروني',
            'full name': 'الاسم الثلاثي'
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en'
    })
export default i18n