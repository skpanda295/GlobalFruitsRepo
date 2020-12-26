import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
//import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class WireListViewToken extends LightningElement {
  
    pageToken = null;
    nextPageToken = null;
    previousPageToken = null;
    records;
    error;
    
    @wire(getListUi, {
        objectApiName: ACCOUNT_OBJECT,
//listViewApiName: 'All_Accounts',
 //       sortBy: NAME_FIELD,
        pageSize: 1,
       pageToken: '$pageToken'
    })listView({ error, data }) {
        if (data) {
           this.records = data.lists;
            console.log('data',data);
         //   console.log('info:',data.info.columns);
            this.error = undefined;
            this.nextPageToken = data.nextPageToken;
           this.previousPageToken = data.previousPageToken;
        } else if (error) {
            this.error = error; 
            this.records = undefined;
        }
    }

    handleNextPage(e) {
        this.pageToken = this.nextPageToken;
    }

    handlePreviousPage(e) {
        this.pageToken = this.previousPageToken;
    }

}