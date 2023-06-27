
import {navigateTo} from "../support/page_objects/navigationPage"
import {onFormLayoutsPage} from "../support/page_objects/formLayoutsPage"
import {onDatepickerPage} from "../support/page_objects/datepickerPage" 
import {onSmartTablePage} from "../support/page_objects/smartTablePage"  

describe('Test with Page Objects', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.toasterPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()

    })
    //avoid chrome

    it.only('should submit Inline and Basic forms and select tomorrow date in the calendar', {browser: ['!firefox', '!edge']}, () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', '123')
        navigateTo.datePickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selectCommonDatepickerWithRangeFromToday(7, 14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Artem', 'John')
        onSmartTablePage.updateAgeByFirstName('Artem', '29')
        onSmartTablePage.deleteRowByIndex(1)

    })

})