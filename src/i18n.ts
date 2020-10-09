import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n'

import * as en from './lang/en.json'
import * as enUS from './lang/en-US.json'
import * as de from './lang/de.json'

export function initializeLanguages() {
    addMessages('en', en)
    addMessages('en-US', enUS)
    addMessages('de', de)

    init({
        fallbackLocale: 'en',
        initialLocale: getLocaleFromNavigator(),
    })
}