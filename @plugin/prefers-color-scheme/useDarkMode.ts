import { usePreferredDark, useStorage } from '@vueuse/core';
import { computed, inject, onMounted, onUnmounted, provide, watch } from 'vue';
export const darkModeSymbol = Symbol('darkMode');
/**
 * Inject dark mode global computed
 */
export const useDarkMode = () => {
    const isDarkMode = inject(darkModeSymbol);
    if (!isDarkMode) {
        throw new Error('useDarkMode() is called without provider.');
    }
    return isDarkMode;
};
/**
 * Create dark mode ref and provide as global computed in setup
 */
export const setupDarkMode = () => {
    const isDarkPreferred = usePreferredDark();
    const darkStorage = useStorage('vuepress-color-scheme', 'auto');
    const isDarkMode = computed({
        get() {
            // auto detected from prefers-color-scheme
            if (darkStorage.value === 'auto') {
                return isDarkPreferred.value;
            }
            // storage value
            return darkStorage.value === 'dark';
        },
        set(val) {
            if (val === isDarkPreferred.value) {
                darkStorage.value = 'auto';
            }
            else {
                darkStorage.value = val ? 'dark' : 'light';
            }
        },
    });
    provide(darkModeSymbol, isDarkMode);
    updateHtmlDarkClass(isDarkMode);
};
export const updateHtmlDarkClass = (isDarkMode) => {
    const update = (value = isDarkMode.value) => {
        // set `class="dark"` on `<html>` element
        const htmlEl = window?.document.querySelector('html');
        htmlEl?.classList.toggle('dark', value);
    };
    onMounted(() => {
        watch(isDarkMode, update, { immediate: true });
    });
    onUnmounted(() => update());
};
