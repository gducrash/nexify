import { initNexify } from "@/components/dom";

export default defineContentScript({
    matches: [
        '*://youtube.com/*',
        '*://www.youtube.com/*',
    ],
    main() {
        (async() => {
            initNexify();
        })();
    },
});
