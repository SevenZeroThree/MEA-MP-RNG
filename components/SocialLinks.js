import React from 'react';

import Twitter from './Twitter';
import Github from './Github';

import '../content/sass/social-links.scss';

const SocialLinks = () => (
    <div className="social">
        <Twitter />
        <Github />
    </div>
)

export default SocialLinks;