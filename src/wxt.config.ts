import { defineConfig } from 'wxt';
import { PRODUCT_VERSION } from './components/constants';

// See https://wxt.dev/api/config.html
export default defineConfig({
    manifestVersion: 3,
    manifest: {
        name: 'Nexify',
        version: PRODUCT_VERSION,
        description: 'Adds Nexus GD icon to random YouTube videos',
        browser_specific_settings: {
            gecko: {
                id: 'nexify@gducrash',
                strict_min_version: '60.0',
            }
        },

        // permissions: [
        //     'storage'
        // ],
        web_accessible_resources: [
            {
                "matches": [
                    "*://*.youtube.com/*"
                ],
                "resources": [
                    "media/*",
                ]
            },
        ],
    },
});
