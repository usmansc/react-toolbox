import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { themr } from 'react-css-themr';
import { MENU } from '../identifiers';
import InjectIconButton from '../button/IconButton';
import InjectMenu from './Menu';

const factory = (IconButton, Menu) => {
  const IconMenu = ({
    active: activeProp,
    children,
    className,
    icon,
    iconRipple,
    inverse,
    menuRipple,
    onClick,
    onHide,
    onSelect,
    onShow,
    position,
    selectable,
    selected,
    theme,
    ...other
  }) => {
    const [active, setActive] = useState(activeProp);
    const [prevActiveProp, setPrevActiveProp] = useState(activeProp);

    useEffect(() => {
      setPrevActiveProp(activeProp);
    }, [activeProp]);

    useEffect(() => {
      if (prevActiveProp !== activeProp) {
        setActive(activeProp);
      }
    }, [activeProp, prevActiveProp]);

    const handleButtonClick = (event) => {
      event.stopPropagation();
      setActive(true);
      if (onClick) onClick(event);
    };

    const handleMenuHide = () => {
      setActive(false);
      if (onHide) onHide();
    }

    return (
      <div {...other} className={classnames(theme.iconMenu, className)}>
        <InjectIconButton
          className={theme.icon}
          icon={icon}
          inverse={inverse}
          onClick={handleButtonClick}
          ripple={iconRipple}
        />
        <InjectMenu
          active={active}
          onHide={handleMenuHide}
          onSelect={onSelect}
          onShow={onShow}
          position={position}
          ripple={menuRipple}
          selectable={selectable}
          selected={selected}
          theme={theme}
        >
          {children}
        </InjectMenu>
      </div>
    );
  };

  IconMenu.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    iconRipple: PropTypes.bool,
    inverse: PropTypes.bool,
    menuRipple: PropTypes.bool,
    onClick: PropTypes.func,
    onHide: PropTypes.func,
    onSelect: PropTypes.func,
    onShow: PropTypes.func,
    position: PropTypes.string,
    selectable: PropTypes.bool,
    selected: PropTypes.node,
      theme: PropTypes.shape({
        icon: PropTypes.string,
        iconMenu: PropTypes.string,
      }),
    };

    IconMenu.defaultProps = {
      active: false,
      className: '',
      icon: 'more_vert',
      iconRipple: true,
      menuRipple: true,
      position: 'auto',
      selectable: false,
    };

  return IconMenu;
};

const IconMenu = factory(InjectIconButton, InjectMenu);
export default themr(MENU)(IconMenu);
export { factory as iconMenuFactory };
export { IconMenu };
