import { createContext } from "react";
import { IContext } from "../interfaces/IContext";

const context = createContext<IContext>({} as IContext);

export default context;