import { LightningElement, wire, api } from 'lwc';
import { getFieldValue, getRecord, getFieldDisplayValue } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

let FIELDS = ['Account.Name', 'Account.Industry', 'Annual.AnnualRevenue', 'Annual.Owner.Name'];
let OFIELDS = ['Account.Phone'];


export default class GetRecordDemo extends LightningElement {
    @api recordId;
    result = {};
    // @wire(getRecord, {recordId:'$recordId', fields:[NAME_FIELD, INDUSTRY_FIELD], optionalFields:[PHONE_FIELD]})
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS, optionalFields: OFIELDS })
    account;
    
    get name() {
        return getFieldValue(this.account.data, NAME_FIELD )
    }
    get phone() {
        return getFieldValue(this.account.data, PHONE_FIELD)
    }
    get industry() {
        return getFieldValue(this.account.data, INDUSTRY_FIELD)
    }
    get owner() {
        return getFieldValue(this.account.data, OWNER_FIELD)
    }
    get annualrevenue() {
        return getFieldDisplayValue(this.account.data, ANNUALREVENUE_FIELD)
    }

        
    // recordInfo({ data, error }) { 
    //     if (data) {
    //         const { fields } = data;
    //         Object.keys(fields).forEach(item => { 
    //             let value = fields[item] && fields[item].displayValue ? fields[item].displayValue : fields[item].value
    //             this.result = { ...this.result, [item]: value }
    //         })
    //     } else if (error) { 
    //         console.error(error);
    //     }
    // }
}