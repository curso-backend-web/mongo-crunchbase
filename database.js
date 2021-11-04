import {MongoClient} from 'mongodb';
import config from './config.js';



class MongoManager {
    constructor(config){
        this.url = config.urlDatabase;
        this._connect();
    }
    async _connect(){
        try {
            this.client = new MongoClient(this.url,{useNewUrlParser:true});
            this.client.connect();

        } catch (error) {
            this._dropConnection();
            throw error;

        }
    }
    async _dropConnection(){
        this.client.close();
    }



    async insertOne(collectionName, data){
        try {
            const result = await this.client.db().collection(collectionName)
                                                .insertOne(data);
            this._dropConnection();
            return result;
        } catch (error) {
            throw error;
            
        }
    }
    async insertMany(collectionName,data){
        try {
            const result = await this.client.db().collection(collectionName)
                                        .insertMany(data);
            this._dropConnection();
            return result;
        } catch (error) {
            throw error;
            
        }
    }
    async find(collectionName,query){
        try {
            const result = await this.client.db().collection(collectionName)
                                         .find(query)
                                         .limit(10)
                                         .toArray();
            this._dropConnection();                            
            return result;
        } catch (error) {
            throw error;
            
        }
    }
    async updateOne(collectionName,query,data){
        try {
            const result = await this.client.db().collection(collectionName)
                        .updateOne(query,data)

            this._dropConnection();

            return result;
        } catch (error) {
            throw error;
            
        }
    }
    async removeOne(collectionName, query){
        try {
            const result = await this.client.db().collection(collectionName)
                                                .removeOne(query);
            this._dropConnection();
            return result;
        } catch (error) {
            throw error;
            
        }
    }
    
}

 export default new MongoManager(config);
