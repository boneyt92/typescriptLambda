import { Context, EventBridgeEvent } from "aws-lambda";
import { logger } from "./utilities";

export const lambdaHandler = async (event: EventBridgeEvent<any, any> | any, context: Context | any) => {

    logger.addContext(context);

    // Lambda Logic 

}
export const handler = lambdaHandler;