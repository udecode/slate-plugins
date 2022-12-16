import { EmojiCategoryType, EmojiSettingsType, i18nProps } from './types';
import { EmojiTriggeringControllerOptions, FrequentEmojis } from './utils';

export const KEY_EMOJI = 'emoji';

export const EMOJI_TRIGGER = ':';
export const EMOJI_MAX_SEARCH_RESULT = 60;

export const EMOJI_TRIGGERING_CONTROLLER_OPTIONS: EmojiTriggeringControllerOptions = {
  limitTriggeringChars: 3,
  maxTextToSearch: 30,
};

export const EmojiSettings: EmojiSettingsType = {
  buttonSize: {
    value: 36,
  },
  perLine: {
    value: 10,
  },
  showFrequent: {
    value: false,
    limit: 16,
  },
  categories: {
    value: [],
  },
  buttonRadius: {
    value: '100%',
  },
};

export const DEFAULT_FREQUENTLY_USED_EMOJI: FrequentEmojis = {
  '+1': 1,
  grinning: 1,
  kissing_heart: 1,
  heart_eyes: 1,
  pray: 1,
  laughing: 1,
  clap: 1,
  joy: 1,
  scream: 1,
  rocket: 1,
  see_no_evil: 1,
  hugging_face: 1,
  heart: 1,
};

export const NUM_OF_CATEGORIES = Object.values(EmojiCategoryType).length;

export const i18n: i18nProps = {
  search: 'Search all emoji',
  clear: 'Clear',
  searchNoResultsTitle: 'Oh no!',
  searchNoResultsSubtitle: 'That emoji couldn’t be found',
  pick: 'Pick an emoji...',
  searchResult: 'Search Results',
  categories: {
    activity: 'Activity',
    custom: 'Custom',
    flags: 'Flags',
    foods: 'Food & Drink',
    frequent: 'Frequently used',
    nature: 'Animals & Nature',
    objects: 'Objects',
    people: 'Smileys & People',
    places: 'Travel & Places',
    symbols: 'Symbols',
  },
  skins: {
    choose: 'Choose default skin tone',
    '1': 'Default',
    '2': 'Light',
    '3': 'Medium-Light',
    '4': 'Medium',
    '5': 'Medium-Dark',
    '6': 'Dark',
  },
};
