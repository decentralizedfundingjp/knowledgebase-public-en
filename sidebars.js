// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'getting-started',
    'what-is-decentralized-funding',
    'introduction',
    'benefits-implementation',
    'guidebook-purpose',
    'target-readers',
    'guidebook-usage',
    {
      type: 'category',
      label: 'Models',
      items: [
        'models/model-overview',
        'models/model-quadratic-funding',
        'models/model-quadratic-voting',
        'models/model-community-voting',
        'models/model-delegated-review',
      ],
    },
    {
      type: 'category',
      label: 'Case Studies',
      items: [
        'casestudy/about-case-studies',
        'casestudy/project-catalyst',
        'casestudy/unicef-gitcoin',
        'casestudy/gitcoin',
        'casestudy/hypercerts',
        'casestudy/compound-grants-program-2.0-cgp-2.0',
        'casestudy/bankless-dao',
        'casestudy/giveth',
        'casestudy/moloch-dao',
        'casestudy/neo-yamakoshi',
      ],
    },
    {
      type: 'category',
      label: 'Blockchain',
      items: [
        'blockchain/blockchain-implementation',
      ],
    },
    {
      type: 'category',
      label: 'Challenges',
      items: [
        'challenges/challenges-legal',
        'challenges/challenges-operational',
      ],
    },
    {
      type: 'category',
      label: 'Vision',
      items: [
        'notes/vision-long-term',
      ],
    },
    'contribution-guide',
  ],
};

export default sidebars;
