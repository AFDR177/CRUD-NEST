import "./index.css";

type ComponentProps ={
  children?: any;
  className?: any;
  style?: {} | undefined;
}
export default function Component({ children, className, style= {} }:ComponentProps) {
  return (
    <div style={style} className={`box ${className}`}>
      {children}
    </div>
  );
}
