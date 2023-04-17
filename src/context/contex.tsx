import { createContext } from "react";
import { IContext } from "../interfaces/IContext";

const context = createContext<IContext | undefined>(undefined);

export default context;