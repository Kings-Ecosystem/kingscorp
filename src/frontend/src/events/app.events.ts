export const AppActionEvents = {

    user: {
        login: "login"
    },

    product: {
        add: "addProduct",
        edit: "editProduct",
        retrieveSingle: "getSingleProduct",
        retrieve: "getProducts",
        delete: "deleteProduct",
    },
    stock: {
        add: "addStock",
        edit: "editStock",
        retrieveSingle: "getSingleStock",
        retrieve: "getStocks",
        delete: "deleteStock",
    },
    invoice: {
        add: "addInvoice",
        edit: "editInvoice",
        retrieveSingle: "getSingleInvoice",
        retrieve: "getInvoices",
        delete: "deleteInvoice",
    },
    personnel: {
        add: "addPersonnel",
        edit: "editPersonnel",
        retrieve: "getPersonnels",
        retrieveSingle: "getSinglePersonnel",
        delete: "deletePersonnel",
    },
    credit: {
        add: "addCredit",
        edit: "editCredit",
        retrieve: "getCredits",
        retrieveSingle: "getSingleCredit",
        delete: "deleteCredit",
    },
    inventory: {
        add: "addInventory",
        edit: "editInventory",
        retrieve: "getInventories",
        retrieveSingle: "getSingleInventory",
        delete: "deleteInventory",
    },
    service: {
        add: "addService",
        edit: "editService",
        retrieve: "getServices",
        retrieveSingle: "getSingleService",
        delete: "deleteService",
    },
    sale: {
        add: "addSale",
        edit: "editSale",
        retrieve: "getSales",
        retrieveSingle: "getSingleSale",
        delete: "deleteSale",
    },
    role: {
        add: "addRole",
        edit: "editRole",
        retrieve: "getRoles",
        retrieveSingle: "getSingleRole",
        delete: "deleteRole",
    },
    group: {
        add: "addGroup",
        edit: "editGroup",
        retrieve: "getGroups",
        retrieveSingle: "getSingleGroup",
        delete: "deleteGroup",
    },
    notification: {
        sendSMS: "sendSmsNotification",
        sendEmail: "sendEmailNotification",
        sendPush: "sendPushNotification",
        add: "addNotification",
        edit: "editNotification",
        retrieve: "getNotifications",
        retrieveSingle: "getSingleNotification",
        delete: "deleteNotification",
    },
    preference:{
        add: "addPreference",
        edit: "editPreference",
        retrieve: "getPreferences",
        retrieveSingle: "getSinglePreference",
        delete: "deletePreference",
    }
}