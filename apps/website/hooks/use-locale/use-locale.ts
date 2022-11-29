// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LocaleMap<Key extends string> {
  fa: Record<Key, string>;
  en: Record<Key, string>;
}

export default function useLocale<Key extends string>(
  localeMap?: LocaleMap<Key>
): [Record<Key, string>, 'fa' | 'en'] {
  const locale = localStorage.getItem('locale');
  const localeType = locale === 'fa_IR' ? 'fa' : ('en' as const);
  return [localeMap?.[localeType]!, localeType];
}
