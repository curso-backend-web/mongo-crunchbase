import {MongoClient} from 'mongodb';
import config from './config.js';

class MongoManager {
    constructor(configData){
       console.log(configData)
       this.client = new MongoClient(configData.urlDatabase,{useNewUrlParser: true});
        this._createConnection(configData);
        //     {useNewUrlParser: true})
        // this._createConnection(configData.db);
    }
    async _createConnection(configData){
        try {
            // this.client = await MongoClient.connect(configData.urlDatabase);
            this.db = await this.client.db(configData.db);
            console.log(this.db)
        } catch (error) {
            throw error;

        }
    }
    async _dropConnection(){
        this.client.close();
    }

    async insertOne(collectionName, data){
        try {
            const result = await this.db.collection(collectionName).insertOne(data);
            this._dropConnection();
            return result;
        } catch (error) {
            throw error;
            
        }
    }
    async insertMany(collectionName,data){
        try {
            const result = await this.db.collection(collectionName).insertMany(data);
            this._dropConnection();
            return result;
        } catch (error) {
            throw error;
            
        }
    }
    async find(collectionName,query){
        try {
            const result = await this.db.collection(collectionName)
                                        .find(query)
                                        .toArray();
            this._dropConnection();                            
            return result;
        } catch (error) {
            throw error;
            
        }
    }
    async updateOne(collectionName,query,data){
        try {
            const result = await this.db.collection(collectionName).updateOne(
                query,data
            )

            this._dropConnection();

            return result;
        } catch (error) {
            throw error;
            
        }
    }
    async removeOne(collectionName, query){
        try {
            const result = await this.db.collection(collectionName).removeOne(query);
            this._dropConnection();
            return result;
        } catch (error) {
            throw error;
            
        }
    }
    
}

export default new MongoManager(config);
