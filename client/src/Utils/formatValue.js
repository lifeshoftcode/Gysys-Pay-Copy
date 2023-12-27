export function formatValue(valor, tipoFormato) {
    switch (tipoFormato) {
        case 'number':
            return new Intl.NumberFormat().format(valor);
        case 'date':
            //formato ISO o un objeto Date
            return new Intl.DateTimeFormat().format(new Date(valor));
        case 'money':
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(valor || 0) ;
     
        default:
            return valor.toString();
    }
}