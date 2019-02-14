// @flow
import { I18nManager } from 'react-native';
import i18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import ru from '../assets/translations/ru.json';
import en from '../assets/translations/en.json';

// import memoize from "lodash.memoize";


// const translationGetters = {
//   ru: () => require('../assets/translations/ru.json'),
//   en: () => require('../assets/translations/en.json')
// };

const translationGetters = {
  ru,
  en
};

// const translate = memoize(
//   (key, config) => i18n.t(key, config),
//   (key, config) => (config ? key + JSON.stringify(config) : key),
// );
export const translate = (key: i18n.Scope, config: i18n.TranslateOptions) => i18n.t(key, config);

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: 'en', isRTL: false };

  const { languageTag, isRTL } =
      RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
      fallback;

    // clear translation cache
    // translate.cache.clear();

    // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  // i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.translations = { [languageTag]: translationGetters[languageTag] };
  i18n.locale = languageTag;
};
