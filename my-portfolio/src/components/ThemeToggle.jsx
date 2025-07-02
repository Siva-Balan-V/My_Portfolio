const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`btn btn-sm ${isDark ? 'btn-light' : 'btn-dark'} ms-2`}
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;
