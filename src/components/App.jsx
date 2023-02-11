import { Counter } from "./Counter/Counter";
import  css  from "./style.module.css";
export const App = () => {
  return (
    <div className={css.container}>
     <div className={css.box}>
       <Counter />
     </div>
    </div>
  );
};
