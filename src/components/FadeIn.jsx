import useInView from '../hooks/useInView';

const FadeIn = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const [ref, inView] = useInView();

  const translate = {
    up: 'translateY(28px)',
    left: 'translateX(-20px)',
    right: 'translateX(20px)',
    none: 'none',
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : translate,
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
