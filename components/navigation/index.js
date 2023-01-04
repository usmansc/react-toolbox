import { themr } from 'react-css-themr-usmansc';
import { NAVIGATION } from '../identifiers';
import { navigationFactory } from './Navigation';
import { Button } from '../button';
import { Link } from '../link';
import theme from './theme.module.css';

const ThemedNavigation = themr(NAVIGATION, theme)(navigationFactory(Button, Link));
export default ThemedNavigation;
export { ThemedNavigation as Navigation };
