import { Request, Response } from "express";
export declare let getBitCoint: (req: Request, res: Response) => void;
export declare let addTransaction: (req: Request, res: Response) => void;
export declare let getMine: (req: Request, res: Response) => Promise<void>;
export declare let registerAndBroadcastNode: (req: Request, res: Response) => Promise<void>;
export declare let registerNode: (req: Request, res: Response) => Promise<void>;
export declare let registerNodesBulk: (req: Request, res: Response) => Promise<void>;
export declare let transactionBroadcast: (req: Request, res: Response) => Promise<void>;
export declare let recieveNewBlock: (req: Request, res: Response) => Promise<void>;
export declare let registAllNode: (req: Request, res: Response) => Promise<void>;
