import {MongoClient} from 'mongodb';
import config from './config.js';



class MongoManager {
    constructor(config){
        this.url = config.urlDatabase;
        this._connect(config.db);
    }
    async _connect(db){
        try {
            this.client = new MongoClient(this.url,{useNewUrlParser:true});
            this.client.connect();
            this.db = this.client.db(db);
        } catch (error) {
            this.close();
            throw error;

        }
    }
    async close(){
        this.client.close();
    }

    async query(params){
        try {
          return  this.db.executeDbCommand(params);
        } catch (error) {
            this.close();
            throw error;
            
        }
    }
}

export default new MongoManager(config);;
 