const Link = ({ className, to, children }) => {
  const handleClick = e => {
    // mac => 按住command點Link, window => 按住ctrl點Link
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    window.history.pushState({}, '', to);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={handleClick} href={to} className={className}>
      {children}
    </a>
  );
};

export default Link;
