import { themr } from 'react-css-themr-usmansc';
import { APP_BAR } from '../identifiers';
import { appBarFactory } from './AppBar';
import { IconButton } from '../button';
import theme from './theme.module.css';

const AppBar = appBarFactory(IconButton);
const ThemedAppBar = themr(APP_BAR, theme)(AppBar);

export default ThemedAppBar;
export { ThemedAppBar as AppBar };
