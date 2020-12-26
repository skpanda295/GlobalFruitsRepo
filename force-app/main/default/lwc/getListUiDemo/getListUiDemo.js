import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class WireListViewToken extends LightningElement {
    pageToken = null;
    nextPageToken = null;
    previousPageToken = null;
    records;
    error;

    @wire(getListUi, {
        objectApiName: ACCOUNT_OBJECT,
        listViewApiName: 'All_Accounts',
        sortBy: NAME_FIELD,
        pageSize: 10,
        pageToken: '$pageToken'
    })listView({ error, data }) {
        if (data) {
            this.records = data.records.records;
            console.log(data.records);
            this.error = undefined;
            this.nextPageToken = data.records.nextPageToken;
            this.previousPageToken = data.records.previousPageToken;
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