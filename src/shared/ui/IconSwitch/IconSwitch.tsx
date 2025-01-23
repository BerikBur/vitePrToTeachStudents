import { FC } from 'react';
import './IconSwitch.css';

interface IconSwitchProps {
  icon: 'view_list' | 'view_module';
  onSwitch: () => void;
}

export const IconSwitch: FC<IconSwitchProps> = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch">
      <span 
        className="material-icons"
        onClick={onSwitch}
      >
        {icon}
      </span>
    </div>
  );
};
