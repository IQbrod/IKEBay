export enum PaymentType {
    paypal,
    creditcard
}

export interface IPaiementInfos {
    paymenttype?: PaymentType;
    cardnum?: string;
    cvc?: string;
    expiry?: string;
    name?: string;
}

export class PaiementInfos implements IPaiementInfos {
    constructor(
        public paymenttype?: PaymentType,
        public cardnum?: string,
        public cvc?: string,
        public expiry?: string,
        public name?: string
    ) {
        this.paymenttype = paymenttype !== null ? paymenttype : null;
        this.cardnum = cardnum !== null ? cardnum : null;
        this.cvc = cvc !== null ? cvc : null;
        this.expiry = expiry !== null ? expiry : null;
        this.name = name !== null ? name : null;
    }
}
