import { getStringSeed } from './util';
import type { PublicPath } from 'wxt/browser';

function replaceVideo (titleElem: HTMLSpanElement, thumbnailElem: Element|null) {
    // replace video card title
    const seed = getStringSeed(titleElem.innerText, 10);

    // add nexus to video card thumbnail
    if (thumbnailElem) {
        const ytImageElem = thumbnailElem.querySelector('yt-image');
        const oldThumbnail = thumbnailElem.querySelector('.nexthumb');
        if (ytImageElem && !oldThumbnail && seed < 5) {
            const src = browser.runtime.getURL(`media/thumb${seed}.png` as PublicPath);

            const nexImg = document.createElement('img');
            nexImg.src = src;
            nexImg.style.position = 'absolute';
            nexImg.className = 'nexthumb';
            nexImg.style.left = '0';
            nexImg.style.top = '0';
            nexImg.style.width = '100%';
            nexImg.style.height = '100%';
            ytImageElem.appendChild(nexImg);
        }
    }
}

function setupCardsObserver () {
    // react to dom tree updates
    // and update new video cards
    onElement('#video-title', elem => {
        // get thumbnail that's related to the title
        let thumbnailElem: Element|null = null;
        let cardParentRef: Element|null = elem?.parentElement;
        for (let i = 0; i < 10; i++) {
            thumbnailElem = cardParentRef?.querySelector('#thumbnail') ?? null;
            cardParentRef = cardParentRef?.parentElement ?? null;
            if (thumbnailElem) break;
        }
            
        if (thumbnailElem?.querySelector('.nexthumb'))
            return;

        let titleElem: HTMLSpanElement;
        if (elem.querySelector('yt-formatted-string')) {
            titleElem = elem.querySelector('yt-formatted-string') as HTMLSpanElement;
        } else {
            titleElem = elem;
        }

        replaceVideo(titleElem, thumbnailElem);
    }, { 
        childList: true, 
        subtree: true, 
        attributes: true, 
        attributeFilter: ['id', 'title', 'is-empty'],
    });
}


export function initNexify () {
    setupCardsObserver();
    console.log("[NEXIFY] NEXIFYING");
}