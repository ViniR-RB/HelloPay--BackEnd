import "dotenv/config";
export default abstract class Configuration {


    static port: number = parseInt(process.env.PORT!)
    static DbType: string = process.env.DBTYPE!
    static Host: string = process.env.HOST!
    static DbPort: number = parseInt(process.env.DBPORT!)
    static Username: string = process.env.USERNAME!
    static Password: string = process.env.PASSWORD!
    static Database: string = process.env.DATABASE!
}