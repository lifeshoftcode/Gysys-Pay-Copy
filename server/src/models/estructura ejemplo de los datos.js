const objetoJS = {
  customer: {
    firstName: "Juan",
    lastName: "Perez",
    email: "juan23@gmail.com",
    phone: "809-555-5555",
    address: {
      street: "Calle 1, #1",
      additionalInfo: "Ensanche Naco",
      city: "Santo Domingo",
      state: "Distrito Nacional",
      country: "DO",
      postalCode: "10101"
    }
  },
  applicationDetails: {
    name: "Dataclubes",
    url: "https://dataclubes.com",
    logoUrl: "https://dataclubes.com/assets/img/logo.png",
    token: "1234567890",
    description: "Plataforma de gestión de clubes deportivos...",
    redirectUrls: {
      success: "https://dataclubes.com/SuccessPay",
      error: "https://dataclubes.com/ErrorPay",
      cancel: "https://dataclubes.com/CancelPay"
    }
  },
  order: {
    orderId: "Order123",
    currency: "DOP",
    items: [
      {
        productId: "Dg-92ghs-trw-2",
        name: "Ventamax Estandar",
        unitPrice: 120000,
        quantity: 1,
        subscriptionPeriod: "1-Month",
        features: [
          "Hasta 12 Usuarios",
          "..."
        ]
      }
    ],
    totals: {
      subTotal: 0,
      tax: 0,
      discount: 0,
      shipping: 0,
      grandTotal: 0
    }
  },
  transactionMetadata: {
    clientIP: "123.123.123.123",
    locale: "es-DO",
  }
};
const entrega1 = {
  customer: {
    firstName: "Juan",
    lastName: "Perez",
    email: "juan23@gmail.com",
    phone: "809-555-5555",
    address: {
      street: "Calle 1, #1",
      additionalInfo: "Ensanche Naco",
      city: "Santo Domingo",
      state: "Distrito Nacional",
      country: "DO",
      postalCode: "10101"
    }
  },
  applicationDetails: {
    token: "1234567890",
  },
  order: {
    id: "Order123",
    currency: "DOP",
    items: [
      {
        productId: "Dg-92ghs-trw-2",
        name: "Ventamax Estandar",
        unitPrice: 120000,
        quantity: 1,
        subscriptionPeriod: "1-Month",
        features: [
          "Hasta 12 Usuarios",
          "..."
        ]
      }
    ],
    totals: {
      subTotal: 0,
      tax: 0,
      discount: 0,
      shipping: 0,
      grandTotal: 0
    }
  },
  transactionMetadata: {
    clientIP: "123.123.123.123",
    locale: "es-DO",
  }
};
