import { LightningElement } from 'lwc';
import { getFieldValue } from 'lightning/uiRecordApi';

// Car Schema
import NAME_FIELD from '@salesforce/schema/Car__c.Name'
import PICTURE_URL_FIELD from '@salesforce/schema/Car__c.Picture_URL__c'
import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category__c'
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c'
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c'
import FUEL_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c'
import SEATS_FIELD from '@salesforce/schema/Car__c.Number_of_Seats__c'
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c'

export default class CarCard extends LightningElement {
    categoryField = CATEGORY_FIELD
    makeField = MAKE_FIELD
    msrpField = MSRP_FIELD
    fuelField = FUEL_FIELD
    seatsField = SEATS_FIELD
    controlField = CONTROL_FIELD

    // Id of Car__c to display data
    recordId = 'a00Hy00000H04q5IAB'
    carName
    pictureUrl
    handleRecordLoaded(event){
        const {records} = event.detail
        const recordData = records[this.recordId];
        this.carName = getFieldValue(recordData, NAME_FIELD)
        this.pictureUrl = getFieldValue(recordData, PICTURE_URL_FIELD)
    }

}