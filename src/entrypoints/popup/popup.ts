import mediaNexPic from '~/public/media/nexus.webp';

import { CODE_CONTRIBUTORS, PRODUCT_VERSION } from '@/components/constants';


// Update footer credits
const footerCreditsTranslationsElem = document.getElementById('footerCreditsTranslations');
if (CODE_CONTRIBUTORS.length > 0) {
    const spanElem = document.createElement('span');
    spanElem.innerText = `Additional contributors: ${CODE_CONTRIBUTORS.join(', ')}`;
    footerCreditsTranslationsElem?.appendChild(spanElem);
}

const footerVersionElem = document.getElementById('footerVersion') as HTMLParagraphElement;
footerVersionElem.innerText = `v${PRODUCT_VERSION}`;

(document.getElementById("the") as HTMLImageElement).src = mediaNexPic;