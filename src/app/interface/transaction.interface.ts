export default interface Transaction {
  "entryReference": string,
  "bookingDate": string,
  "valueDate": string,
  "transactionAmount": {
    "amount": string,
    "currency": string
  },
  "remittanceInformationUnstructuredArray": string[],
  "internalTransactionId": string
}
