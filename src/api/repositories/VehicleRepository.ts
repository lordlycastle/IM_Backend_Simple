import * as AWS from 'aws-sdk';
import {VehicleDto} from '../models/dto/vehicleDto';
import {DocumentClient} from 'aws-sdk/clients/dynamodb';

const tableName = 'vehicles';


export class VehicleRepository {
    private dynamoDbClient = new AWS.DynamoDB.DocumentClient();

    constructor() {
    }

    async find(id: string): Promise<VehicleDto | undefined> {
        const params: DocumentClient.GetItemInput = {
            TableName: tableName,
            Key: {
                id: id,
            }
        };
        const { Item } = await this.dynamoDbClient.get(params).promise();
        return Item;
    }
}
