import { FunctionComponent } from 'react';

const OrderNavigator: FunctionComponent<{ leftIcon: any, label: string }> = props => {
  const { leftIcon, label } = props;
  return (
    <div className="flex items-center gap-x-3">
      {leftIcon}
      {label}
    </div>
  );
}

export default OrderNavigator;
