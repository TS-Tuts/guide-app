export function i18n(dict: Record<string, Record<string, string>>) {
    return (lang: string, key: string, fallback = ''): string => {
        return dict[lang][key];
    };
}
