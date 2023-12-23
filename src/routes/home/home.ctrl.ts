import { Request, Response} from "express"; 
import Model from "../../model/model";

//get 방식으로 처리하는 코드들
const output = {
    // getFunc: async (req:Request, res: Response) => {

    // }
}

//post 방식으로 req, res 처리하는 코드들
const post = {
    data: async (req: Request, res: Response) => {
        const model = new Model();
        model.getData();
    },
}

module.exports= {
    output,
    post
};