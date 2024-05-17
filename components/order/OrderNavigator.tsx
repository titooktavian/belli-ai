const OrderNavigator = ({ leftIcon, label }) => {
  return (
    <div className="flex items-center gap-x-3">
      {leftIcon}
      {label}
    </div>
  );
}

export default OrderNavigator;
