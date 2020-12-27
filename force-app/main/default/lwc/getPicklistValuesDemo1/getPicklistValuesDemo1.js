import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class GetPicklistValuesDemo1 extends LightningElement {
    picklistvalue=null
    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    }) objectInfos
 
    @wire(getPicklistValues, {
        recordTypeId: '$objectInfos.data.defaultRecordTypeId',
        fieldApiName: INDUSTRY_FIELD
    }) IndustryPicklistValues

    handleChange(e) {
        this.picklistvalue = e.target.value;
      
    }
    

}