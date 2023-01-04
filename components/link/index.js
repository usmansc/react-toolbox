import { themr } from 'react-css-themr-usmansc';
import { LINK } from '../identifiers';
import { Link } from './Link';
import theme from './theme.module.css';

const ThemedLink = themr(LINK, theme)(Link);

export default ThemedLink;
export { ThemedLink as Link };
