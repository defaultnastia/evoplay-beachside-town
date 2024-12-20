import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import icons from '../../img/sprite.svg';

// ============ DATA ============

const faqArray = [
  {
    title: 'How do I start playing the game?',
    content:
      'Simply download Beachside Town from Google Play, create your town, and begin merging items to build your dream beach escape!',
  },
  {
    title: 'Is the game free to play?',
    content:
      'Yes, Beachside Town is free to download and play with optional in-app purchases for faster progress and special items.',
  },
  {
    title: 'Can I play the game offline?',
    content:
      'Yes, you can enjoy Beachside Town without an internet connection. Play anytime and anywhere!',
  },
  {
    title: 'How do I unlock new areas in the game?',
    content:
      'As you progress through levels, completing tasks and merging resources, you`ll unlock new areas and exciting beachside locations to build and explore.',
  },
  {
    title: 'What are quests in Beachside Town?',
    content:
      'Quests are tasks given by the characters in your town that you can complete for rewards like resources, decorations, and new locations.',
  },
  {
    title: 'Can I customize my beach town?',
    content:
      'Absolutely! You can design your town by placing buildings, decorating with items, and shaping the landscape to your liking.',
  },
];

// ============ MARKUP ============

const faqSectionParentEl = document.querySelector('ul.faq-list');

function renderFaqSection(array) {
  faqSectionParentEl.innerHTML = createFaqMarkup(array);
}

const arrowMarkup = `<button class="arrow-button" aria-label="arrow for open or close text"><svg class="arrow-icon js-down" width="20" height="10"><use href="${icons}#arrow-accordion"></use></svg></button>`;

function createFaqParagraph({ content }) {
  const paragraph = `<div class="faq-list-content-box ac-panel"><p class="faq-list-content ac-text">${content}</p></div>`;
  return paragraph;
}

function createFaqMarkup(array) {
  let faqMarkup = '';
  array.forEach(unit => {
    const textMarkup = createFaqParagraph(unit);
    const faqUnitMarkup = `<li class="faq-list-item ac"><div class="faq-list-header-box ac-header ac-trigger"><h5 class="faq-list-header">${unit.title}</h5>${arrowMarkup}</div>${textMarkup}</li>`;
    faqMarkup += faqUnitMarkup;
  });
  return faqMarkup;
}

// ============ FAQ ============

const containerOptions = {
  showMultiple: true,
  beforeOpen: function (currentElement) {
    currentElement
      .querySelector('.js-down')
      .setAttribute('transform', 'rotate(180)');
  },
  beforeClose: function (currentElement) {
    currentElement
      .querySelector('.js-down')
      .setAttribute('transform', 'rotate(0)');
  },
};

// ============ RENDER ============

renderFaqSection(faqArray);
const accordion = new Accordion('.accordion-container-faq', containerOptions);
