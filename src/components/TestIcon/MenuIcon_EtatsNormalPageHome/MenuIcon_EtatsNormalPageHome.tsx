import { memo } from 'react';
import type { FC } from 'react';

import resets from '~/styles/_resets.module.css';
import classes from './MenuIcon_EtatsNormalPageHome.module.css';
import { HomeIcon } from '../HomeIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:3 */
export const MenuIcon_EtatsNormalPageHome: FC<Props> = memo(function MenuIcon_EtatsNormalPageHome(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.home}>
        <HomeIcon className={classes.icon} />
      </div>
    </div>
  );
});
