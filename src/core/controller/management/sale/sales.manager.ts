/**
 * @copyright king's 2021
 * @author Engineer Kambang Sinclaire
 * @owner Kingscorp
 * @contributors 
 * @license MIT 
 * @link <https://github.com/KambangSinclaire/kingscorp.git>
 * @description King's is a utility software developed with the management of an enterprise in mind
 */

 import AbstractBaseManager from "../AbstractBaseManager";
 
 export class SalesManager extends AbstractBaseManager {
 
     // add new Sales
     async addSale(payload: any) {
         return SalesManager.addResource(payload)
     }
 
     //get all Saless
     async getSales(payload: any) {
         return SalesManager.getAllResources(payload);
     }
 
     // delete a Sales
     async deleteSale(id: string | any) {
         return SalesManager.deleteResource(id)
     }
 
     // edit a Sales
     async editSale(payload: any) {
         return SalesManager.updateResource(payload)
     }
 
     // get a single Sales
     async getSingleSale(id: any) {
         return SalesManager.getSingleResource(id);
     }
 }