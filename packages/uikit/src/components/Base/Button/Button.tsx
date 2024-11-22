import {FC} from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({children}) => {
  return (
    <div>
      {'lsdlkfsdfsnnfs'}
      <button>
        {children}
      </button>
    </div>
  )
};

export {Button};