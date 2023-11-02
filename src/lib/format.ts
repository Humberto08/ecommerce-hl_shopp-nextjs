export function formatPrice(price: number) {
    return (price / 1).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}